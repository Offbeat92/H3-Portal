import React, { Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import './test.css';
import Footer from './footer';

export class VideoFetch extends Component {
    state = {
        isLoading: true,
        users: [],
        videos: [],
        error: null
    }
    
    fetchUsers() {
      
      //Här hämtar vi informationen från Googles Youtube-api
        const key = "AIzaSyCzOaXaAEipDFtW-N9_wOYhfo3EQOp3xRU";
        fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLtREJY21xRfCuEKvdki1Kw&maxResults=10&order=date&key=AIzaSyCzOaXaAEipDFtW-N9_wOYhfo3EQOp3xRU')
          //Översätter svaret till json...
           .then(response => response.json())
          // Uppdaterar vår tidigare skapade state med den nya informationen
          .then(data =>
            this.setState({
              users: data.items,
              videos: data.items,
              isLoading: false,
            })
          )
          // Allmänn catch för fel
          .catch(error => this.setState({ error, isLoading: false }));
      }

      // Vi sätter igång funktionen när sidan laddas.
      componentDidMount() {
        this.fetchUsers();
      }


    render() {
        const { isLoading, users, error, videos } = this.state;
        return (
            <React.Fragment>
              {error ? <p>{error.message}</p> : null}
              {!isLoading ? (
              videos.map(video => {
              const { etag, id, snippet } = video;
          return (
          //Hur informationen kommer visas i appen.
          //Varje video kommer visas som ett eget objekt, och redan i fetchen speciferar jag att jag vill ha högst 10 videos.
          //Jag skapar en länk till varje video, visar titel, uppladdningsdatum och videons thumbnail.
            <div class='video' key={id.videoId}>
              <a target="_blank" rel="noopener noreferrer" href={`https://www.youtube.com/watch?v=${id.videoId}` } ><h2>{snippet.title}</h2></a>
              <p>Uploaded: {snippet.publishedAt}</p>
              <img src = {snippet.thumbnails.high.url} />
              <hr />
            </div>
            
  
          );
          
        })

      ) : (
        // Laddningsmeddelandet ifall vi väntar på svar...
        <h3>Loading...</h3>
        //Sedan länkar jag in Twitter-feeden, tack vare en installation jag gjort tack vare NPM.
      )}
       
      <div class='twitter'>
      <TwitterTimelineEmbed
      sourceType="profile"
      screenName="h3h3productions"
      options={{height: 600}}
      theme="dark"
    />
      </div>
      <Footer />
    </React.Fragment>
  );

    }

}

export default VideoFetch;