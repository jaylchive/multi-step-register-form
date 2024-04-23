import { useContext } from 'react';

import { FormDataContext } from '../store/FormDataProvider';

import styles from './Footer.module.css';

function Footer() {
  const { formData } = useContext(FormDataContext);

  if (formData.page > 3) return null;

  return (
    <footer className={styles.footer}>
      <p className={styles.pagination}>Step {formData.page} of 3</p>
      <ul className={styles.circleList}>
        <li>
          <span
            className={`${styles.outerCircle} ${
              formData.page === 1 ? styles.current : ''
            } ${formData.page >= 1 ? styles.active : ''}`}
          >
            <span className={styles.innerCircle}></span>
          </span>
        </li>
        <li>
          <span
            className={`${styles.outerCircle} ${
              formData.page === 2 ? styles.current : ''
            } ${formData.page >= 2 ? styles.active : ''}`}
          >
            <span className={styles.innerCircle}></span>
          </span>
        </li>
        <li>
          <span
            className={`${styles.outerCircle} ${
              formData.page === 3 ? styles.current : ''
            } ${formData.page >= 3 ? styles.active : ''}`}
          >
            <span className={styles.innerCircle}></span>
          </span>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
