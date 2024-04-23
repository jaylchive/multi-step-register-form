import { useContext } from 'react';

import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

import { FormDataContext } from '../store/FormDataProvider';

import styles from './SectionThree.module.css';

function SectionThree() {
  const { formData, formDispatch } = useContext(FormDataContext);
  const { name, email, topics, page } = formData;

  const selectedTopics = topics.filter(topic => topic.selected);

  function handleNextSection() {
    formDispatch({ type: 'SUMMARY', payload: page + 1 });
  }

  return (
    <>
      <SectionTitle>Summary</SectionTitle>
      <div className={styles['content-row--1']}>
        <p>
          <span className={styles.label}>Name: </span>
          <span>{name}</span>
        </p>
        <p>
          <span className={styles.label}>Email: </span>
          <span>{email}</span>
        </p>
      </div>
      <div className={styles['content-row--2']}>
        <h3 className={styles.label}>Topics:</h3>
        <ul>
          {selectedTopics.map(topic => (
            <li key={topic.id}>{topic.topic}</li>
          ))}
        </ul>
      </div>
      <Button onClick={handleNextSection}>Confirm</Button>
    </>
  );
}

export default SectionThree;
