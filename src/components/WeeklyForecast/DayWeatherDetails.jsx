import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const styles = {
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: { xs: "12px", sm: "20px", md: "32px" },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeight: { xs: "400", sm: "600" },
    fontSize: { xs: "12px", sm: "13px", md: "14px" },
    color: "white",
    lineHeight: 1,
    height: "31px",
    alignItems: "center",
    display: "flex",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "31px",
  },
  boxImg: {
    width: { xs: "24px", sm: "28px", md: "31px" },
    height: "auto",
    marginRight: "4px",
  },
  typographyH4: {
    fontSize: { xs: "12px", md: "14px" },
    color: "rgba(255,255,255, .8)",
    lineHeight: 1,
    fontFamily: "Roboto Condensed",
  },
};

const DayWeatherDetails = (props) => {
  return (
    <Grid container sx={styles.grid}>
      <Typography xs={12} sx={styles.typography}>
        {props.day}
      </Typography>
      <Box xs={12} sx={styles.box}>
        <Box component="img" sx={styles.boxImg} alt="weather" src={props.src} />
        <Typography variant="h4" component="h4" sx={styles.typographyH4}>
          {props.description}
        </Typography>
      </Box>
    </Grid>
  );
};

export default DayWeatherDetails;
