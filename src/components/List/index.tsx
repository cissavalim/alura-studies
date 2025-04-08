import Item from './Item';
import style from './List.module.scss';
import { ITask } from '../../types/task';

function List({ studies }: { studies: ITask[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>
        Today's studies
      </h2>
      <ul>
        {studies.map((study, index) => (
          <Item
            key={index}
            {...study}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;