import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <aside>
        <About />
      </aside>
      <main>
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}

export default App;
