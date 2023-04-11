import exampleVideoData from '/src/data/exampleVideoData.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';



var App = () => {

  const [video, setVideo] = React.useState(exampleVideoData[0]);

  var videoClick = function() {
    console.log('value', e.target);
    // console.log('videoID', videoID);
    // var targetVideo = e.target;
    // exampleVideoData.forEach(function(video) {
    //   if (video.snippet.title === targetVideo) {

    //   }
    // });
    // setVideo();

  };



  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} videoClick={videoClick}/>
        </div>
      </div>
    </div>);
};
// videoID={videoID}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
