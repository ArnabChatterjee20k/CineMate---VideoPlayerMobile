import axios from "axios";
import env from "../../env";

class Youtube {
  static async fetchAllVideos() {
    const options = {
      method: "GET",
      url: env["all-vids-url"],
      headers: {
        "X-RapidAPI-Key": env["X-RapidAPI-Key"],
        "X-RapidAPI-Host": env["X-RapidAPI-Host"],
      },
    };

    try {
      const response = await axios.request(options);
      const content = response?.contents;
      const nextCursor = content?.cursorNext;

      return [content, nextCursor];
    } catch (error) {
      console.error(error);
    }
  }
}
