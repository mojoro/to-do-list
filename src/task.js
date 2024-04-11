const allTasks = [];

class Task {
  constructor(title = 'title', desc = 'description', dueDate = '11/04/2024', priority = 'high', notes = '', subTasks = []) {
    this.title = title;
    this.desc = desc;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.notes = notes;
    this.subTasks = subTasks;
    this.completed = false;
    allTasks.push(this);
  }

  toggleComplete() {
    this.completed = this.completed ? false : true;
  }
}

export { Task, allTasks };