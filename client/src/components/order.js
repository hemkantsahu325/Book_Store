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
  
  const OrderBook = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      
      number: "",
      bookname: "",
  
      address: "",
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
        .post("http://localhost:5000/order", {
          name: String(inputs.name),
          bookname: String(inputs.bookname),
         
          number: Number(inputs.number),
          address: String(inputs.address),
 
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/order"));
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
          <FormLabel>bookname</FormLabel>
          <TextField
            value={inputs.bookname}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="bookname"
          />
          
          <FormLabel>number</FormLabel>
          <TextField
            value={inputs.number}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="number"
          />
          <FormLabel>address</FormLabel>
          <TextField
            value={inputs.address}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="address"
          />
          
  
          <Button variant="contained" type="submit">
            Order Book
          </Button>
        </Box>
      </form>
    );
  };
  
  export default OrderBook;
  