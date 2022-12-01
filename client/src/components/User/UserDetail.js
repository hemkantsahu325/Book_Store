import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const UserDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/books/user/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.book));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/user/${id}`, {
          name: String(inputs.name),
          email: String(inputs.email),
          password: String(inputs.password),
       
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/books/user"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
        {inputs && (
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={"center"}
              maxWidth={700}
              alignContent={"center"}
              alignSelf="center"
              marginLeft={"auto"}
              marginRight="auto"
              marginTop={10}
            >
              <FormLabel>Name</FormLabel>
              <TextField
                value={inputs.name}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="name"
              />
              <FormLabel>email</FormLabel>
              <TextField
                value={inputs.email}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="email"
              />
              <FormLabel>password</FormLabel>
              <TextField
                value={inputs.password}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="password"
              />
              
  
              <Button variant="contained" type="submit">
                Update User
              </Button>
            </Box>
          </form>
        )}
      </div>
    );
  };
  
  export default UserDetail;
  