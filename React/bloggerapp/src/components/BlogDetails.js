import React from 'react';
import BlogItem from './BlogItem';

function BlogDetails(props) {
  return (
    <div>
      <h1>Blog Details</h1>
      {props.blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogDetails;
