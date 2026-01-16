import styles from '../../styles/Content.module.css';

export default function Content({ title, children }) {
  return (
    <div className={styles.main}>
      <div className="rainbowText rainbowTextTitle">
        <h1 className="bouncing">{title}</h1>
      </div>
      <div className={styles.content}>
        <div className="text-area">{children}</div>
      </div>
    </div>
  );
}
