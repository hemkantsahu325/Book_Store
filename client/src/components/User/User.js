import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./User.css";
const User = (props) => {
  const history = useNavigate();
  const { _id, name, email, password} = props.user;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/user/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/users"));
  };

  return (
    <div className="card">
     
      <article> {email}</article>
      <h3>{name}</h3>
      {/* <p>{password}</p> */}
      
      <Button LinkComponent={Link} to={`/books/user/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default User;
