const React = require('react');
const Layout = require('./Layout');

module.exports = function ThemeOne({ arrQuestion }) {
  return (
    <Layout>
      <div className="container">
        <h1>Question 1</h1>
        <ul>
          {arrQuestion ? arrQuestion.map((el) => <li>{el}</li>) : <li>Pusto</li>}
        </ul>
      </div>

    </Layout>
  );
};
 