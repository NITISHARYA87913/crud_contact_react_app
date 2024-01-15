import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "../components/style.css";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AddContact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const contacts = useSelector((state) => state);
  console.log(contacts);
  const dispatch = useDispatch();
  const history = useNavigate();
  const handeleSubmit = (e) => {
    e.preventDefault();
   
    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );
    const checknumber = contacts.find(
      (contact) => contact.number === parseInt(number)
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
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };
    dispatch({type:"ADD_CONTACT" , payload:data});
    toast.success("Registration SUCCESSFULLY")
    history("/")
  };

  return (
    <div className=" container">
      <div className="row p-5">
        <h1 className=" display-3 bg-black text-white mt-3 fw-bold text-center ">
          Add contact
        </h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handeleSubmit}>
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
                value="Add Student "
                className="bg-black text-white btn btn-block"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
