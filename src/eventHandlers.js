import { findCategory, findList, findTopic } from './utils.js';
import { printList, printSidebar } from './DOM.js';
import { List, lists } from './list.js';
import { Topic, topics } from './topic.js';
import { Task, allTasks } from './task.js';

function handleListForm() {
  const showList = document.getElementById('showListDialog');
  const listDialog = document.getElementById('listDialog');
  const listForm = document.getElementById('listForm');
  const listCancel = document.getElementById('listCancelBtn')
  
  listCancel.addEventListener("click", () => listDialog.close());
  showList.addEventListener("click", () => listDialog.showModal());
  listForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const category = findCategory(document.querySelector('#listCategoryInput').value);
    const list = new List(
      document.querySelector('#listNameInput').value,
      document.querySelector('#listDescriptionInput').value);
    
    category.addList(list);
  
    printSidebar();
  
    listDialog.close();
  });
}

function handleTaskForm(){
  const showTask = document.getElementById('showTaskDialog');
  const taskDialog = document.getElementById('taskDialog');
  const taskForm = document.getElementById('taskForm');
  const taskCancel = document.getElementById('taskCancelBtn');

  taskCancel.addEventListener("click", () => taskDialog.close());
  showTask.addEventListener("click", () => taskDialog.showModal());
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const currentList = findList(document.getElementById('currentList').textContent);
    const topic = findTopic(currentList, document.querySelector('#taskTopicInput').value);
    const task = new Task(
      document.querySelector('#taskNameInput').value,
      document.querySelector('#taskDescriptionInput').value,
      document.querySelector('#taskDueInput').value,
      document.querySelector('#taskPriorityInput').value,
      topic,
    );
    
    topic.addTask(task);
    currentList.addTopic(topic);

    printList(currentList);

    taskDialog.close();
  });
}

export { handleListForm, handleTaskForm }