import classes from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
