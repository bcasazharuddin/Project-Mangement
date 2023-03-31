import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isDeleteClient, setIsDeleteCleint] = useState("");

  useEffect(() => {
    fetchClientApi();
    fetchProjectApi();
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
  const fetchProjectApi = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/fetchAllProject",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setProjects(response.data.data);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    setIsDeleteCleint(id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/deleteClient/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setIsDeleteCleint("");
        window.location = "/";
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="py-4">
        <div className="container">
          <div className="row">
            {/* project list */}
            {projects.map((projectValues) => (
              <div className="col-md-6 mb-2" key={projectValues.id}>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-bold">{projectValues.project_name}</h5>
                      <Link to={`/${projectValues.id}`}>
                        <button className="btn btn-light">View</button>
                      </Link>
                    </div>
                    <p className="fs-6 mt-2 mb-0">
                      Status: <b>{projectValues.status}</b>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <hr className="mt-5" />
            <div className="table">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((clientValue) => (
                    <tr key={clientValue.id}>
                      <td>{clientValue.Name}</td>
                      <td>{clientValue.Email}</td>
                      <td>{clientValue.Mobile}</td>
                      <th scope="row">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(clientValue.id)}
                        >
                          {isDeleteClient == clientValue.id ? (
                            <span>...</span>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fillRule="currentColor"
                              className="bi bi-trash3"
                              viewBox="0 0 16 16"
                              id={clientValue.id}
                            >
                              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg>
                          )}
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
