import { Routes, Route, useParams } from 'react-router-dom';
import { useTaskEffects } from '../data';
import MainPage from "../../pages/MainPage";
import AddTaskPage from "../../pages/AddTaskPage";
import ViewTaskPage from "../../pages/ViewTaskPage";
import EditTaskPage from "../../pages/EditTaskPage";

function App() {
  const { tasks, setTasks } = useTaskEffects([]);
  //Использование хука useParams для извлечения параметра taskId
  const { taskId } = useParams<{ taskId: string }>();
  //Переменная formattedTaskId в значение taskId, если оно существует, в противном случае значение по умолчанию как пустая строка
  const formattedTaskId = taskId || '';

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage tasks={tasks} setTasks={setTasks} />} />
        <Route path="/addtask" element={<AddTaskPage tasks={tasks} setTasks={setTasks} />} />
        <Route path="/viewtask/:taskId" element={<ViewTaskPage tasks={tasks} taskId={formattedTaskId} />} />
        <Route path="/viewtask/edit/:taskId" element={<EditTaskPage tasks={tasks} setTasks={setTasks} taskId={formattedTaskId} />} />
      </Routes>
    </div>
  );
}

export default App;