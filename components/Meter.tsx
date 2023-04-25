import classes from "./Meter.module.css";

export default function Meter() {
  return (
    <div className="p-4">
      <div
        className={classes.gauge}
        style={{
          "--rotation": "83deg",
          "--color": "#5cb85c",
          "--background": "#e9ecef",
        }}
      >
        <div className={classes.percentage}></div>
        <div className={classes.mask}></div>
        <span className={classes.value}>46%</span>
      </div>
    </div>
  );
}
