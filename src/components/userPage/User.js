import React, { useState, useEffect } from "react";

export default function User() {
  const [loggedInText, setLoggedInText] = useState("Not logged in");
  const [userData, setUserData] = useState([]);
  let index = 0;
  // verify user and load data
  useEffect(() => {
    const fetchData = () => {
      fetch(`https://server-side-task.vercel.app/get-users`, {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          if (data.length) {
            setLoggedInText(
              `Logged in with user's name: ${localStorage.getItem("user")}`
            );
          }
        })
        .catch((e) => console.log(e));
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2 className="text-center mt-2 text-success">{loggedInText}</h2>
      {userData.length ? (
        <div className="mt-4">
          <p className="display-5 mt-5 text-center">All user data: </p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((e) => {
                index = index + 1;
                return (
                  <tr key={e._id}>
                    <th scope="row">{index}</th>
                    <td>{e.email}</td>
                    <td>{e.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
