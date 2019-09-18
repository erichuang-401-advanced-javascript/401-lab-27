import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Counter from "./counter/counter";

import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
