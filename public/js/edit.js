const editFormHandler = async (event) => {
  event.preventDefault();
  const post_id = document.querySelector('input[name="post-id"]').value;
  const post_title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector(
    'input[name="post-content"]'
  ).value;

  console.log(post_title);
  console.log(post_content);

  const response = await fetch(`/api/post/${post_id}`, {
    method: "PUT",
    body: JSON.stringify({
      post_title,
      post_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update your post");
  }
  document.location.replace("/dashboard");
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
