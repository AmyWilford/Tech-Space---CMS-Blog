const post_id = document.querySelector('input[name="post-id"]').value;

const newCommentHandler = async (event) => {
  event.preventDefault();
  const comment = document.querySelector("#comment-content").value.trim();
  if (comment) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ comment, post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
      console.log("comment posted");
    } else {
      alert("Failed to create comment");
    }
  }
};

// const editFormHandler = async (event) => {
//   event.preventDefault();

//   const post_title = document.querySelector('input[name="post-title"]').value;
//   const post_content = document.querySelector(
//     'textarea[name="post-content"]'
//   ).value;

//   const response = await fetch(`/api/post/${post_id}`, {
//     method: "PUT",
//     body: JSON.stringify({
//       post_title,
//       post_content,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   console.log(response);
//   if (response.ok) {
//     document.location.replace("/dashboard");
//   } else {
//     alert("Failed to update your post");
//   }
//   document.location.replace("/dashboard");
// };

const delButtonHandler = async (event) => {
  const response = await fetch(`/api/post/${post_id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .getElementById("new-comment-form")
  .addEventListener("submit", newCommentHandler);

document
  .getElementById("delete-button")
  .addEventListener("click", delButtonHandler);
