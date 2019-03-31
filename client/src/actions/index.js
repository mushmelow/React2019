import {GET_TWEETS_USER1, GET_TWEETS_USER2} from './types'

export const getTweetsUser1 = (value) => {
  return {
    type: GET_TWEETS_USER1,
    payload: value
  };
};

export const getTweetsUser2 = (value) => {
  return {
    type: GET_TWEETS_USER2,
    payload: value
  };
};
