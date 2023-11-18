// @ts-ignore
import styles from "./styles/tooltip.module.css";
import clsx from "clsx";

const Tooltip = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => {
  return (
    <div style={{ backgroundColor: color }} className={clsx(styles.root)}>
      <p style={{ backgroundColor: color }} className={styles.text}>
        {children}
      </p>
    </div>
  );
};

export default Tooltip;
