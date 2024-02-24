import CardUser from "../UI/CardUser";
import classes from "./UsersList.module.css";

const UserList = (props) => {
  return (
    <CardUser className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </CardUser>
  );
};

export default UserList;
