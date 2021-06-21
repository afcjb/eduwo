import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CityCard from "./CityCard.js";
import _ from "lodash";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import loading from "./loading";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid({ data }) {
  const classes = useStyles();
  const len = data ? data.length : 10;
  const spawnTen = () => {
    const gridArray = [];
    for (let i = 0; i < len; i++) {
      gridArray.push(
        <Grid key={_.uniqueId()} item sm={3}>
          {data ? <CityCard data={data[i]}></CityCard> : loading()}
        </Grid>
      );
    }
    return gridArray;
  };

  return (
    <div
      className={`${classes.root} container-fluid mt-4 gradient`}
      style={{ minHeight: 450 }}
    >
      <Grid container spacing={3}>
        {spawnTen()}
      </Grid>
    </div>
  );
}
