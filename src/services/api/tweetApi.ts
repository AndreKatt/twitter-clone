import axios from "axios";

import { Tweet, TweetsState } from "../../store/ducks/tweets/contracts/state";

export const TweetApi = {
  async fetchTweets(): Promise<TweetsState["items"] | undefined> {
    try {
      const { data } = await axios.get("/tweets");
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async fetchTweetData(id: string): Promise<Tweet[] | undefined> {
    try {
      const { data } = await axios.get("/tweets?_id=" + id);
      return data[0];
    } catch (e) {
      console.log(e);
    }
  },
};

/*
{
  type: 'tweet/FETCH_TWEET_DATA',
  payload: '63bc66c2047f941e5549436f'
} 
*/
