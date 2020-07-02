import React from "react";
import axios from "axios";
import { AuthConsumer } from "../providers/AuthProvider";

class FetchUser extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    console.log("mounted");
    const {
      auth: { authenticated, setUser },
    } = this.props;
    if (authenticated) {
      this.setState({ loaded: true });
      return;
    }
    if (localStorage.getItem("access-token")) {
      axios
        .get("/api/auth/validate_token")
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((err) => {
          this.setState({ loaded: true });
        });
      return;
    }
    this.setState({ loaded: true });
  }

  render() {
    return this.state.loaded ? this.props.children : null;
  }
}

export default class ConnectedFetchUser extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {(auth) => <FetchUser {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}