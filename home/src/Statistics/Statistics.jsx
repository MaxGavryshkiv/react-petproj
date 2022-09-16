import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>Upload stats</h2>}

      <ul className={styles.statList}>
        {stats.map(el => {
          return (
            <li className={styles.item} key={el.id}>
              <span className={styles.label}>{el.label}</span>
              <span className={styles.percentage}>{el.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Statistics;
