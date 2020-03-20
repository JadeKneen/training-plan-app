import React from 'react';

function Board(props) {
    
    const drop = e => {
      e.preventDefault();
      const card_id = e.dataTransfer.getData("card_id"); //research local storage
  
      const card = document.getElementById(card_id);
      card.style.display = "block"; //need the card to be hidden while it's being dragged
  
      e.target.appendChild(card); //drops card into element
    };
  
    //if we drop it before it's been dragged nothing happens or breaks
    const dragOver = e => {
      e.preventDefault();
    };
  
    return (
      <div
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
      >
        {props.children}
      </div>
    );
  }
  
  export default Board;