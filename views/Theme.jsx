const React = require('react');
const Layout = require('./Layout');

module.exports = function Themes({ arrTitle }) {
  return (
    <Layout>
      <div className="container">
        <h1>Choose a topic</h1>
        <ul>
          {arrTitle ? arrTitle.map((el) => <li>{el}</li>) : <li>Pusto</li>}
        </ul>
      </div>

    </Layout>
  );
};
