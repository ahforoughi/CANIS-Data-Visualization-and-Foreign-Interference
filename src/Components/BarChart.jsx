import React from 'react';
import "../layout.css";


function BarPlot() {
    return (
        <div className="image-container">
            <img src='../../python_code/top_twitter.svg' alt="top_twitter" className="image-item" />
            <img src='../../python_code/top_facebook.svg' alt="top_facebook" className="image-item" />
            <img src='../../python_code/top_instagram.svg' alt="top_instagram" className="image-item" />
            <img src='../../python_code/top_tiktok.svg' alt="top_tiktok" className="image-item" />
            <img src='../../python_code/top_youtube.svg' alt="top_youtube" className="image-item" />
        </div>
    );
};

export default BarPlot;
