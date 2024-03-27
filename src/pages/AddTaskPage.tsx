import { useState } from 'react';
import { Link } from "react-router-dom";
import { Task } from '../components/data';

//Определение интерфейса, который описывает свойства, передаваемые компоненту AddTaskPage
interface AddTaskPageProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

//Объявление функционального компонента, который принимает объект tasks (массив задач) и функцию setTasks (для обновления состояния задач)
const AddTaskPage: React.FC<AddTaskPageProps> = ({ tasks, setTasks }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState('low');
  const [newTags, setNewTags] = useState<string[]>([]);
  const [newDescription, setNewDescription] = useState('');

  //Функции, которые обновляют состояние new... при изменении значения в соответствующем input
  const enterNewTitle= (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value);
  const enterNewPriority = (e: React.ChangeEvent<HTMLSelectElement>) => setNewPriority(e.target.value);
  const enterNewTags = (tag: string) => {
    if (newTags.includes(tag)) {
      setNewTags(newTags.filter((t) => t !== tag));
    } else {
      setNewTags([...newTags, tag]);
    }
  };
  const enterNewDescription = (e: React.ChangeEvent<HTMLInputElement>) => setNewDescription(e.target.value);

  //Функция, которая создает новую задачу на основе введенных данных и обновляет список задач
  const addNewTask = () => {
    const currentDate = new Date().toLocaleDateString('en-GB');
    const newTaskItem: Task = {
      id: tasks.length + 1,
      title: newTitle,
      description: newDescription,
      createdAt: currentDate,
      priority: newPriority,
      tags: newTags,
    };

    setTasks([...tasks, newTaskItem]);
    setNewTitle('');
    setNewPriority('');
    setNewTags([]);
    setNewDescription('');
  };

  return (
    <div className='page minorPage'>
      <h1>Добавить задачу</h1>
      
      <div className='container'>
        <Link to={'/'}><button className="button-link-prev"><span>Назад</span></button></Link> 
        
        <div className='box'>
          <div className='elem'>
            <h2>Название задачи</h2>
            <input type='text' placeholder='Название' value={newTitle} onChange={enterNewTitle} />
          </div>
          
          <div className='elem'>
            <h2>Приоритет</h2>
            <select value={newPriority} onChange={enterNewPriority}>
              <option value='high'>Высокий приоритет</option>
              <option value='normal'>Обычный приоритет</option>
              <option value='low'>Низкий приоритет</option>
            </select>
          </div>

          <div className="elem">
            <h2>Отметки</h2>
            <label className="checkbox-box">Research
              <input type='checkbox' checked={newTags.includes('research')} onChange={() => enterNewTags('research')} />
              <span className="checkbox-checkmark"></span>
            </label>
            <label className="checkbox-box">Design
              <input type='checkbox' checked={newTags.includes('design')} onChange={() => enterNewTags('design')} />
              <span className="checkbox-checkmark"></span>
            </label>
            <label className="checkbox-box">Development
              <input type='checkbox' checked={newTags.includes('development')} onChange={() => enterNewTags('development')} />
              <span className="checkbox-checkmark"></span>
            </label>
          </div>

          <div className='elem'>
            <h2>Описание</h2>
            <input type='text' placeholder='Описание' value={newDescription} onChange={enterNewDescription} />
          </div>

          <button onClick={addNewTask}>Добавить</button>
        </div>

      </div>
    </div>
  );
};

export default AddTaskPage;