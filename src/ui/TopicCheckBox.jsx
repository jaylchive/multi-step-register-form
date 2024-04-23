import styles from './TopicCheckBox.module.css';

function TopicCheckBox({ topic, onClick }) {
  return (
    <button
      className={`${styles.topic} ${topic.selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {topic.topic}
    </button>
  );
}

export default TopicCheckBox;
