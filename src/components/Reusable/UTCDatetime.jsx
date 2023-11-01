import { Typography } from "@mui/material";
import React from "react";
import { getUTCDatetime } from "../../utilities/DatetimeUtils";

const styles = {
  typography: {
    fontWeight: "400",
    fontSize: { xs: "10px", sm: "12px" },
    color: "rgba(255, 255, 255, .7)",
    lineHeight: 1,
    paddingRight: "2px",
    fontFamily: "Poppins",
  },
};

const UTCDatetime = () => {
  const utcFullDate = getUTCDatetime();
  const utcTimeValue = (
    <Typography variant="h3" component="h3" sx={styles.typography}>
      {utcFullDate} GMT
    </Typography>
  );
  return utcTimeValue;
};

export default UTCDatetime;
