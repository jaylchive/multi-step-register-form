import styles from './InputForm.module.css';

function InputForm({ label, error, ...props }) {
  return (
    <p className={`${styles.inputForm} ${error ? styles.error : ''}`}>
      <label htmlFor={label}>{label}</label>
      <input {...props} />
      {error && (
        <span className={styles.error}>Please submit a valid information</span>
      )}
    </p>
  );
}

export default InputForm;
