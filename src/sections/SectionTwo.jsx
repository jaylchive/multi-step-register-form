import { useContext, useState } from 'react';

import SectionTitle from '../ui/SectionTitle';
import TopicCheckBox from '../ui/TopicCheckBox';
import Button from '../ui/Button';

import { FormDataContext } from '../store/FormDataProvider';

import styles from './SectionTwo.module.css';

function SectionTwo() {
  const { formData, formDispatch } = useContext(FormDataContext);
  const { topics: initialTopics, page: currentPage } = formData;

  const [topics, setTopics] = useState(initialTopics);
  const [isValidState, setIsValidState] = useState(true);

  function handleTopicCheck(id) {
    setIsValidState(true);
    setTopics(prevTopics => {
      const topics = [
        ...prevTopics.map(topic => {
          return { ...topic };
        }),
      ];

      for (const topic of topics) {
        if (topic.id === id) topic.selected = !topic.selected;
      }

      return topics;
    });
  }

  function handleNextSection() {
    const isTopicSelected = topics.map(topic => topic.selected).includes(true);
    const page = isTopicSelected ? currentPage + 1 : currentPage;

    !isTopicSelected && setIsValidState(false);

    formDispatch({
      type: 'TOPICS',
      payload: {
        topics,
        page,
      },
    });
  }

  return (
    <>
      <SectionTitle>Which topics you are interested in?</SectionTitle>
      <ul>
        {topics.map(topic => (
          <li key={topic.id} className={styles.topicList}>
            <TopicCheckBox
              topic={topic}
              onClick={() => handleTopicCheck(topic.id)}
            />
          </li>
        ))}
      </ul>
      {!isValidState && (
        <p className={styles.error}>Please select at least one of the topics</p>
      )}
      <Button onClick={handleNextSection}>Continue</Button>
    </>
  );
}

export default SectionTwo;
