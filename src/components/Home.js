import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const deletecontact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("deleted secccessfully")
  };
  return (
    <div className=" container">
      <div className="row">
        <div className="col-md-12 text-center mt-2  fw-bold mx-auto">
          <Link to="/add" className=" btn btn-outline-dark bg-black text-white">
            ADD Conatact
          </Link>
        </div>
        <div className="col-md-12 mx-auto">
          <h1 className=" text-center mt-3 bg-black text-white p-1">
            Welcome to the React-Redux-Contact App
          </h1>
        </div>
        <div className="col-md-10 mx-auto">
          <table className=" table table-hover">
            <thead className=" text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <>
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>
                      <Link to={`edit/${id}`} className=" btn btn-primary mx-2">
                        Edit This
                      </Link>
                      <button
                        type="button"
                        className=" btn btn-danger mx-2"
                        onClick={() => deletecontact(contact.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
