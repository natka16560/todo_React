import { Dispatch, SetStateAction, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { Task } from '../components/data';
import '../styles/styles.css';

//Определение интерфейса, который описывает свойства, передаваемые компоненту
interface EditTaskPageProps {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  taskId: string;
};

//Объявление функционального компонента, который принимает объект tasks (массив задач) и функцию setTasks (для обновления состояния задач)
const EditTaskPage: React.FC<EditTaskPageProps> = ({ tasks, setTasks }) => {
  //Использование хука useParams для извлечения параметра taskId
  const { taskId } = useParams<{ taskId: string }>();
  //Поиск выбранной задачи из массива tasks на основе полученного taskId
  const taskToEdit = tasks.find(task => task.id === Number(taskId));

  const [editedTitle, setEditedTitle] = useState(taskToEdit?.title || '');
  const [editedPriority, setEditedPriority] = useState(taskToEdit?.priority || 'low');
  const [editedTags, setEditedTags] = useState<string[]>(taskToEdit?.tags || []);
  const [editedDescription, setEditedDescription] = useState(taskToEdit?.description || '');

  //Функции, которые обновляют состояние edited... при изменении значения в соответствующем input
  const enterEditedTitle = (e: React.ChangeEvent<HTMLInputElement>) => setEditedTitle(e.target.value);
  const enterEditedPriority = (e: React.ChangeEvent<HTMLSelectElement>) => setEditedPriority(e.target.value);
  const enterEditedTags = (tag: string) => {
    if (editedTags.includes(tag)) {
      setEditedTags(editedTags.filter((t) => t !== tag));
    } else {
      setEditedTags([...editedTags, tag]);
    }
  };
  const enterEditedDescription = (e: React.ChangeEvent<HTMLInputElement>) => setEditedDescription(e.target.value);

  //Функция сохранение отредактированной задачи
  const saveEditedTask = () => {
    const updatedTasks = tasks.map(task =>
      task.id === Number(taskId)
        ? {
            ...task,
            title: editedTitle,
            priority: editedPriority,
            tags: editedTags,
            description: editedDescription,
          }
        : task
    );
    
    setTasks(updatedTasks);
  };

  //Функция удаления задачи
  const deleteTask = () => {
    const filteredTasks = tasks.filter(task => task.id !== Number(taskId));
    setTasks(filteredTasks);
  };

  return (
    <div className='page minorPage'>
      <h1>Редактировать задачу</h1>
      <div className='container'>
        <Link to={'/'}><button className="button-link-prev"><span>Главная</span></button></Link> 

        <div className='box'>
          <div className='elem'>
            <h2>Название задачи</h2>
            <input type='text' placeholder='Название' value={editedTitle} onChange={enterEditedTitle} />
          </div>

          <div className='elem'>
            <h2>Приоритет</h2>
            <select value={editedPriority} onChange={enterEditedPriority}>
              <option value='normal'>Обычный приоритет</option>
              <option value='high'>Высокий приоритет</option>
              <option value='low'>Низкий приоритет</option>
            </select>
          </div>
          
          <div className="elem">
            <h2>Отметки</h2>
            <label className="checkbox-box">Research
              <input type='checkbox' checked={editedTags.includes('research')} onChange={() => enterEditedTags('research')} />
              <span className="checkbox-checkmark"></span>
            </label>
            <label className="checkbox-box">Design
              <input type='checkbox' checked={editedTags.includes('design')} onChange={() => enterEditedTags('design')} />
              <span className="checkbox-checkmark"></span>
            </label>
            <label className="checkbox-box">Development
              <input type='checkbox' checked={editedTags.includes('development')} onChange={() => enterEditedTags('development')} />
              <span className="checkbox-checkmark"></span>
            </label>
          </div>

          <div className='elem'>
            <h2>Описание</h2>
            <input type='text' placeholder='Описание' value={editedDescription} onChange={enterEditedDescription} />
          </div>
          <div className='btnArea'>
            <button onClick={saveEditedTask}>Сохранить</button>
            <button className='button-deleted' onClick={deleteTask}>Удалить</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditTaskPage;