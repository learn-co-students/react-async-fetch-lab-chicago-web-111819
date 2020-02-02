
import React, {Component} from "react";

export default class App extends Component {
  state = {
    dev: "Dut A.",
    langs: ["JS", "Java", "Ruby"],
    people: []
  }

  componentDidMount() {
    let url = "http://api.open-notify.org/astros.json";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let p = data.people;
        this.setState({people: p})
      });
  }

  render() {
    return (
      <div>
        Asynchronous React ( <span style={{color: "red"}}>fetch()</span> in <span style={{color: "blue"}}>componentDidMount()</span> ).
      </div>
    );
  }

}
