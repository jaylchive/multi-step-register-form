import { useContext } from 'react';

import SectionOne from './sections/SectionOne';
import SectionTwo from './sections/SectionTwo';
import SectionThree from './sections/SectionThree';
import SectionFour from './sections/SectionFour';
import Footer from './ui/Footer';

import { FormDataContext } from './store/FormDataProvider';

import styles from './App.module.css';

function App() {
  const { formData } = useContext(FormDataContext);
  const { page } = formData;

  return (
    <div id={styles.app}>
      <main className={styles.main}>
        {page === 1 && <SectionOne />}
        {page === 2 && <SectionTwo />}
        {page === 3 && <SectionThree />}
        {page === 4 && <SectionFour />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
