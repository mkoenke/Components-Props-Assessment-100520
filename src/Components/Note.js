import React from "react";

function Note(props) {
  //   console.log(this.props);
  return <li>{props.note.content}</li>;
}

export default Note;
