import React from 'react';
import './SinglePost.css';

function SinglePost() {
  return (
    <div className="single-post">
      <h2>Post Title</h2>
      <p className="post-content">
        This is the content of the blog post.  It can be as long as needed to convey the information. Add styling to SinglePost.
      </p>
      <p className="post-author">By Author Name</p>
    </div>
  );
}

export default SinglePost;