import React from 'react';
import styles from './constration.module.scss';

const Constraction = ({ title, imageSrc, items }) => {
  return (
    <section className={styles.construction__section}>
      <div className='construction__container'>
        <div className={styles.construction__content}>
          <img className={styles.construction__image} src={imageSrc} alt={title} />
          <p className={styles.construction__title}>{title}</p>
          <div className={styles.construction__items}>
            {items.map((item, index) => (
              <div key={index} className={styles.construction__item}>
                <p className={styles.construction__number}>{item.number}</p>
                <p className={styles.construction__name}>{item.name}</p>
                <p className={styles.construction__text}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className={styles.button__details}>Детальніше</button>
    </section>
  );
};

export default Constraction;
