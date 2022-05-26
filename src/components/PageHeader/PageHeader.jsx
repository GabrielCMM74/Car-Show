import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

export default function PageHeader({ user, handleLogout }) {
    console.log(user, 'user in header')
  return (
    <Segment style={{ 
      backgroundImage:  "url(" + "https://miro.medium.com/max/768/0*_pG4sF5hbeR702n-.jpg" + ")"
      
      }} clearing>
      <Header as="h2" floated="right">
        <Link to="/" >
          <Icon color="red" name="car"></Icon>
        </Link>
        <Link to="" onClick={handleLogout}><Icon color="green" name="log out"></Icon> 
        </Link>
      </Header>
      <Header as="h2" floated="left">
        <Link to="/">
          <Image
            src={
              user?.photoUrl
                ? user?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar
          ></Image>
        </Link>
      </Header>
    </Segment>
  );
}

