import React, { useState } from "react";
import axios from "axios";

function AddClientModel(props) {
  const [formData, setFormData] = useState({});
  const [isFormSubmit, setisFormSubmit] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setisFormSubmit(true);
      const response = await axios.post(
        "http://localhost:5000/api/v1/clientCreate",
        {
          Name: formData.name,
          Email: formData.email,
          Mobile: formData.phone,
        }
      );
      console.log(response.data);
      if (response.status === 201) {
        setisFormSubmit(false);
        window.location = "/";
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="modal fade" id="addClient" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title" id="exampleModalLabel">
              Add Client
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label className="col-form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {isFormSubmit ? (
                <button type="submit" className="btn btn-primary">
                  Submitting...
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddClientModel;
