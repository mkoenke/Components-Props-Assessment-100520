import React from "react";
import Note from "../Components/Note";

class NotesContainer extends React.Component {
  apiResponse = () => {
    return [
      { id: 1, content: "First Note" },
      { id: 2, content: "Second Note" },
      { id: 3, content: "Third Note" },
      { id: 4, content: "Fourth Note" },
    ];
  };

  eachNote = () => {
    return this.apiResponse().map((noteContent) => {
      return <Note note={noteContent} />;
    });
  };

  render() {
    return <ul>{this.eachNote()}</ul>;
  }
}

///-------------------------------

// let apiResponse = [
//   { id: 1, content: "First Note" },
//   { id: 2, content: "Second Note" },
//   { id: 3, content: "Third Note" },
//   { id: 4, content: "Fourth Note" },
// ];

// class NotesContainer extends React.Component {
//   apiResponse = () => {
//     return this.props.apiResponse.map(function (api) {
//       return <Note content={api.content} />;
//     });
//   };
//   render() {
//     console.log(this.props);
//     return <ul>{this.apiResponse()}</ul>;
//   }
// }

export default NotesContainer;
