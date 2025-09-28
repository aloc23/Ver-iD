import React, { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setProfile(data[0]);
        }
      })
      .catch(err => console.log("Error fetching demo user:", err));
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Verification App</h1>
      {profile ? <ProfileCard profile={profile} /> : <p>Loading profile...</p>}
    </div>
  );
}

export default App;
