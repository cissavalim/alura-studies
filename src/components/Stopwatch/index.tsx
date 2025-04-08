import Button from "../Button"
import Watch from "./Watch"
import style from "./Stopwatch.module.scss"

export default function Stopwatch() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card and start the stopwatch</p>
      <div className={style.relogioWrapper}>
        <Watch />
      </div>
      <Button>
        Add
      </Button>
    </div>
  )
}