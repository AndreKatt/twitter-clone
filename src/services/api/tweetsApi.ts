import axios from "axios";
import { Tweet, TweetsState } from "../../store/ducks/tweets/contracts/state";

export const TweetsApi = {
  async fetchTweets(): Promise<TweetsState["items"] | undefined> {
    try {
      const { data } = await axios.get("/tweets?_sort=id&_order=desc");
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

  async addTweet(payload: Tweet): Promise<Tweet | undefined> {
    try {
      const { data } = await axios.post("/tweets", payload);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};
