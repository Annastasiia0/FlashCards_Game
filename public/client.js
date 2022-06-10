// document
//   .addUser
//   .addEventListener('submit', async (event) => {
//     event.preventDefault();
//     console.log(123);
//     const {
//       name, password, action, method,
//     } = event.target;

//     const body = JSON.stringify({ name: name.value, password: password.value });

//     const response = await fetch(action, {
//       method,
//       body,
//       headers: { 'Content-Type': 'application/json' },
//     });

//     const html = await response.text();
//     document.querySelector('.userAdd').innerHTML = html;
//   });
