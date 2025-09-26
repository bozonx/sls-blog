import { POSTS_DIR } from "vitepress-sls-blog-tmpl/constants.js";
import getAllPosts from "./getAllPosts.js";

export default {
  watch: [`./${POSTS_DIR}/*.md`],
  async load(watchedFiles) {
    return {
      posts: await getAllPosts(
        watchedFiles,
        process.env.NODE_ENV !== "production"
      ),
    };
  },
};
