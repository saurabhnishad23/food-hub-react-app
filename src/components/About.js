import Profile from "./Profile";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  //first render constructor console
  // then parent console
  //then constr of parent child
  //then then body of parent child
  // atlast component did mount will call, which is best used for api call

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("compDidMount");
    // }, 5000);
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    // console.log("compWillUnmount");
  }
  render() {
    return (
      <>
        <div>
          {console.log("render")}
          <h1>Hello, This is Food Hub About Page.</h1>
          <Profile name={"Sunny1"} />
        </div>
      </>
    );
  }
}

export default About;
