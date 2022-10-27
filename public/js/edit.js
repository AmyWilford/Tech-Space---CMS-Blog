const post_id = document.querySelector('input[name="post-id"]').value;
console.log(post_id);

const editFormHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector('input[name="post-title"]').value;
  const postContent = document.querySelector('textarea[name="post-body"]').value;

  console.log(postTitle);
  console.log(postContent);

  const response = await fetch(`/api/post/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      post_title,
      post_content,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log(response);
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to update your post');
  }
  document.location.replace('/dashboard');
};

// WHY ONE BUTTON IS SUBMIT AND THE OTHER IS CLICK?
document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);