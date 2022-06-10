const React = require('react');

function Card({ question }) {
  return (
    <label className="list-group-item d-flex justify-content-between align-items-center task">
      {/* Форма для редактирования задачи (выполнено, не выполнено) */}

      <p>{question}</p>
      <form method="POST" action="/answer" id="answer-form">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Ответ..." aria-label="Добавьте задачу..." name="answer" />
          <button type="submit" className="btn btn-primary">Ответить</button>
        </div>
      </form>

      {/* <span className="badge bg-danger rounded-pill remove-task" data-id={task.id}>x</span> */}
    </label>
  );
}

module.exports = Card;
