import React from "react";
import "./login.scss";

import List from "../../components/List/List";

const Login = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:{" "}
              <img
                src=" https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montan%CC%83ez.jpeg"
                alt=""
              />
            </span>
            <span>Username: Mc Bride</span>
            <span>Email: tangangbride@gmail.com</span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Post</button>
          </div>

          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
        </div>
      </div>

      <div className="chatSection">
        <div className="wrapper">
          <h1> Second Section</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
