"use server";

// export const sayHello = async () => {
//   "use server";
//   console.log("hello");
// };

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPosts = async (formData) => {
  //   "use server";
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");
  //   const userId = formData.get("userId");

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/serverActionTest");
  } catch (error) {
    return {
      error: "Something went Wrong",
    };
  }

  console.log({ title, desc, slug, userId });
};

export const deletePosts = async (formData) => {
  //   "use server";
  const { postId } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(postId);

    revalidatePath("/blog");
    revalidatePath("/serverActionTest");
  } catch (error) {
    return {
      error: "Something went Wrong",
    };
  }
};
