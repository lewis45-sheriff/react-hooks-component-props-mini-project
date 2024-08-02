import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div>
    <Header/>
    <About/>
    <ArticleList/>

    </div>
  );
}

export default App;
