import axios from "axios";
import { TweetsState } from "../../store/ducks/tweets/contracts/state";

export const TweetsApi = {
  async fetchTweets(): Promise<TweetsState["items"] | undefined> {
    try {
      const { data } = await axios.get("https://trycode.pw/c/BUH35.json");
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};
