async function newFormHandler(event) {
  event.preventDefault();

  const post_title = document.getElementById("post-title").value;
  const post_content = document.getElementById("post-content").value;

  if (post_title && post_content) {
    const response = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({
        post_title,
        post_content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("your post is posted");
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .getElementById("new-post-form")
  .addEventListener("submit", newFormHandler);
