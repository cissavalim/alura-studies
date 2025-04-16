import React from "react";
import style from "./Watch.module.scss";

interface Props {
  time: number | undefined;
}

export default function Watch({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [first, second] = String(minutes).padStart(2, '0')
  const [third, fourth] = String(seconds).padStart(2, '0')
  return (
    <>
      <span className={style.relogioNumero}>{first}</span>
      <span className={style.relogioNumero}>{second}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{third}</span>
      <span className={style.relogioNumero}>{fourth}</span>
    </>
  )
}