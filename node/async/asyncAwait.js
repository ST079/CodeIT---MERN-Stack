import fs from "fs/promises";

const read = async () => {
  try {
    const users = await fs.readFile("data/useers.json", "utf-8");
    const posts = await fs.readFile("data/posts.json", "utf-8");
    const userData = JSON.parse(users);
    const postData = JSON.parse(posts);

    const result = userData.map((user) => {
      return {
        ...user,
        posts: postData
          .map((post) => {
            return post.userId === user.id ? post : null;
          })
          .filter(Boolean),
      };
    });
    console.log(result);
  } catch (err) {
    // console.log(err);
    console.error("Error reading files:", err);
  }
};

read();
