// Event handler to delte a post on a button click
const delButtonHandler = async (event) => {
  const post_id = document.querySelector('input[name="post-id"]').value;
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
  .getElementById("delete-button")
  .addEventListener("click", delButtonHandler);
