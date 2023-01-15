import axios from "axios";
import { TopicsState } from "../../store/ducks/topics/contracts/state";

export const TopicsApi = {
  async fetchTopics(): Promise<TopicsState["items"] | undefined> {
    try {
      const { data } = await axios.get("/themes");
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};
