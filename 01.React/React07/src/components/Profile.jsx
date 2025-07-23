import React from "react";
import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({ name: "", age: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Profile</h2>
      <div>
        {" "}
        <label>
          {" "}
          Name:
          <input
            type="text"
            placeholder="Enter name"
            onChange={changeHandler}
            value={user.name}
            name="name"
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="text"
            placeholder="Enter age"
            name="age"
            value={user.age}
            onChange={changeHandler}
          />
        </label>
      </div>
      <div>
        <h3>Name: {user.name}</h3>
        <h3>Age: {user.age}</h3>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Profile;
