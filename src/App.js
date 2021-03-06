import React from "react";
import Board from "./Components/Board";
import Card from "./Components/Card";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <main className="flexbox">
          <Board className="board" id="board-monday">
            <h2>Monday</h2>
            <Card
              className="card"
              id="card-1"
              draggable="true"
              deleteItem="true"
            ></Card>
          </Board>
          <Board className="board" id="board-tuesday">
            <h2>Tuesday</h2>
            <Card
              className="card"
              id="card-2"
              draggable="true"
              deleteItem="true"
            ></Card>
          </Board>
          <Board className="board" id="board-wednesday">
            <h2>Wednesday</h2>
            <Card
              className="card"
              id="card-3"
              draggable="true"
              deleteItem="true"
            ></Card>
          </Board>
          <Board className="board" id="board-thursday">
            <h2>Thursday</h2>
            <Card
              className="card"
              id="card-4"
              draggable="true"
              deleteItem="true"
            ></Card>
          </Board>
          <Board className="board" id="board-friday">
            <h2>Friday</h2>
            <Card
              className="card"
              id="card-5"
              draggable="true"
              deleteItem="true"
            ></Card>
          </Board>
          <Board className="board" id="board-saturday">
            <h2>Saturday</h2>
            <Card
              className="card"
              id="card-6"
              draggable="true"
              deleteItem="true"
            ></Card>
          </Board>
          <Board className="board" id="board-sunday">
            <h2>Sunday</h2>
            <Card
              className="card"
              id="card-7"
              draggable="true"
              deleteItem="true"
            ></Card>
          </Board>
        </main>
      </Container>
      <div>
        <button
          className="create-card-button"
          id="button"
          onClick={console.log("Hello World")}
        >
          Create card
        </button>
      </div>
    </div>
  );
}

export default App;
