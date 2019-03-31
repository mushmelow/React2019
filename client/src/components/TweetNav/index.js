import React from 'react';
import { connect } from 'react-redux';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyD7JwnSLx2pQ-AozrQR57QlQIOUiuFim1M",
  authDomain:"fir-auth-b7033.firebaseapp.com"
})

class TweetNav extends React.Component{
  
  state= {
    isSignedIn: false
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div>
        {this.state.isSignedIn?(
          <div> Sign In!</div>
          ) : (
          <StyledFirebaseAuth>
            uiConfig= {this.uiConfig}
            firebaseAuth= {firebase.auth()}
          </StyledFirebaseAuth>
        )}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {};
};

export default (connect(mapStateToProps)(TweetNav));
