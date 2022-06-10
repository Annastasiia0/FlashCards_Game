const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

function Questions({ question }) {
  return (
    <div>
      <h1>Отвечай на вопрос</h1>

      <div className="tasks list-group">
          <Card question={question} />
      </div>

      {/* <script src="/script.js" /> */}
    </div>
  );
}

module.exports = Questions;
