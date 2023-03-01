import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const UserList = () => {
  const [users, setUser] = useState([]);
  const [isUsersVisible, setIsUsersVisible] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const resData = await response.json();
      setUser(resData.results);
    };
    fetchUser();
  }, []);

  function removeItemHandler(idx) {
    setUser((users) => {
      const data = [...users];
      data.splice(idx, 1);
      return data;
    });
  }

  function ToggleHandler() {
    setIsUsersVisible((preState)=>!preState)
  }

  const content = (
    <ul className="user-list">
      {users.map((user, idx) => (
        <li key={idx} className="user-item" onClick={removeItemHandler}>
          <SingleUser user={user} />
        </li>
      ))}
    </ul>) 

  return (
    <>
      <button className="toggle-button"
        onClick={ToggleHandler}
      >
        Toggle
      </button>
      {isUsersVisible ? content : <p id="toggle-p">Please click the Toggle button to show people.</p>
      }
    </>
  );
};

export default UserList;
