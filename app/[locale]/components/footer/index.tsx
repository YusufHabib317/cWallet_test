import { Box } from "@mantine/core";

import classes from "./footer.module.css";
import TopSec from "./top-section";
import BottomSec from "./bottom-sec";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Box className={classes.top}>
        <TopSec />
      </Box>
      <Box className={classes.bottom}>
        <BottomSec />
      </Box>
    </footer>
  );
}
