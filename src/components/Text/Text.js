import React from "react";

const Text = (props) => {
  return (
    <div>
      <h1 className={"text-success"}>{props.message}</h1>
    </div>
  );
};

export default Text;
