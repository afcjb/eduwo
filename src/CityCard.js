import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { Link, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function RecipeReviewCard({ data }) {
  const classes = useStyles();
  const { name } = data;
  let id = data.wikiDataId;
  let match = useRouteMatch();

  return (
    <Card className={classes.root}>
      <CardHeader title={name} disableTypography />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
      />
      <CardActions disableSpacing>
        <Link
          to={{ pathname: `${match.url}city/${id}`, aboutProps: { id } }}
          style={{ fontSize: 12 }}
        >
          Show More
        </Link>
      </CardActions>
    </Card>
  );
}
