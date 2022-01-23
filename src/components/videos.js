import React, {useEffect, useState} from 'react'

const Videos = () => {

 // const [videos, getVideos ] = useState('');


    const fetchVideos = async () => {
    const res = await fetch('')
    const data = await res.json();
    const arrData  = data.items;
    
    //const data = await res.json()
    //console.log(data);
    console.log(arrData)
    }
  fetchVideos();

  return (
    <div>
      <p>Hello.</p>
    </div>
  )


}


export default Videos;



// state = {
//   isLoading: true,
//   movie: [],
//   error: null
// };

// async componentDidMount() {
// this.getMovies();
// }

// getMovies() {
//   fetch('http://localhost:3000/movies')
//   .then(response => response.json() )
//   .then(data =>{
//       this.setState({
//           movie: data,
//           isLoading: false
//       })
//       console.log(data);
//   })

// .catch(error => this.setState({error, isLoading: false }));
// }


/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function Videos() {
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyCzOaXaAEipDFtW-N9_wOYhfo3EQOp3xRU&part=snippet,contentDetails,statistics,status")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
           fuck you
          </ul>
        );
      }
    }
  }
};

  export default Videos;
 */