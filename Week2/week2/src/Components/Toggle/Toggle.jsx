import React, { useState } from "react";
import "./Toggle.css";

export default function Button() {
    const [toggled, setToggle] = useState(false);

    return (
        <div className="Main">
            <button 
                className={`toggle-btn ${toggled ? "toggled" : ""}`}
                onClick={() => setToggle(!toggled)}
            > 
                <div className="thumb"></div>
            </button>
        </div>
    );
}

