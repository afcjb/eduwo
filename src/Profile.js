import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import sleepyFace from "./utils/sleepyface.jpg";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    maxWidth: 200,
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <span
        onMouseOver={handleClick}
        style={{ cursor: "pointer", color: "white" }}
      >
        My Profile
      </span>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <img
          src={sleepyFace}
          alt="Avatar"
          className="img-fluid max-width: 100% height:auto width: 100% \9 rounded mx-auto d-block"
          style={{ maxHeight: 100, maxWidth: 100 }}
        ></img>
        <div className="mt-4 ml-2">
          {`Front-end Developer interested in Technology, finance and investments`}
        </div>
      </StyledMenu>
    </div>
  );
}
