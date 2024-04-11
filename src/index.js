import './styles.css';
import { Category, categories } from './category.js';
import { List } from './list.js';
import { Topic } from './topic.js';
import { Task, allTasks } from './task.js';

function createSampleStructure(catName, listName, topName, taskName){
  const category = new Category(catName);
  const list = new List(listName);
  const topic = new Topic(topName);
  const task = new Task(taskName);

  category.addList(list);
  list.addTopic(topic);
  topic.addTask(task);

  return [category, list, topic, task];
}

window.Category = Category;
window.List = List;
window.Topic = Topic;
window.Task = Task;
window.categories = categories;
window.allTasks = allTasks;
window.createSampleStructure = createSampleStructure;