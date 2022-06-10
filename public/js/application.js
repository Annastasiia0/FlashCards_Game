document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.theme-list').addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.classList.contains('theme')) {
      const themeID = event.target.dataset.id;
      console.log(themeID);
      const response = await fetch('/questions', {
        method: 'POST',
        body: JSON.stringify({
          themeID,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let questions = await response.text();
      questions = JSON.parse(questions);
      console.log(questions);
      const answer = await fetch('/questions/card', {
        method: 'POST',
        body: JSON.stringify({
          question: questions[0].question,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const html = await answer.text();
      console.log(html);
      document.querySelector('.container').innerHTML = html;
      console.log(document.querySelector('#answer-form'));
    }
  });
  // document.querySelector('#answer-form')
  //   .addEventListener('submit', async (event) => {
  //     event.preventDefault();
  //     console.log('submit');
  //   });
});


//   const response = await fetch('/vote', {
//     method: 'POST',
//     body: JSON.stringify({
//       postId,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const result = await response.text();
//   const { success, votes } = JSON.parse(result);
//   if (success) {
//     event.target.style.color = 'red';
//     event.target.parentElement.querySelector('.points').innerText = votes;
//   }
// }

// if (event.target.classList.contains('delete')) {
//   const postId = event.target.dataset.id;
//   const response = await fetch('/delete', {
//     method: 'POST',
//     body: JSON.stringify({
//       postId,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const result = await response.text();
//   const { success } = JSON.parse(result);
//   if (success) {
//     event.target.closest('article').remove();
//   }
// }
// });

//   document.querySelector('#posts').addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const response = await fetch('/posts', {
//       method: 'POST',
//       body: JSON.stringify({
//         title: form.title.value,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (!(response.status === 500)) {
//       const postHtml = await response.text();
//       document.querySelector('.post-container').insertAdjacentHTML('afterbegin', postHtml);
//       form.title.value = '';
//     } else {
//       form.insertAdjacentHTML('beforeend', '<p>Введите что-нибудь</p>');
//     }
//     // const { success } = JSON.parse(result);
//   });
// });
