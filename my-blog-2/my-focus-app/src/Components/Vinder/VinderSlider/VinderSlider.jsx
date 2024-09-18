import React from 'react';
import styles from './vinderslider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function VinderSlider() {
  return (
    <section className={styles.vinder__section}>
      <div className={styles.vinder__content__two}>
        <p className={styles.vidertwo__title}>Основа для Конструкції</p>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides
          slideToClickedSlide
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className={styles.slider}
        >
          <SwiperSlide className={styles.slide}>
            <img className={styles.vinder__image} src="/img/vinder/Group 27.svg" alt="Image 1" />
            <p className={styles.vinder__name}>Хрестоподібна з підшипником</p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img className={styles.vinder__image} src="/img/vinder/Group 26.svg" alt="Image 2" />
            <p className={styles.vinder__name}>Плоска квадратна</p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img className={styles.vinder__image} src="/img/vinder/Group 37.svg" alt="Image 3" />
            <p className={styles.vinder__name}>Хрестоподібна (Люкс)</p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img className={styles.vinder__image} src="/img/vinder/Group 25.svg" alt="Image 4" />
            <p className={styles.vinder__name}>Гвинтова (Бур)</p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img className={styles.vinder__image} src="/img/vinder/Group 28.svg" alt="Image 5" />
            <p className={styles.vinder__name}>Хрестоподібна (Люкс)</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
