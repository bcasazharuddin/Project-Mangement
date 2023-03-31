import React from "react";
import AddClientModel from "./AddClientModel";
import AddNewProject from "./AddNewProject";

function Header(props) {
  return (
    <nav className="bg-body-tertiary py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
              <div className="logo  fw-bold fs-4 text-danger">ProjectMgmt</div>
              <div className="menu-bar">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#addClient"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="32"
                    fill="currentColor"
                    class="bi bi-person "
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  Add Client
                </button>
                <button
                  type="button"
                  class="btn btn-success ms-3"
                  data-bs-toggle="modal"
                  data-bs-target="#addProject"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="32"
                    fill="currentColor"
                    class="bi bi-list-ul"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                    />
                  </svg>
                  New Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddNewProject />
      <AddClientModel />
    </nav>
  );
}

export default Header;
