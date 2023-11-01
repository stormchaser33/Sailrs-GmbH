import { Box, Typography } from "@mui/material";
import React from "react";
import { weatherIcon } from "../../../utilities/IconsUtils";

const styles = {
  box: {
    background:
      "linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%",
    borderRadius: "8px",
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    textAlign: "center",
    padding: "4px 0",
    width: "100%",
  },
  typographyH3: {
    fontWeight: "400",
    fontSize: { xs: "10px", sm: "12px" },
    color: "rgba(255, 255, 255, .7)",
    lineHeight: 1,
    padding: "4px",
    fontFamily: "Poppins",
  },
  boxFlex: {
    display: "flex",
    alignItems: "center",
    color: "white",
    padding: "4px",
  },
  boxImg: {
    width: { xs: "36px", sm: "42px" },
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    margin: "0 auto",
  },
  typographyH3Two: {
    fontWeight: "600",
    fontSize: { xs: "12px", sm: "14px" },
    color: "white",
    textTransform: "uppercase",
    lineHeight: 1,
    marginBottom: { xs: "8px", md: "0" },
    fontFamily: "Poppins",
  },
};

const DailyForecastItem = (props) => {
  return (
    <Box sx={styles.box}>
      <Typography variant="h3" component="h3" sx={styles.typographyH3}>
        {props.item.time}
      </Typography>
      <Box sx={styles.boxFlex}>
        <Box
          component="img"
          sx={styles.boxImg}
          alt="weather"
          src={weatherIcon(`${props.data.weather[0].icon}.png`)}
        />
      </Box>
      <Typography variant="h3" component="h3" sx={styles.typographyH3Two}>
        {props.item.temperature}
      </Typography>
    </Box>
  );
};

export default DailyForecastItem;
