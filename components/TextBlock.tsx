import styles from "./textblock.module.css";

const TextBlock = ({text_class}) => {
  return (
    <div>
      <div className={`${styles.textBlock}`}>
        <p className={`${text_class} ${styles.animText}`}>Lorem ipsum dolor sit amet</p>
      </div>
      {/* <p className={`${styles.replayButton}`}>replay</p> */}
    </div>
  );
};

export default TextBlock;
