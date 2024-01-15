import React from "react";
import { Link, useParams  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const EditDetail = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const contacts = useSelector((state) => state);
  const { id } = useParams();
  const currcontact = contacts.find((contact) => contact.id === parseInt(id));
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    if(currcontact){
      setname(currcontact.name);
      setemail(currcontact.email);
      setnumber(currcontact.number);
    }
  }, [currcontact]);

  const handeleSubmit = (e) => {
    e.preventDefault();
   
    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id)  && contact.email===email
    );
    const checknumber = contacts.find(
      (contact) =>  contact.id !== parseInt(id) && contact.number === parseInt(number)
    );
    const checkname = contacts.find((contact) => contact.name === name && name);
    if (!email || !number || !name) {
      return toast.warning("please fill all inform");
    }
    if (checkEmail) {
      return toast.error("email used");
    }
    if (checkname) {
      return toast.error("name used");
    }
    if (checknumber) {
      return toast.error("number used");
    }

    // return toast.success("successfully")
    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };
    dispatch({type:"UPDATE_CONTACT" , payload:data});
    toast.success("UPDATEd SUCCESSFULLY")
    history ("/")
  };
  return (
    <div className=" container">
      {currcontact ? (
        <>
          <div className="row p-5">
            <h1 className=" display-3 bg-black text-white mt-3 fw-bold text-center ">
              Edit contact - {id}
            </h1>
            <div className="col-md-6 shadow mx-auto p-5">
              <form  onSubmit={handeleSubmit}>
                <div className="formgroup">
                  <input
                    type="text"
                    placeholder="Name"
                    className=" form-control"
                    value={name}
                onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="formgroup">
                  <input
                    type="text"
                    placeholder="Email..."
                    className=" form-control"
                    value={email}
                onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="formgroup">
                  <input
                    type="number"
                    placeholder="Phone No"
                    className=" form-control"
                    value={number}
                onChange={(e) => setnumber(e.target.value)}
                  />
                </div>
                <div className="formgroup">
                  <input
                    type="submit"
                    value="update Contact "
                    className="bg-black text-white btn "
                  />
                  <Link
                    to="/"
                    className=" bg-danger text-white btn btn-block mx-4"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className=" display-2 bg-danger text-white mt-3 fw-bold text-center ">
          element not persent with id {id}
        </h1>
      )}
    </div>
  );
};

export default EditDetail;
