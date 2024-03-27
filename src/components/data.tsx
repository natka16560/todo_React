import { useState, useEffect } from 'react';

//Определение интерфейса Task, описывающего структуру данных для задачи
export interface Task {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    priority: string;
    tags: string[];
}

//Массив, который выводится на странице
export const initTasks: Task[] = [];

export const useTaskState = () => {
    const initTasks: Task[] = [];
    const [tasks, setTasks] = useState<Task[]>(initTasks);// начальное значение - массив initTasks
    return { tasks, setTasks };
};

//Имитация загрузки элементов массива с бека с задержкой
export const useTaskEffects = (initTasks: Task[]): { tasks: Task[]; setTasks: React.Dispatch<React.SetStateAction<Task[]>> } => {
  const [tasks, setTasks] = useState<Task[]>(initTasks);

  useEffect(() => {
      setTimeout(() => {
        const newTasks: Task[] = [
          {
            id: 1,
            title: 'Задача 1',
            description: 'Описание задачи 1',
            createdAt: '11/03/2024',
            priority: 'high',
            tags: ['research', 'design'],
          },
          {
            id: 2,
            title: 'Задача 2',
            description: 'Описание задачи 2',
            createdAt: '12/03/2024',
            priority: 'normal',
            tags: ['development'],
          },
          {
            id: 3,
            title: 'Задача 3',
            description: 'Описание задачи 3',
            createdAt: '13/03/2024',
            priority: 'low',
            tags: [],
          },
          {
            id: 4,
            title: 'Задача 4',
            description: 'Описание задачи 4',
            createdAt: '14/03/2024',
            priority: 'high',
            tags: ['research', 'development'],
          },
          {
            id: 5,
            title: 'Задача 5',
            description: 'Описание задачи 5',
            createdAt: '15/03/2024',
            priority: 'high',
            tags: ['research', 'design'],
          },
          {
            id: 6,
            title: 'Задача 6',
            description: 'Описание задачи 6',
            createdAt: '16/03/2024',
            priority: 'normal',
            tags: ['development'],
          },
          {
            id: 7,
            title: 'Задача 7',
            description: 'Описание задачи 7',
            createdAt: '17/03/2024',
            priority: 'low',
            tags: [],
          },
          {
            id: 8,
            title: 'Задача 8',
            description: 'Описание задачи 8',
            createdAt: '18/03/2024',
            priority: 'high',
            tags: ['research', 'development'],
          },
          {
            id: 9,
            title: 'Задача 9',
            description: 'Описание задачи 9',
            createdAt: '19/03/2024',
            priority: 'high',
            tags: ['research', 'design'],
          },
          {
            id: 10,
            title: 'Задача 10',
            description: 'Описание задачи 10',
            createdAt: '20/03/2024',
            priority: 'normal',
            tags: ['development'],
          },
          {
            id: 11,
            title: 'Задача 11',
            description: 'Описание задачи 11',
            createdAt: '21/03/2024',
            priority: 'low',
            tags: [],
          },
          {
            id: 12,
            title: 'Задача 12',
            description: 'Описание задачи 12',
            createdAt: '22/03/2024',
            priority: 'high',
            tags: ['research', 'development'],
          },
          {
            id: 13,
            title: 'Задача 13',
            description: 'Описание задачи 13',
            createdAt: '23/03/2024',
            priority: 'high',
            tags: ['research', 'design'],
          },
          {
            id: 14,
            title: 'Задача 14',
            description: 'Описание задачи 14',
            createdAt: '24/03/2024',
            priority: 'normal',
            tags: ['development'],
          },
          {
            id: 15,
            title: 'Задача 15',
            description: 'Описание задачи 15',
            createdAt: '25/03/2024',
            priority: 'low',
            tags: [],
          },
          {
            id: 16,
            title: 'Задача 16',
            description: 'Описание задачи 16',
            createdAt: '26/03/2024',
            priority: 'high',
            tags: ['research', 'development'],
          },
        ];
        setTasks(newTasks);
        console.log('setTimeout');
      }, 1000);
    }, []);    

  return {
    tasks,
    setTasks,
  };
};