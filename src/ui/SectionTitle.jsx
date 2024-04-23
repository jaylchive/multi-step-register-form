import styles from './SectionTitle.module.css';

function SectionTitle({ marginLarge = false, children }) {
  return (
    <h1
      className={`${styles.title} ${marginLarge ? styles.marginLarge : null}`}
    >
      {children}
    </h1>
  );
}

export default SectionTitle;
