import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      // Route to wherever you want!
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  return (
    <>
      <Grid
        class="login"
        textAlign="center"
        style={{
          height:"100vh",
          backgroundColor: 'black',

      }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header  as="h1" color="teal" textAlign="center">
            <Image class="image" src="data:image/jpeg;base64,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" ></Image>
          </Header>
          <Message
              attached
              color="blue"
              header='Welcome Car enthusiasts!'
              content='Welcome to Auto Show where you can post your favorite cars when you visit Car Shows!'/>
              <br />
          <Form inverted autoComplete="off" onSubmit={handleSubmit} >
            <Segment inverted>
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Button animated='fade' fluid type="submit" className="btn" size="large">
                <Button.Content visible>Log In</Button.Content>
                <Button.Content hidden>Click Here</Button.Content>
              </Button>
            </Segment>
          </Form>
          <Message color="black" as="h1" size="large">
            New to us?   <Link to="/signup">Sign Up</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>
    </>
  );
}

