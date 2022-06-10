const React = require('react');
const Layout = require('./Layout');
const Post = require('./Post');

module.exports = function Home({ posts }) {
  return (
    <Layout>
      <header>
        <h1>Hacker News</h1>
        <p>
          <a href="#posts">new</a>
          <a href="#">comments</a>
          <a href="#">popular</a>
          <a href="#">login</a>
        </p>
      </header>

      <div className="post-container">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <form id="posts" method="post" action="/posts">
        <input type="text" name="title" placeholder="title" />
        <input type="submit" value="submit new post" />
      </form>
    </Layout>
  );
};
