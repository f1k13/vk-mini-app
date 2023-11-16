// @ts-ignore
import styles from "./styles/tooltip.module.css";

const Tooltip = ({ color, title }: { color: string; title: string }) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.root}>
      <p style={{ backgroundColor: color }} className={styles.text}>
        {title}
      </p>
    </div>
  );
};

export default Tooltip;
