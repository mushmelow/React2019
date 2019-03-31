import React from 'react';
import TweetNav from './TweetNav';
import TweetContent from './TweetContent';

class App extends React.Component{
  
  render(){
      return(
          <div >
            <TweetNav/>
            <TweetContent/>
          </div>
      )
  }
}
export default App