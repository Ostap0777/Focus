import React from 'react'
import styles from './contact.module.scss'

export default function Contact() {
  return (
	<section className={styles.contact__section}>
		<div className='contact__container'>
	<div className={styles.contact__content}>
		<div className={styles.contact__items}>
			<div className={styles.contact__item}>	
				 <h2 className={styles.contact__title}>Зв’яжіться з нашим менеджером</h2>
	          <p className={styles.contact__text}>Вас зацікавили пропозиції або виникли питання? <br /> Заповніть форму зворотнього з’язку і наші менеджери <br /> як найшвидше зв’яжуться з вами</p>
	       </div>
			 <div className={styles.contact__item}>	
  <form className={styles.contact__form} action="">
    <div className={styles.form__part}>
      <label className={styles.form__label} htmlFor="">Контактні дані</label>
      <input placeholder='ПІБ' className={`${styles.form__input} ${styles.form__input__name}`} type="text" />
    </div>
    <div className={styles.form__part}>
      <label className={styles.form__label} htmlFor="">Номер телефону</label>
      <input placeholder='+380' className={`${styles.form__input} ${styles.form__input__phone}`} type="text" />
    </div>
    <div className={styles.form__part}>
      <label className={styles.form__label} htmlFor="">Коментарі</label>
      <input placeholder='Причина звернення' className={`${styles.form__input} ${styles.form__input__comments}`} type="text" />
    </div>
    <button className={styles.form__button}>
      <a className={styles.form__button__text}>Зв'язатися</a>
    </button>
  </form>
</div>

			 </div>
		</div>
	</div>
	</section>
  )
}
