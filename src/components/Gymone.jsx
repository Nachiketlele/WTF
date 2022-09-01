import { Button, Input } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import "./Gym.css";
import Gymthree from "./Gymthree";
import Gymtwo from "./Gymtwo";
import { GoLocation } from 'react-icons/go';
import { AiOutlineSearch } from 'react-icons/ai';
import mainimage from "./mainimage.png"
const Gymone = () => {
  return (
    <>
      <div id="box">
        <img src={mainimage} alt="" />
      </div>
      <div id="input">
         <Input id="in" width={"80%"} height={"50px"} variant="filled" placeholder="Search the Gym" />
         <Button id="btn"><GoLocation id="logo"/></Button>
         <Button id="btn1">Clear</Button>
      </div>
      <Gymtwo/>
      <Gymthree/>
      <Footer/>
    </>
  );
};

export default Gymone;
