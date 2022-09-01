import React from "react";
import "./Gym.css";
import { Button, Input, Select, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Gymtwo = () => {
  const [data, setData] = useState([]);


  let getData = () => {
    axios
      .get(
        `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`
      )
      .then((res) => {
        setData(res.data);
        // console.log(res.data)
      });
  };
  let getDataFIlter = (value) =>{
      axios.get(`https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${value}`)
      .then((res)=>{
        if(res.data == undefined){
          setData([])
        }
         setData(res.data)
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

const handlesort = (value) =>{
  console.log(value)
  if(value == ""){
    getData()
  }
  getDataFIlter(value)
}
   

 
  useEffect(() => {
    getData();
  }, []);
  // console.log(data);
  return (
    <div id="mainbox">
      <div id="filter">
        <h2 id="h2">Filters</h2>
        <div id="location">
          <p>Location</p>
          <Input
            id="in1"
            width={"75%"}
            height={"50px"}
            placeholder="Enter Location"
          />
        </div>
        <div id="price">
          <p>Price</p>
          <Input
            id="in1"
            width={"20%"}
            marginRight={"10px"}
            variant="filled"
            placeholder="Min"
            height={"50px"}
          />
          <Input id="in1" width={"20%"} height={"50px"} placeholder="Max" />
        </div>
        <div id="cities">
          <p>Cities</p>
          <select id="selects" onChange={(e)=>handlesort(e.target.value)}>
            <option value="">Select Cities</option>
            <option value="new delhi">New Delhi</option>
            <option value="gaziabad">Gaziabad</option>
            <option value="noida">Noida</option>
            <option value="delhi">Delhi</option>
          </select>
        </div>
      </div>
      <div id="list">
        {data?.data?.map((el) => (
          <div id="Box2">
            <div id="image_div">
                {el.cover_image?<img src={el.cover_image} alt="" />:<img src="https://www.bing.com/th?id=OIP.cl6p7nZBiruTcSJZE5ZdQgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"/>}
            </div>
            <div id="details_div">
               <Text id="p">{el.gym_name}</Text>
               <p id="p1">{el.address1} ,<span>{el.address2}</span></p>
               <p id="p1">{el.duration_text} | <span>{el.distance_text}</span></p>
               <div><Button marginTop={"150px"} bg={"red"} color={"white"}>Book Now</Button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gymtwo;
