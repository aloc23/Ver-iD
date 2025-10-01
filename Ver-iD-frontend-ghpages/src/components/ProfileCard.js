import React from "react";
import "./ProfileCard.css";

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <h2 className="profile-name">{profile.name}</h2>
      <div className="verified">
        <span className="verified-badge">✅</span>
        <span>Verified {profile.verified_count} times</span>
      </div>

      <div className="profile-section">
        {profile.facebook_friends !== null && (
          <p>
            📘 Facebook: <strong>{profile.facebook_friends}</strong> friends
            {profile.facebook_joined && (
              <span> (since {profile.facebook_joined})</span>
            )}
          </p>
        )}
        {profile.instagram_followers !== null && (
          <p>
            📸 Instagram: <strong>{profile.instagram_followers}</strong> followers
            {profile.instagram_joined && (
              <span> (since {profile.instagram_joined})</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
