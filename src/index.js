import './styles.css';
import { Category, categories } from './category.js';
import { List, lists } from './list.js';
import { Topic, topics } from './topic.js';
import { Task, allTasks } from './task.js';
import { findCategory, findList, findTopic } from './utils.js';
import { handleListForm, handleTaskForm } from './eventHandlers.js'

handleListForm();
handleTaskForm();



window.Category = Category;
window.List = List;
window.Topic = Topic;
window.Task = Task;
window.categories = categories;
window.allTasks = allTasks;