import React from "react";
import {LOAD_MESSAGE} from '../../Constants'

const Loader = () => {
  return (
    <div className="loader">
      <h1>{LOAD_MESSAGE}</h1>
    </div>
  );
};

export default Loader;
