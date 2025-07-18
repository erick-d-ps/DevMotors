"use client"

import Styles from './error.module.scss'
import Link from "next/link"

export default function Error(){
  return(
    <div className={Styles.error}>
      <h1> Ops essa página não existe! </h1>
      <Link 
      className={Styles.link}
      href="/">
         Voltar para Home 
      </Link>
    </div>
  )
}