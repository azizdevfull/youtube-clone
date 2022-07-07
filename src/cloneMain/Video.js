import React from 'react';
// import YouTube from "react-youtube";

const Video = ({ video: { id: {videoId}, snippet: { title, channelTitle, description, publishedAt } } }) => {
     

    
const videoSrc = `https://www.youtube.com/embed/${videoId}`;

     if (!videoId) 
     return <p className="noResult">
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/_nBlN9yp9R8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/kqn2EXTNYMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/4Dj61mWIjr0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/qL9RGcyG51o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/qP7kFDimygc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/iTtZRaL7ZZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/D3eU69V5Ebo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/eSjL2cmBTzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/GUnLxi7pXIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/8-C799i9j1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/sfc-2Yd-1Ho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/DbtTjrszwlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/zrY_cIaPXNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/jz2vOLniotM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/UAXaBhDMkgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/fpCRUE2vXNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </p>;
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/Z8ft8JRt0ZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    // https://youtu.be/_nBlN9yp9R8
    

     
     return (
          <>
               <div className="videoIframe">
                    <iframe 
                         frameBorder="0"
                         allowFullScreen
                         title="Video player"
                         src={videoSrc}
                    />
               </div>
               <div className="videoInfo">
                    <p className="descriptionVideo">{publishedAt}</p>
                    <h1 className="titleVideo">{title}</h1>
                    <h3 className="channelTitle">{channelTitle}</h3>
                    <p className="descriptionVideo">{description}</p>
                    
               </div>
          </>
     );
};

export default Video;