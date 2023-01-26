import { axios } from "../../core/axios";
import {
  SendTweet,
  Tweet,
  TweetsState,
} from "../../store/ducks/tweets/contracts/state";

export const TweetsApi = {
  async fetchTweets(): Promise<TweetsState["items"] | undefined> {
    try {
      const { data } = await axios.get(
        "/api/tweets/index?_sort=id&_order=desc"
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  },

  async fetchTweetData(id: string): Promise<Tweet[] | undefined> {
    try {
      const { data } = await axios.get("/api/tweets/byTweet/" + id);
      return data;
    } catch (e) {
      console.log(e);
    }
  },

  async addTweet(payload: SendTweet): Promise<Tweet | undefined> {
    try {
      const { data } = await axios.post<Tweet>("api/tweets/addTweet", payload);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};
