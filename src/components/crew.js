import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './crew.css';
import Footer from './footer';

export class Crew extends Component {
    
  //I constructorn lägger jag en handleClick, för att kunna skapa funktionen som
  //senare hämtar id:t användaren klickar på för att visa rätt sökning i api:et.
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(event) {
        const crewid = event.target.id;
        console.log("handleclick" + crewid)
        this.fetchCrewVideos(crewid);
      }

      state = {
        isLoading: true,
        users: [],
        videos: [],
        error: null
    }

        //Här använder jag samma typ av kod som i test.js för att visa de videosarna som inkluderas i id:t.
      fetchCrewVideos(crewid) {
        console.log("fetchCrew" + crewid);
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${crewid}&maxResults=10&order=date&key=AIzaSyCzOaXaAEipDFtW-N9_wOYhfo3EQOp3xRU`)
          .then(response => response.json())
          .then(data =>
            this.setState({
              users: data.items,
              videos: data.items,
              isLoading: false,
            })
          )
        
          .catch(error => this.setState({ error, isLoading: false }));
      }

      render() {
        const { isLoading, users, error, videos } = this.state;
        return (
            <React.Fragment>
              <h3>In development, only AB and Zach available at this time.</h3>
                {error ? <p>{error.message}</p> : null}
                {!isLoading ? (
                videos.map(video => {
                const { etag, id, snippet } = video;
          return (
          
            <div class='video' key={id.videoId}>
              <a target="_blank" rel="noopener noreferrer" href={`https://www.youtube.com/watch?v=${id.videoId}` } ><h2>{snippet.title}</h2></a>
              <p>Uploaded: {snippet.publishedAt}</p>
              <img src = {snippet.thumbnails.high.url} />
              <hr />
            </div>
            

  
          );
        })
      
      ) : (
        <h3>In progress</h3>
      )}

<div class='crew-members'>
    <div id='member' key='1'>
        <img src='https://m.media-amazon.com/images/M/MV5BMGEwMTIwODEtMGQwNy00MjA0LWIxZDQtZDNmZjQ3NThhYzUyXkEyXkFqcGdeQXVyMTMwNjc5NzAw._V1_UY1200_CR752,0,630,1200_AL_.jpg' ></img>
        <br />
        <button id='UCXZX9_3OUKCklwFAOEmVgkw' onClick={this.handleClick}>AB</button>
    </div>
    <div id='member' key='2'>
      <img src='https://h3out.com/wp-content/uploads/2020/05/236e061b42fe2c1119ad0b37f2a46664-1024x576.jpg' ></img>
      <br />
      <button id='UCX7Xlek_lEqAcuNOcarDlEw' onClick={this.handleClick}>Zach</button>
      </div>
      <div id='member'>
        <img src='https://i.redd.it/9mkf4slfrrx61.jpg' ></img>
        <br />
        <button>Dan</button>
      </div>
      <div id='member'>
        <img src='https://starboard-media.s3.amazonaws.com/thumbnails/61208e375ff206001d5d692b-thumbnail.jpg' ></img>
        <br />
        <button>Ian</button>
      </div>
      <div id='member'>
        <img src='https://preview.redd.it/yv4tghzeyyj71.jpg?auto=webp&s=d438ef10dd0465b22d668338d90d708b2472754d' ></img>
        <br />
        <button>Olivia</button>
      </div>
      <div id='member'>
        <img src='https://preview.redd.it/jdh539bfko171.png?width=348&format=png&auto=webp&s=8faaa26de49d6d597a7669c6fa3408543b7b2066' ></img>
        <br />
        <button>Love</button>
      </div>
      </div>    
                
                
<Footer />
            
            
            
            
</React.Fragment>
  );

    }

}

export default Crew;