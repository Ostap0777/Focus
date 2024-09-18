import React from 'react'
import styles from './maincategory.module.scss'

export default function MainCategory() {
  return (
	 <section className={styles.category__section}>
		<div className='category__container'>
		<div className={styles.category__title}>
		<p className={styles.category__name}>01.Фокусволи</p>
		<p className={styles.category__name}>02.Куби</p>
		<p className={styles.category__name}>03.Віндери</p>
		<p className={styles.category__name}>04.Підтримка</p>
		</div>
		<div className={styles.category__items}>
			<div className={styles.category__item}>
				<p className={styles.category__text}> <span className={styles.category__text__span}>Focus Wall</span> (текстильний лайтбокс)  - це  втілення 
                 передових технологій та комплекс рішень для
                 ефективної візуальної комунікації та 
                 оформлення простору. Вироби ідеально поєднують 
                 функціональність із сучасним дизайном,
                 що робить їх придатними для широкого спектру 
                 застосувань, від рекламних до декоративних цілей.
					  </p>
					  <button >
						<a className={styles.category__button} href="">Замовити</a>
					  </button>
			</div>
			<div className={styles.category__item}>
				<img src="/img/main/image 1.svg" alt="" />
			</div>
		</div>
		</div>
	 </section>
  )
}
