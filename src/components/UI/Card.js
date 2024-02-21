import "./Card.css";

const Card = (props) => {
  // add pluse  white space
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
