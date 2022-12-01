import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const Signin = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      password: "",  //description
    //   price: "",
      email: "",
  
    //   image: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/user", {
          name: String(inputs.name),
          email: String(inputs.email),
          password: String(inputs.password),
       
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/books"));
    };
  
    return (
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
          <FormLabel>Email</FormLabel>
          <TextField
            value={inputs.author}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="email"
          />
          <FormLabel>Password</FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="password"
          />
          
         
          
  
          <Button variant="contained" type="submit">
            Sign in
          </Button>
        </Box>
      </form>
    );
  };
  
  export default Signin;
  