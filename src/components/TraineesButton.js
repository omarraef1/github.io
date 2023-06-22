import React from 'react'

export default function TraineesButton({ handleClick }) {
    return (
        <div id="profile">
        <div className="duration">
          <button onClick={() => handleClick(2)}>Team Leaders</button>
        </div>
      </div>
    )
}
