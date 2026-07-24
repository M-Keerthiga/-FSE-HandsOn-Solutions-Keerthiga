import React from 'react';

function BlogItem({ blog }) {
  return (
    <div>
      <h3>{blog.title}</h3>
      <h4>{blog.author}</h4>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogItem;
