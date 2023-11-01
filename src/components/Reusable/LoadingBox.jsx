import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  progress: {
    color: "rgba(255,255,255, .8)",
  },
};

export default function LoadingBox(props) {
  return (
    <Box sx={styles.box}>
      <CircularProgress sx={styles.progress} />
      {props.children}
    </Box>
  );
}
