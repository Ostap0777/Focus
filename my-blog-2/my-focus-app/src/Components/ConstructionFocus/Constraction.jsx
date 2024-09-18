import React from 'react'
import styles from './constraction.module.scss'

export default function Constraction() {
  return (
	 <section className={styles.construction__section}>
		<div className='construction__container'>
		<div className={styles.construction__content}>
			<img className={styles.construction__image} src="/img/construction/image 3.svg" alt="" />
			<p className={styles.construction__title}>Конструкція Focus Wall</p>
			<div className={styles.construction__items}> {/* Виправлена назва класу */}
				<div className={styles.construction__item}>
					<p className={styles.construction__number}>1</p>
					<p className={styles.construction__name}>Алюмінієва рама</p>
					<p className={styles.construction__text}>Рами виготовлені з високоякісного легкого алюмінію,  є довговічними, а також й естетично привабливі. Легкість рами сприяє простоті монтажу та транспортування, а також дозволяє легко оновлювати текстильні постери, що ідеально підходить для частих маркетингових кампаній.</p>
				</div>
				<div className={`${styles.construction__item} ${styles.construction__anotherClass}`}>
				<p className={styles.construction__number}>2</p>
					<p className={styles.construction__name}>Текстильний постер</p>
					<p className={styles.construction__text}>Виготовлені з екологічно чистих матеріалів, тканинні постери характеризуються високою якістю зображення та відсутністю неприємних запахів, що робить їх ідеальними для внутрішнього використання. Зображення на текстилі виглядає яскраво, природно та реалістично.</p>
				</div>
				<div className={styles.construction__item}>
				<p className={styles.construction__number}>3</p>
					<p className={styles.construction__name}>LED-освітлення</p>
					<p className={styles.construction__text}>Новітні технології світлодіодного освітлення забезпечують рівномірне світло, що підкреслює якість зображення і зменшує енергоспоживання.</p>
				</div>
			</div>
		</div>
		</div>
		<button className={styles.button__details}>Детальніше</button>
	 </section>
  )
}
