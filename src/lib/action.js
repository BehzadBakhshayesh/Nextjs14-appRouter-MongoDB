"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

// export const sayHello = async () => {
//   "use server";
//   console.log("hello");
// };
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

export const handleGithubLogin = async () => {
  // "use server";
  await signIn("github");
};
export const handleLogOut = async () => {
  // "use server";
  await signOut();
};

export const register = async (formData) => {
  // "use server";
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return "passwords dose not match";
  }

  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
  } catch (error) {
    return { error: "somthing went wrong" };
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    return { error: "somthing went wrong" };
  }
};
