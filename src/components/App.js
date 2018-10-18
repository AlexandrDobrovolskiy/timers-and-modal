import React, { Component } from "react";
import Modal from "./utils/Modal";
import DoubleTimer from "./utils/DoubleTimer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal
          title="choose game avatar"
          trigger={actions => <button onClick={actions.open}>open me</button>}
        >
          Hello dude
        </Modal>
        <DoubleTimer localDuration={5000} globalDuration={5000}>
          {(resultOfThisShit) => (
            <div>
              Local: {resultOfThisShit.localTimeLeft} Global: {resultOfThisShit.globalTimeLeft}
              <button onClick={resultOfThisShit.run}>
                SUKA RABOTAI
              </button>
            </div>
          )}
        </DoubleTimer>
      </div>
    );
  }
}

export default App;
