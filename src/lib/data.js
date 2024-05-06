import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];
// const posts = [
//   { id: 1, title: "post1", body: "body1", userId: 1 },
//   { id: 2, title: "post2", body: "body2", userId: 1 },
//   { id: 3, title: "post3", body: "body3", userId: 2 },
//   { id: 4, title: "post4", body: "body4", userId: 2 },
// ];

// export const getPosts = async () => {
//   return posts;
// };
// export const getPost = async (id) => {
//   return posts.find((post) => post.id === parseInt(id));
// };
// export const getUser = async (id) => {
//   return users.find((user) => user.id === parseInt(id));
// };

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch posts!");
  }
};
export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch post!");
  }
};
export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch user!");
  }
};

export const getUsers = async (id) => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch users!");
  }
};
