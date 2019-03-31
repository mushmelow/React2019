import { GET_TWEETS_USER1, GET_TWEETS_USER2} from '../actions/types'

const INITIAL_STATE={
  user1: null,
  user2: null
}
export default(state= INITIAL_STATE, action)=>{
  switch (action.type){
    case GET_TWEETS_USER1:
      return {...state, user1:action.payload};
    case GET_TWEETS_USER2:
      return {...state, user2:action.payload};
    default:
      return state;
  }
};


