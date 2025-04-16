import Item from './Item';
import style from './List.module.scss';
import { ITask } from '../../types/task';

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>
        Today's tasks
      </h2>
      <ul>
        {tasks.map((task) => (
          <Item
            selectTask={selectTask}
            key={task.id}
            {...task}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;