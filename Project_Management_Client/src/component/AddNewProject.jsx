import axios from "axios";
import React, { useEffect, useState } from "react";

function AddNewProject(props) {
  // *********************************  Ist Method **************************
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [status, setStatus] = useState("");
  // const [client, setClient] = useState("");
  // const handleSubmit = (e) => {
  //   console.log(name);
  //   console.log(description);
  //   console.log(status);
  //   console.log(client);

  //   e.preventDefault();
  //   setName("");
  //   setDescription("");
  //   setStatus("");
  //   setClient("");

  //   // setFirstName("");
  // };

  // **************************  2nd Method *********************
  const [formData, setFormData] = useState({});
  const [clients, setClients] = useState([]);
  const [isSubmitform, setIsSubmitform] = useState(false);
  useEffect(() => {
    fetchClientApi();
  }, []);
  const fetchClientApi = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/fetchAllClient",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setClients(response.data.data);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    setIsSubmitform(true);
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/projectCreate",
        {
          project_name: formData.name,
          description: formData.description,
          status: formData.status,
          // Name: formData.client,
          clients: formData.client,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status == 201) {
        setIsSubmitform(false);
        window.location = "/";
      } else {
        alert("Something went wrong");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(formData);
  return (
    <div className="modal fade" id="addProject" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title" id="exampleModalLabel">
              New Project
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
              <div className="mb-2">
                <label className="col-form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  // value={formData.name ? formData.name : ""}
                  // onChange={(e) => setName(e.target.value)}
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  // value={formData.description ? formData.description : ""}
                  // onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
              <div className="mb-2">
                <label className="form-label">Status</label>
                <select
                  className="form-control"
                  // value={status}
                  // value={formData.status ? formData.status : ""}
                  // onChange={(e) => setStatus(e.target.value)}
                  name="status"
                  onChange={(e) => handleChange(e)}
                >
                  <option>Not Started</option>
                  <option>Pending</option>
                  <option>Started</option>
                  <option>Completed</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Client</label>
                <select
                  className="form-control"
                  // value={client}
                  // value={formData.client ? formData.client : ""}
                  // onChange={(e) => setClient(e.target.value)}
                  name="client"
                  onChange={(e) => handleChange(e)}
                >
                  <option>Select Client</option>
                  {clients.length > 0 &&
                    clients?.map((client) => (
                      <option value={client.id} key={client.id}>
                        {client.Name}
                      </option>
                    ))}
                </select>
              </div>
              {isSubmitform ? (
                <button type="submit" className="btn btn-success">
                  Submit...
                </button>
              ) : (
                <button type="submit" className="btn btn-success">
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

export default AddNewProject;
