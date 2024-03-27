import { useParams, Link } from 'react-router-dom';
import { Task } from '../components/data';
import '../styles/styles.css';

//Определение интерфейса, который описывает свойства, передаваемые компоненту
interface ViewTaskPageProps {
  tasks: Task[];
  taskId: string;
}

//Объявление функционального компонента, который принимает объект tasks (массив задач) в качестве свойства
const ViewTaskPage: React.FC<ViewTaskPageProps> = ({ tasks }) => {
  //Использование хука useParams для извлечения параметра taskId
  const { taskId } = useParams<{ taskId: string }>();
  //Поиск выбранной задачи из массива tasks на основе полученного taskId
  const selectedTask = tasks.find(task => task.id === Number(taskId));

  //Проверка наличия выбранной задачи
  if (!selectedTask) {
    return <div>Задача не найдена!</div>;
  }

  return (
    <div className='page minorPage'>
      <div className='container'>
        <Link to={'/addtask'}><button className="button-link-prev"><span>Назад</span></button></Link> 
        
        <div className='box'>
          <div className='elem'>
            <h2>Название задачи</h2>
            <p>{selectedTask.title}</p>
          </div>
          
          <div className='elem'>
            <h2>Дата создания</h2>
            <p>{selectedTask.createdAt}</p>
          </div>
          
          <div className='elem'>
            <h2>Приоритет</h2>
            <p>{selectedTask.priority}</p>
          </div>
          
          <div className='elem'>
            <h2>Отметки</h2>
            <p>{selectedTask.tags.join(', ')}</p>
          </div>
          
          <div className='elem'>
            <h2>Описание</h2>
            <p>{selectedTask.description}</p>
          </div>
          
          <Link to={`/viewtask/edit/${selectedTask.id}`}><button className="button-link"><span>Редактировать</span></button></Link>
        </div>
        
      </div>
    </div>
  );
};

export default ViewTaskPage;