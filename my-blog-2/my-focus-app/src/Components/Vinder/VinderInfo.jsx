import React from 'react';
import styles from './vinderinfo.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function VinderInfo() {
  return (
    <section className={styles.vinder__section}>
      <div className={styles.vinder__container}>
        <div className={styles.vinder__content__one}>
          <div className={styles.vinder__items}>
            <div className={styles.vinder__image}>
              <img src="/img/vinder/Монтажна область 1 2.svg" alt="Vinder" />
            </div>
            <div className={styles.vinder__item}>
              <div className={styles.vinder__size}>
                <h4 className={styles.vinder__size__title}>Розмірна сітка віндера:</h4>
                <div className={styles.vinder__size__items}>
                  <p className={styles.vinder__size__info}><span>XS</span> 400x2000 мм</p>
                  <p className={styles.vinder__size__info}><span>S</span> 650x2200 мм</p>
                  <p className={styles.vinder__size__info}><span>M</span> 700x3400 мм</p>
                  <p className={styles.vinder__size__info}><span>L</span> 820x4700 мм</p>
                </div>
              </div>
            </div>
				</div>
          </div>
        </div>
    </section>
  );
}
