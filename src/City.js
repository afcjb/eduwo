import React, { useEffect } from "react";
import { getDetails } from "./redux/actions";
import loading from "./loading";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const City = (props) => {
  const { id } = useParams();
  useEffect(() => {
    loading();
    props.dispatch(getDetails(id));
  }, []);


  return <div></div>;
};

export default connect(null, null)(City);
