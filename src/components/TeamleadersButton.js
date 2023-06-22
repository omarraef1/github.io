import React from "react";

export default function TeamleadersButton({ handleClick }) {
  return (
    <div id="profile">
      <div className="duration">
        <button onClick={() => handleClick(1)}>Teamleaders</button>
      </div>
    </div>
  );
}
