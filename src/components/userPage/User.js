import React, { useState } from "react";

export default function User() {
  const [loggedInText, setLoggedInText] = useState(
    localStorage.getItem("user")
  );
  return (
    <div>
      {loggedInText ? (
        <h2 className="text-center mt-2 text-success">
          Logged in with username: {loggedInText}
        </h2>
      ) : (
        <h2 className="text-center mt-2 text-success">Not logged in</h2>
      )}
    </div>
  );
}
