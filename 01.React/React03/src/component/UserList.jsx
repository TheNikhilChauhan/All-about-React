import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Chandler", age: 30 },
    { id: 2, name: "Ross", age: 30 },
    { id: 3, name: "Joey", age: 31 },
    { id: 4, name: "Phoebe", age: 32 },
  ];
  return (
    <div>
      UserList:
      <div>
        {users.map((user) => (
          <ul key={user.id}>
            <li>Name: {user.name}</li>
            <li>Age: {user.age}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default UserList;
