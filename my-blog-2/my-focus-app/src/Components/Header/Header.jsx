import React from 'react'
import styles from './header.module.scss'

export default function Header() {
  return (
	 <header className={styles.header}>
		<div className='header__container'>
			<div className={styles.header__content}>
			<img className={styles.header__logo} src="/img/header/Group 19.svg" alt="" />
			<ul className={styles.header__items}>
				<li className={styles.header__item}>Focuswall</li>
				<li className={styles.header__item}>Cube</li>
				<li className={styles.header__item}>Flag</li>
				<li className={styles.header__item}>Contact</li>
			</ul>
		</div>
		</div>
	 </header>
  )
}
