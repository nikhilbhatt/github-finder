import React from "react";

const Memo = ({ msg }) => {
  console.log("rednse");
  return <div>Memo component {msg}</div>;
};
export default React.memo(Memo);
