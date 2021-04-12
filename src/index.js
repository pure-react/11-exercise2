import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Home extends React.Component {
  state = {
    rooms: { kitchen: true, bathroom: false, livingRoom: true, bedroom: false },
  };

  handleAction = (name) => {
    this.setState({
      rooms: {
        ...this.state.rooms,
        [name]: !this.state.rooms[name],
      },
    });
  };
  render() {
    return (
      <div className="home">
        <div className="header-home">HOME</div>
        <div className="room-container">
          <Room
            name="kitchen"
            rooms={this.state.rooms}
            onAction={this.handleAction}
          />
          <Room
            name="bathroom"
            rooms={this.state.rooms}
            onAction={this.handleAction}
          />
          <Room
            name="livingRoom"
            rooms={this.state.rooms}
            onAction={this.handleAction}
          />
          <Room
            name="bedroom"
            rooms={this.state.rooms}
            onAction={this.handleAction}
          />
        </div>
      </div>
    );
  }
}

function Room({ name, rooms, onAction }) {
  console.log(rooms);
  return (
    <div className="room">
      <div className="room-name">{name}</div>
      <div className="room-ligth">{rooms[name] ? "TURN ON" : "TURN OFF"}</div>
      <button className="room-switch" onClick={() => onAction(name)}>
        LIGTH
      </button>
    </div>
  );
}

ReactDOM.render(<Home />, document.querySelector("#root"));
