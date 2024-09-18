import React from 'react'
import styles from './main.module.scss'

export default function () {
  return (
	 <main className={styles.main}>

		<div className={styles.main__items}>
			<div className={styles.main__item}>
				<h2 className={styles.main__text}>Текстильні лайтбокси  <br />
                Рекламні куби <br />
                Віндери, прапори
            </h2>
				<button>
					<a className={styles.main__button}>Замовляй прямо зараз!</a>
				</button>
			</div>
			<div className={styles.main__item__image}>
				<img className={styles.main__image} src="/img/main/Preview (1).svg" alt="" />
			</div>
		</div>

	 </main>
  )
}
