import { Box, Typography } from "@mui/material";
import React from "react";

const styles = {
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
  },
  typographyH3: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: { xs: "12px", sm: "14px", md: "16px" },
    color: "white",
    textTransform: "uppercase",
    lineHeight: 1,
    marginBottom: "8px",
  },
  typographyH4: {
    fontSize: { xs: "10px", sm: "12px", md: "14px" },
    color: "rgba(255,255,255, .7)",
    lineHeight: 1,
    letterSpacing: { xs: "1px", sm: "0" },
    fontFamily: "Roboto Condensed",
  },
};

const CityDateDetail = (props) => {
  return (
    <Box sx={styles.box}>
      <Typography variant="h3" component="h3" sx={styles.typographyH3}>
        {props.city}
      </Typography>
      <Typography variant="h4" component="h4" sx={styles.typographyH4}>
        Today {props.date}
      </Typography>
    </Box>
  );
};

export default CityDateDetail;
