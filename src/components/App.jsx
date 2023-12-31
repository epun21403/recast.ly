import exampleVideoData from '/src/data/exampleVideoData.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';



var App = () => {

  const [videos, setVideos] = React.useState(exampleVideoData);
  const [selectedVideo, setselectedVideo] = React.useState(exampleVideoData[0]);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={selectedVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList setselectedVideo={(v) => setselectedVideo(v)} videos={videos} />
        </div>
      </div>
    </div>);
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
