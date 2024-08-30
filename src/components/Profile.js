import { useContext, useEffect, useState } from "react";
import randomContext from "../utils/randomContext";

const Profile = (props) => {
  // const [count, setCount] = useState(0);
  const { productInfo } = useContext(randomContext);

  // useEffect(() => {
  // const timer = setInterval(() => {
  //   console.log("timer is start");
  // }, 2000);

  // return () => {
  //   clearInterval(timer);
  //   console.log("this will call after leaving the page");
  // };
  // });
  console.log("checking order");

  return (
    <>
      <h3>Name: {props.name}</h3>
      <p>Hello, I'm Sunny</p>
      <span>{productInfo.name}</span>

      {/* <p>Count: {count}</p>
      <button onClick={() => setCount(1)}>Count</button> */}
    </>
  );
};

export default Profile;
