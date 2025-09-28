import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Use hardcoded data so you can view layout and CSS without backend
    setProfile({
      name: "Demo Seller",
      verified_count: 5,
      facebook_friends: 430,
      facebook_joined: "2012",
      instagram_followers: 210,
      instagram_joined: "2014"
    });
    // To use backend, replace above with fetch logic
    // fetch("http://localhost:8000/users")
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.length > 0) setProfile(data[0]);
    //   })
    //   .catch(err => console.log("Error fetching demo user:", err));
  }, []);

  return (
    <Layout>
      {profile ? <ProfileCard profile={profile} /> : <p>Loading profile...</p>}
    </Layout>
  );
}

export default App;

