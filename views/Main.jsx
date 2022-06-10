const React = require('react');
const Layout = require('./Layout');

function Main({ themes }) {
  return (
    <Layout>
      <h1 className="mb-1">Список тем</h1>
      {/* {themes} */}
      <ul className="theme-list">
        {themes.map((theme) => (
          <li key={theme.id}>
            <a className="theme" href={`/questions/?id=${theme.id}`} data-id={theme.id}>{ theme.title }</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

module.exports = Main;
