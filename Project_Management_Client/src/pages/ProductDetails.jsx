import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../component/Loader";
function ProductDetails(props) {
  // ********************Api fetch Data**************************
  const [project, setProject] = useState([]);
  const [clients, setClients] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  // ***************** Form data **************************

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [client, setClient] = useState("");
  useEffect(() => {
    fetchProjectApi();
    fetchClientApi();
  }, []);

  useEffect(() => {
    if (project) {
      setProjectName(project?.project_name);
      setDescription(project?.description);
      setStatus(project?.status);
      setClient(project?.clients?.id);
    }
  }, [project]);

  const fetchProjectApi = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/fetchParticular/${id}?populate=*`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setProject(response.data.data);
        setLoading(false);
      } else {
        alert("Something went wrong!!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        // setLoading(false);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteProject = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `http://localhost:5000/api/v1/deleteProject/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("delete project-----", response);

      if (response.status === 201) {
        window.location = "/";
        setLoading(false);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const submitForms = (e) => {
    e.preventDefault();

    updateProject();
  };
  const updateProject = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `http://localhost:5000/api/v1/updateProject/${id}`,
        {
          project_name: projectName,
          description: description,
          status: status,
          clients: client,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setLoading(false);
        window.location = "/";
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="border p-3 rounded">
              <div className="text-end">
                <button className="btn btn-light" onClick={() => navigate(-1)}>
                  Back
                </button>
              </div>
              <div>
                <h3>{project.project_name}</h3>
                <p className="mb-4"> {project.description}</p>
                <p className="fw-bold mb-0">Project Status</p>
                <p className="mb-4">{project.status}</p>
              </div>
              {clients.length > 0 ? (
                <div className="mt-5">
                  <h5 className="mb-3">Client Information</h5>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-square"
                        viewBox="0 0 16 16"
                        style={{ fontSize: "22px", marginRight: "5px" }}
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                      </svg>
                      <span>{clients?.[project.id].Name}</span>
                    </li>
                    <li className="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                        style={{ fontSize: "22px", marginRight: "5px" }}
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                      <span>{clients?.[project.id].Email}</span>
                    </li>

                    <li className="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                        style={{
                          fontSize: "22px",
                          marginRight: "5px",
                          rotate: "90",
                        }}
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                      <span>{clients?.[project.id]?.Mobile}</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="mt-5">
                  <h6>No Client Found. Please add or update client!!</h6>
                </div>
              )}
              <div className="mt-5">
                <h5 className="mb-3">Update Project Details</h5>
                <form onSubmit={(e) => submitForms(e)}>
                  <div className="mb-2">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setProjectName(e.target.value)}
                      name="name"
                      value={`${projectName}`}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      onChange={(e) => setDescription(e.target.value)}
                      name="description"
                      value={`${description}`}
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Status</label>
                    <select
                      className="form-control"
                      onChange={(e) => setStatus(e.target.value)}
                      name="status"
                      value={`${status}`}
                    >
                      <option>Select Status</option>
                      <option value="Not Started">Not Started</option>
                      <option value="Pending">Pending</option>
                      <option value="Started">Started</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <div className="mb-3 position-relative">
                    <label className="form-label">Client</label>
                    <select
                      className="form-control"
                      onChange={(e) => setClient(e.target.value)}
                      name="client"
                      value={`${client}`}
                    >
                      <option>Select Client</option>
                      {clients.length > 0 &&
                        clients?.map((client) => (
                          <option value={client.id} key={client.id}>
                            {client?.Name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </form>
              </div>
              <div className="text-end mt-4">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteProject()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                  Delete Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
