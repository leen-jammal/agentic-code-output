let todos = [
  { id: 1, text: 'Learn React' },
  { id: 2, text: 'Build a project' },
  { id: 3, text: 'Deploy the app' }
];

const getAllTodos = (req, res) => {
  res.json(todos);
};

module.exports = {
  getAllTodos
};