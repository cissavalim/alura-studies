import Button from "../Button"
import Watch from "./Watch"
import style from "./Stopwatch.module.scss"
import { ITask } from "../../types/task"
import { timeToSeconds } from "../../common/utils/time"
import { useEffect, useState } from "react"

interface Props {
  selected: ITask | undefined,
  finishTask: () => void,
}

export default function Stopwatch({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time))
    }
  }, [selected])

  function countDown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1)
        return countDown(counter - 1)
      }
      finishTask()
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>
        Choose a card and start the stopwatch.
      </p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => countDown(time)}>
        Add
      </Button>
    </div>
  )
}