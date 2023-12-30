import React from "react";
import Masonry from "react-responsive-masonry";
import YouTube from "react-youtube";

const MasonryYouTubeGallery = () => {
  const youtubeVideoIds = [
    "XmD9WsFnyKo",
    "exSocjQl340",
    "Diniqdm3MkM",
    "qYPTShUCTDQ",
    "XwkejIQmeK0",
    "4ItQZak2XwQ",
    "Zo-Y3Ua2jeA",
    "Umfq9D3onyY",
  ];

  const getColumnsCount = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      return 1; // For smaller screens, show one video per row
    } else {
      return 2; // For larger screens, show two videos per row
    }
  };

  return (
    <Masonry columnsCount={getColumnsCount()} gutter="20px">
      {youtubeVideoIds.map((videoId, index) => (
        <div key={index} className="masonry__youtube">
          <YouTube
            videoId={videoId}
            opts={{
              width: "100%",
              height: "100%",
              borderRadius: "30px",
              playerVars: {
                modestbranding: 1,
                title: 0,
              },
            }}
          />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryYouTubeGallery;
