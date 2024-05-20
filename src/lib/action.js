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
export const addPosts = async (previousState, formData) => {
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
    revalidatePath("/admin");
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
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);

    revalidatePath("/blog");
    revalidatePath("/admin");
    revalidatePath("/serverActionTest");
  } catch (error) {
    return {
      error: "Something went Wrong",
    };
  }
};

export const addUser = async (previousState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({ username, email, password, img });
    await newUser.save();
    revalidatePath("/admin");
    revalidatePath("/serverActionTest");
  } catch (error) {
    return {
      error: "Something went Wrong",
    };
  }

  console.log({ title, desc, slug, userId });
};

export const deleteUser = async (formData) => {
  //   "use server";
  const { postId } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(postId);

    revalidatePath("/admin");
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

export const register = async (previousState, formData) => {
  // "use server";
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "passwords dose not match" };
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
    return { success: true };
  } catch (error) {
    return { error: "somthing went wrong" };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or Password" };
    }
    throw error;
  }
};
