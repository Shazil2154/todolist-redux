import React from "react";
function Todoitem(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.item);
      }}
    >
      {props.item}
    </li>
  );
}
export default Todoitem;
