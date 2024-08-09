import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div>
      <Header />
      <About />
      <ArticleList posts={blogData} />
    </div>
  );
}

export default App;