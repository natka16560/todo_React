import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Task }  from "../components/data";

//Определение интерфейса, который описывает свойства, передаваемые компоненту
interface MainPageProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

//Объявление функционального компонента, который принимает объект tasks (массив задач) и функцию setTasks (для обновления состояния задач)
const MainPage: React.FC<MainPageProps> = ({ tasks, setTasks }) => {
  
  //Сортировка по времени добавления
  const handleSortChange = (order: string) => {
    if (order === 'newest') {
      const sorted = [...tasks].sort((a, b) => b.id - a.id);
      setTasks(sorted);
    } else if (order === 'oldest') {
      const sorted = [...tasks].sort((a, b) => a.id - b.id);
      setTasks(sorted);
    }
  };

  //Сортировка по приоритету
  const [priorityFilter, setPriorityFilter] = useState<string[]>([]);
  const handlePriorityFilterChange = (priority: string) => {
    if (priorityFilter.includes(priority)) {
      setPriorityFilter(priorityFilter.filter(p => p !== priority));
    } else {
      setPriorityFilter([...priorityFilter, priority]);
    }
  };

  //Сортировка по меткам
  const [tagFilters, setTagFilters] = useState<string[]>([]);
  const handleTagFilterChange = (tag: string) => {
    if (tagFilters.includes(tag)) {
      setTagFilters(tagFilters.filter(t => t !== tag));
    } else {
      setTagFilters([...tagFilters, tag]);
    }
  };

  //Отображение отсортированных задач
  const tasksList = tasks.filter(task => {
    const priorityMatch = priorityFilter.length === 0 || priorityFilter.includes(task.priority);
    const tagMatch = tagFilters.length === 0 || tagFilters.every(tag => task.tags.includes(tag));
    
    return priorityMatch && tagMatch;
  });

  return (
    <div className="page mainPage">
      <div className='container mainContainer-filter'>
        <div className='box mainBox-filter'>
          <h2>Сортировка</h2>
          <label className="radio-box" htmlFor='newest'>
            <input type='radio' id='newest' name='sortOrder' value='newest' onChange={() => handleSortChange('newest')} />
            <span className="radio-checkmark"></span>
            Новые
          </label>
          <label className="radio-box" htmlFor='oldest'>
            <input type='radio' id='oldest' name='sortOrder' value='oldest' onChange={() => handleSortChange('oldest')} />
            <span className="radio-checkmark"></span>
            Старые
          </label>
        </div>

        {/* Фильтр по приоритету */}
        <div className='box mainBox-filter'>
          <h2>Приоритет</h2>
          <label className="checkbox-box">Low Priority
            <input type='checkbox' checked={priorityFilter.includes('low')} onChange={() => handlePriorityFilterChange('low')} />
            <span className="checkbox-checkmark"></span>
          </label>
          <label className="checkbox-box">Normal Priority
            <input type='checkbox' checked={priorityFilter.includes('normal')} onChange={() => handlePriorityFilterChange('normal')} />
            <span className="checkbox-checkmark"></span>
          </label>
          <label className="checkbox-box">High Priority
            <input type='checkbox' checked={priorityFilter.includes('high')} onChange={() => handlePriorityFilterChange('high')} />
            <span className="checkbox-checkmark"></span>
          </label>
        </div>

        {/* Фильтр по меткам */}
        <div className="box mainBox-filter">
          <h2>Отметка</h2>
          <label className="checkbox-box">Research
            <input type='checkbox' checked={tagFilters.includes('research')} onChange={() => handleTagFilterChange('research')} />
            <span className="checkbox-checkmark"></span>
          </label>
          <label className="checkbox-box">Design
            <input type='checkbox' checked={tagFilters.includes('design')} onChange={() => handleTagFilterChange('design')} />
            <span className="checkbox-checkmark"></span>
          </label>
          <label className="checkbox-box">Development
            <input type='checkbox' checked={tagFilters.includes('development')} onChange={() => handleTagFilterChange('development')} />
            <span className="checkbox-checkmark"></span>
          </label>
        </div>
      </div>
      
      <div className='container mainContainer-tasks'>
        <Link to={'/addtask'}><button className="button-link"><span>Добавить задачу</span></button></Link>

        {/* Отображение задач */}
        <div className='box'>
          <ul className='tasks-list'>
            {tasksList.length ? (
              tasksList.map(el => (
                <li key={el.id}>
                  <h2><Link to={`/viewtask/${el.id}`}>{el.title}</Link></h2>
                  <p>Создано: {el.createdAt}</p>
                  <p>Приоритет: {el.priority}</p>
                  <p>Метки: {el.tags.join(', ')}</p>
                </li>
              ))
            ) : (
              <p>Ещё нет задач</p>
            )}
          </ul>
        </div>
      </div>
    
    </div>
  );
};

export default MainPage;