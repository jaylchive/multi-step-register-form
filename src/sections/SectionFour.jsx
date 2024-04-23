import { useContext } from 'react';

import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

import { FormDataContext } from '../store/FormDataProvider';

import styles from './SectionFour.module.css';

function SectionFour() {
  const { formDispatch } = useContext(FormDataContext);

  function handleFirstSection() {
    formDispatch({ type: 'SUBMITTED', payload: 1 });
  }

  return (
    <>
      <SectionTitle>Submitted!</SectionTitle>
      <p className={styles.mainParagraph}>
        Your form has been submitted successfully!
      </p>
      <p className={styles.subParagraph}>Thank you for your participation!</p>
      <Button onClick={handleFirstSection}>Back to Home</Button>
    </>
  );
}

export default SectionFour;
