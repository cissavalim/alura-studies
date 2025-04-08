import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';
import { ITask } from '../types/task';

function App() {
  const [studies, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List studies={studies} />
      <Stopwatch />
    </div>
  );
}

export default App;
