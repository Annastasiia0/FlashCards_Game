document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.register').addEventListener('click', async (event) => {
    event.preventDefault();
    console.log('asdsd');
    // if (event.target.classList.contains('theme')) {
    //   const themeID = event.target.dataset.id;
    //   console.log(themeID);
    //   const response = await fetch('/questions', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       themeID,
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   let questions = await response.text();
    //   questions = JSON.parse(questions);
    //   console.log(questions);
    //   const answer = await fetch('/questions/card', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       question: questions[0].question,
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   const html = await answer.text();
    //   console.log(html);
    //   document.querySelector('.container').innerHTML = html;
    //   console.log(document.querySelector('#answer-form'));
    // }
  });
  // document.querySelector('#answer-form')
  //   .addEventListener('submit', async (event) => {
  //     event.preventDefault();
  //     console.log('submit');
  //   });
});