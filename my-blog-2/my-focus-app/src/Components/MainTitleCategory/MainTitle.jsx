import React from 'react'
import styles from './maintitle.module.scss'

export default function MainTitle() {
  return (
	<section className={styles.maintitle__section}>
	<div className='category__container'>
		<div className={styles.category__title}>
		<p className={styles.category__name}>01.Фокусволи</p>
		<p className={styles.category__name}>02.Куби</p>
		<p className={styles.category__name}>03.Віндери</p>
		<p className={styles.category__name}>04.Підтримка</p>
		</div>
	 </div>
	 </section>
  )
}
