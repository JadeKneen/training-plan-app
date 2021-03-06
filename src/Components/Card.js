import React from "react";

function Card(props) {
  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0); //causes the delay so we can see which card we've selected to drag and then disappears
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
      <label className="textbox">
        <input
          className="textbox"
          type="text"
          placeholder="Type workout here"
          multiline="true"
        />
      </label>
    </div>
  );
}

export default Card;
