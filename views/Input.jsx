const React = require('react');
// const Home = require('./Home');

module.exports = function Input() {
  return (

    <form className="userAdd" name="addUser" action="/login" method="POST">

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
        <input type="name" className="form-control" id="exampleInputUsername" />
        <div id="emailHelp" className="form-text">Put your username. Your username must not exceed 12 characters.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  );
};
