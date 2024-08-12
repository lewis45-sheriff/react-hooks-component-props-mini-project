import React from "react";
import Article from "./Article";


function ArticleList({ posts }) {
  if (!Array.isArray(posts) || posts.length === 0) {
    return <main><p>No articles available.</p></main>;
  }

  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutesToRead={post.minutesToRead}
        />
      ))}
    </main>
  );
}

export default ArticleList;