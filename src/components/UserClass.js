import React from "react";
import { GITHUB_API } from "../utils/constant";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo: {
        name: "Dummy",
        login: "Dummy",
        location: "Dummy",
        avatar_url: "http://dummy-photo.com",
        },
    };
    //console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch(GITHUB_API);
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo: json,
    });
    //console.log(this.props.name + " Child Did Mount");
  }

  render() {
    const {name, login, location, avatar_url} = this.state.userInfo;
    //console.log(this.props.name + " Child Render");
    return (
      <div className="user-card">
        <img className="profile-pic" src={avatar_url}/>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>Contact: @{login}</h4>
      </div>
    );
  }
}

export default UserClass;
