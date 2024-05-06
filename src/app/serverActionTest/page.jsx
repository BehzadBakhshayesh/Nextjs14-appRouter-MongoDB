import {
  addPosts,
  deletePosts,
  // , sayHello
} from "@/lib/action";
import React from "react";

const serverActionTest = () => {
  //   const actionInComponent = async () => {
  //     "use server";
  //     console.log("it works");
  //   };

  return (
    <div>
      <form action={addPosts}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create</button>
      </form>
      <hr />
      <form action={deletePosts}>
        <input type="text" placeholder="postId" name="postId" />
        <button>Delete</button>
      </form>
      {/* <form action={sayHello}>
        <button>test me1</button>
      </form>
      <form action={actionInComponent}>
        <button>test me2</button>
      </form> */}
    </div>
  );
};

export default serverActionTest;
