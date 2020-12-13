import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = (params) => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Greg" />
      <CommentDetail author="Lucy" />
      <CommentDetail author="Jimmy" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
