const React = require('react');
const Layout = require('./Layout');

module.exports = function Post({ post }) {
  return (
    <article id={post.id} key={post.id}>
      <button data-id={post.id} type="submit" name="submit_param" value="submit_value" className="fa fa-sort-desc vote-button upvote-button" />
      <h2><a href={`/posts/${post.id}`}>{post.title}</a></h2>
      <p>
        <span className="points">{post.votes}</span>
        <span className="username">{post.username}</span>
        <span className="comment-count">{post.commentCount}</span>
        <a data-id={post.id} className="delete" href={`/posts/${post.id}`} />
      </p>
    </article>
  );
};
