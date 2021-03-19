import React from "react";

import { createStyles, makeStyles, Paper } from "@material-ui/core";

import Footer from "../components/common/footer";
import Header from "../components/common/header";
import HomeComponent from "../components/home/home-component";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
      borderRadius: 0,
      backgroundColor: "#ffffff",
    },
    top: {
      overflow: "hidden",
    },
  })
);

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.top}>
      <Header/>
      <Paper className={classes.root}>
        <HomeComponent />
      </Paper>
      <Footer />
    </div>
  );
};

export default Home;
