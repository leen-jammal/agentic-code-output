import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function PostList() {
  const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
    { id: 3, title: 'Third Post' },
  ];

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Post({ match }) {
  return (
    <div>
      <h2>Post {match.params.id}</h2>
      <p>Details for post {match.params.id}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/posts/:id">
            <Post match />
          </Route>
          <Route path="/posts">
            <PostList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;