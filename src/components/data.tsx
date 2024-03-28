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
            createdAt: '27/02/2024',
            priority: 'high',
            tags: ['research', 'design'],
          },
          {
            id: 2,
            title: 'Задача 2',
            description: 'Описание задачи 2',
            createdAt: '28/02/2024',
            priority: 'normal',
            tags: ['development'],
          },
          {
            id: 3,
            title: 'Задача 3',
            description: 'Описание задачи 3',
            createdAt: '29/02/2024',
            priority: 'low',
            tags: [],
          },
          {
            id: 4,
            title: 'Задача 4',
            description: 'Описание задачи 4',
            createdAt: '01/03/2024',
            priority: 'high',
            tags: ['research', 'development'],
          },
          {
            id: 5,
            title: 'Задача 5',
            description: 'Описание задачи 5',
            createdAt: '02/03/2024',
            priority: 'high',
            tags: ['research', 'design'],
          },
          {
            id: 6,
            title: 'Задача 6',
            description: 'Описание задачи 6',
            createdAt: '03/03/2024',
            priority: 'normal',
            tags: ['development'],
          },
          {
            id: 7,
            title: 'Задача 7',
            description: 'Описание задачи 7',
            createdAt: '04/03/2024',
            priority: 'low',
            tags: [],
          },
          {
            id: 8,
            title: 'Задача 8',
            description: 'Описание задачи 8',
            createdAt: '05/03/2024',
            priority: 'high',
            tags: ['research', 'development'],
          },
          {
            id: 9,
            title: 'Задача 9',
            description: 'Описание задачи 9',
            createdAt: '06/03/2024',
            priority: 'high',
            tags: ['research', 'design'],
          },
          {
            id: 10,
            title: 'Задача 10',
            description: 'Описание задачи 10',
            createdAt: '07/03/2024',
            priority: 'normal',
            tags: ['development'],
          },
          {
            id: 11,
            title: 'Задача 11',
            description: 'Описание задачи 11',
            createdAt: '08/03/2024',
            priority: 'low',
            tags: [],
          },
          {
            id: 12,
            title: 'Задача 12',
            description: 'Описание задачи 12',
            createdAt: '09/03/2024',
            priority: 'high',
            tags: ['research', 'development'],
          },
          {
            id: 13,
            title: 'Задача 13',
            description: 'Описание задачи 13',
            createdAt: '10/03/2024',
            priority: 'high',
            tags: ['research', 'design'],
          },
          {
            id: 14,
            title: 'Задача 14',
            description: 'Описание задачи 14',
            createdAt: '11/03/2024',
            priority: 'normal',
            tags: ['development'],
          },
          {
            id: 15,
            title: 'Задача 15',
            description: 'Описание задачи 15',
            createdAt: '12/03/2024',
            priority: 'low',
            tags: [],
          },
          {
            id: 16,
            title: 'Задача 16',
            description: 'Описание задачи 16',
            createdAt: '13/03/2024',
            priority: 'high',
            tags: ['research', 'development'],
          },
          {
            id: 17,
            title: 'Задача 17',
            description: 'Описание задачи 17',
            createdAt: '14/03/2024',
            priority: 'high',
            tags: ['research', 'design'],
          },
          {
            id: 18,
            title: 'Задача 18',
            description: 'Описание задачи 18',
            createdAt: '15/03/2024',
            priority: 'normal',
            tags: ['development'],
          },
          {
            id: 19,
            title: 'Задача 19',
            description: 'Описание задачи 19',
            createdAt: '16/03/2024',
            priority: 'low',
            tags: [],
          },
          {
            id: 20,
            title: 'Задача 20',
            description: 'Описание задачи 20',
            createdAt: '17/03/2024',
            priority: 'high',
            tags: ['research', 'development'],
          },
          {
            id: 21,
            title: 'Задача 21',
            description: 'Описание задачи 21',
            createdAt: '18/03/2024',
            priority: 'high',
            tags: ['research', 'design'],
          },
          {
            id: 22,
            title: 'Задача 22',
            description: 'Описание задачи 22',
            createdAt: '19/03/2024',
            priority: 'normal',
            tags: ['development'],
          },
          {
            id: 23,
            title: 'Задача 23',
            description: 'Описание задачи 23',
            createdAt: '20/03/2024',
            priority: 'low',
            tags: [],
          },
          {
            id: 24,
            title: 'Задача 24',
            description: 'Описание задачи 24',
            createdAt: '21/03/2024',
            priority: 'high',
            tags: ['research', 'development'],
          },
          {
            id: 25,
            title: 'Задача 25',
            description: 'Описание задачи 25',
            createdAt: '22/03/2024',
            priority: 'high',
            tags: ['research', 'design'],
          },
          {
            id: 26,
            title: 'Задача 26',
            description: 'Описание задачи 26',
            createdAt: '23/03/2024',
            priority: 'normal',
            tags: ['development'],
          },
          {
            id: 27,
            title: 'Задача 27',
            description: 'Описание задачи 27',
            createdAt: '24/03/2024',
            priority: 'low',
            tags: [],
          },
          {
            id: 28,
            title: 'Задача 28',
            description: 'Описание задачи 28',
            createdAt: '25/03/2024',
            priority: 'high',
            tags: ['research', 'development'],
          },
          {
            id: 29,
            title: 'Задача 29',
            description: 'Описание задачи 29',
            createdAt: '26/03/2024',
            priority: 'high',
            tags: ['research', 'design'],
          },
          {
            id: 30,
            title: 'Задача 30',
            description: 'Описание задачи 30',
            createdAt: '27/03/2024',
            priority: 'normal',
            tags: ['development'],
          },
          {
            id: 31,
            title: 'Задача 31',
            description: 'Описание задачи 31',
            createdAt: '28/03/2024',
            priority: 'low',
            tags: [],
          },
          {
            id: 32,
            title: 'Задача 32',
            description: 'Описание задачи 32',
            createdAt: '29/03/2024',
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