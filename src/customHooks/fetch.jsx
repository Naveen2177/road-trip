import React, { useEffect, useState } from "react";

const CodeFetch = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/QuincyLarson")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>Error fetching user data.</p>;
  }

  return (
    <>
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt="User Avatar" />
          <p>Company: {userData.company}</p>
          <p>Bio: {userData.bio}</p>
        </div>
      )}
    </>
  );
};

export default CodeFetch;
