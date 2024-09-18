import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
  return (
	 <footer className={styles.footer}>
		<div className='footer__container'>
			<div className={styles.footer__content}>
				<img className={styles.footer__image} src="/img/footer/Group 19 (1).svg" alt="" />
				<ul className={styles.footer__links}>
					<li >
						<a href="" className={styles.footer__link}>Focuswall</a>
					</li>
					<li >
						<a href="" className={styles.footer__link}>Cube</a>
						</li>
					<li >
						<a href="" className={styles.footer__link}>Flag</a>
						</li>
				</ul>
				<div className={styles.footer__info}>
					<p>order@toptrend.com.ua</p>
					<p>+ 380 (67) 314-55-15</p>
					<p>+ 380 (67) 314-55-00</p>
				</div>
			</div>
		</div>
	 </footer>
  )
}
