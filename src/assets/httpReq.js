export async function getPosts1() {
  const res = await fetch("https://blogspostbackend.onrender.com/posts1");
  const resData = await res.json();
  if (!res.ok) throw new Error("Failed to fetch Posts");
  return resData;
}

export async function getPost(id) {
  const res = await fetch(`https://blogspostbackend.onrender.com/posts/id/${id}`);
  const resData = await res.json();
  if (!res.ok) throw new Error("Failed to fetch Post");
  return resData;
}

export async function getPosts(page) {
  const res = await fetch(`https://blogspostbackend.onrender.com/posts/page/${page-1}`);
  const resData = await res.json();
  if (!res.ok) throw new Error("Failed to fetch Posts");
  return resData;
}

export async function postUserInfo(credential) {
    
  const res = await fetch("https://blogspostbackend.onrender.com/loginUser", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({ credential: credential }),
  });
  const resUserData = await res.json();
  if (!res.ok) throw new Error("Failed to post post");
  return resUserData;
}

export async function createNewPost(email,title,content,author) {
  const res = await fetch("https://blogspostbackend.onrender.com/newPost", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({ email : email, title: title, content: content, author: author}),
  });
  const resUserData = await res.json();
  if (!res.ok) throw new Error("Failed to post post");
  return resUserData;
}

export async function getUserPosts(email) {
  const res = await fetch(`https://blogspostbackend.onrender.com/userPosts/${email}`);
  const resData = await res.json();
  if (!res.ok) throw new Error("Failed to fetch Posts");
  return resData;
}


export async function deletePost(postId,email,uid) {
  const res = await fetch(`https://blogspostbackend.onrender.com/deletePost?postId=${postId}&email=${email}&uid=${uid}`, {
      method: "DELETE",
  });
  const resData = await res.json();
  if (!res.ok) throw new Error("Failed to delete post");
  return resData;
}
// export async function postLeaderboard(name, time) {

//   const res = await fetch("https://blogspostbackend.onrender.com", {
//       method: "POST",
//       headers: {
//       "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ "name":name , "time":time }),
//   });
//   const resData = await res.json();
//   if (!res.ok) throw new Error("Failed to post post");
//   return resData.msg;
// }