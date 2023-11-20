import React from 'react';
import "../layout.css";


function PiePlot() {
    return (
        <div className="image-container">
            <img src='../../python_code/top5_twitter_by_parent.svg' alt="top_twitter_by_parent" className="image-item" />
            <img src='../../python_code/top5_facebook_by_parent.svg' alt="top_facebook_by_parent" className="image-item" />
            <img src='../../python_code/top5_instagram_by_parent.svg' alt="top_instagram_by_parent" className="image-item" />
            <img src='../../python_code/top5_tiktok_by_parent.svg' alt="top_tiktok_by_parent" className="image-item" />
            <img src='../../python_code/top5_youtube_by_parent.svg' alt="top_youtube_by_parent" className="image-item" />
        </div>
    );
};

export default PiePlot;
