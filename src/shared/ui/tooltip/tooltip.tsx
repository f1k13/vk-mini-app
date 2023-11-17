// @ts-ignore
import styles from "./styles/tooltip.module.css";
import clsx from "clsx";
import { DateTime } from "luxon";
import { useEffect } from "react";

const Tooltip = ({
  color,
  title,
  width,
  height,
  border,
  endDate,
  startDate,
  widthGraph,
}: {
  color: string;
  title?: string;
  width?: string;
  widthGraph?: number;
  height: string;
  border?: string;
  endDate?: string;
  startDate?: string;
}) => {
  const startDateObj = DateTime.fromFormat(startDate || "", "dd.MM");
  const endDateObj = DateTime.fromFormat(endDate || "", "dd.MM");

  const totalDays = Math.abs(endDateObj.diff(startDateObj, "days").days) + 1;
  const widthPercent = Math.ceil((totalDays / 365) * 100);
  return (
    <div
      style={{ backgroundColor: color, width: `${widthGraph}px` }}
      className={clsx(styles.root, width, height, border && border)}
    >
      <p style={{ backgroundColor: color }} className={styles.text}>
        {title}
      </p>
    </div>
  );
};

export default Tooltip;
