import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div class="card profile-card shadow">
          <h5 class="card-header">Settings</h5>
          <div class="card-body" style={{ padding: "30px" }}>
            <h4 class="card-title">
              <i class="fas fa-id-card-alt" /> chiranjib.jena@gmail.com
            </h4>
            <br />
            <p class="card-text">
              <Link to="/change_password">
                <i class="fas fa-arrow-circle-right" /> Change Password
              </Link>
            </p>
            <p class="card-text">
              <Link to="/upload_docs">
                <i class="fas fa-arrow-circle-right" /> Add New Document
              </Link>
            </p>
            <p class="card-text">
              <Link to="/add_phone">
                <i class="fas fa-arrow-circle-right" /> Add New Phone Number
              </Link>
            </p>
            <p class="card-text">
              <i class="fas fa-arrow-circle-right" /> Admin and revise your
              profile.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
