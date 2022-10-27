const post_id = document.querySelector('input[name="post-id"]').value;
console.log(post_id);

const newCommentHandler = async (event) => {
  event.preventDefault();
  const comment_content = document
    .querySelector("#comment-content")
    .value.trim();
  console.log(comment_content);
  if (comment_content) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ comment_content, post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("this is ok");

    if (response.ok) {
      console.log("this is ok");
      document.location.replace(`/post/${post_id}`);
    } else {
      alert("Failed to create comment");
    }
  }
};

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
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);

document
  .getElementById("delete-button")
  .addEventListener("click", delButtonHandler);
