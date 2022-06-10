const React = require('react');
const Layout = require('./Layout');
const Input = require('./Input');

module.exports = function Home({ arrName }) {
  return (
    <Layout>
      <div className="container">
        <h1>Flashcards Game</h1>
        <p>Registration</p>
        {/* <ul>
          {arrName ? arrName.map((el) => <li>{el}</li>) : <li>sosi</li>}
        </ul> */}
      </div>

      <Input />

    </Layout>
  );
};
