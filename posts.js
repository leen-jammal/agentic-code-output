let posts = [
  { id: 1, title: 'First Post', content: 'This is the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the second post.' }
];

// Function to get all posts (for testing and context)
const getPosts = () => {
  return posts;
};

// Function to delete a post by ID
const deletePost = (id) => {
  const postId = parseInt(id, 10); // Ensure ID is an integer
  const initialLength = posts.length;
  posts = posts.filter(post => post.id !== postId);

  // Check if a post was actually deleted
  if (posts.length < initialLength) {
    return true; // Indicate successful deletion
  } else {
    return false; // Indicate post not found
  }
};

module.exports = {
  getPosts,
  deletePost
};