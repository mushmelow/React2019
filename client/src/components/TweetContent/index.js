import React from 'react';

import { connect } from 'react-redux';

class TweetContent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
       hello
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {};
};


export default (connect(mapStateToProps)(TweetContent));
