import React from 'react';
import styles from './category.module.scss';

const Category = ({ title, description, imageSrc }) => {
  return (
    <section className={styles.category__section}>
		<div className='category__container'>
      <div className={styles.category__content}>
        <h2 className={styles.category__title}>{title}</h2>
        <div className={styles.category__items}>
          <div className={styles.category__item}>
            <span className={styles.category__item__span}>{description}</span>
				<button>
					<a className={styles.category__button} href="">Замовити</a>
				</button>
          </div>
          <div className={styles.category__item}>
            <img src={imageSrc} alt="Category" />
          </div>
        </div>
		  </div>
      </div>
    </section>
  );
};

export default Category;
