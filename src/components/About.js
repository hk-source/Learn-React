import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <UserClass name={"Kamran (Class)"} />
        <h1>This is About Us page</h1>
      </div>
    );
  }
}

{
  /*
const About = () => {
  return (
    <div>
      <UserClass name={"Kamran (Class)"} />
      <h1>This is About Us page</h1>
    </div>
  );
};
*/
}

export default About;
