import { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    const newUser = {
      id: (user.name + user.age),
      name: user.name,
      age: user.age
    };

    const userAlreadyExists = users.filter((user) => {
      return user.id === newUser.id;
    }).length;

    if (!userAlreadyExists) {
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }
  }

  return (
    <div className="container">
      <AddUser onUserSave={addUser} />
      <UserList users={users} />      
    </div>
  );
}

export default App;
