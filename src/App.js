import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import VideoFetch from './components/test';
import Header from './components/header';
import Crew from './components/crew'

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<VideoFetch />} />
      <Route path="videofetch" element={<VideoFetch />} />
      <Route path="crew" element={<Crew />} />
    

    </Routes>

    </div>
    </Router>
  );
}

export default App;
