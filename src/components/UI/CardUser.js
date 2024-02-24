import classes from "./CardUser.module.css";

const CardUser = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
export default CardUser;
