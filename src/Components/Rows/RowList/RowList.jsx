import React from "react";
import Row from "../Row/Row";
import requests from "../../Utils/requests";

const RowList = () => {
  return (
    <>
      <Row
      title="NETFLIX ORIGINALS"
      fetchURL={requests.fetchNetflixOriginals}/>
      {/* <Row />
      <Row />
      <Row /> */}
    </>
  );
};

export default RowList;
