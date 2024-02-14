import { Box } from "@mantine/core";
import classes from "./combinedWallet.module.css";
import TopSec from "./top-sec";
import BotSec from "./bot-sec";
import AnimateSec from "./animate-sec";

export default function CombinedWallet() {
  return (
    <Box className={classes.parentWrapped}>
      <Box className={classes.topSec}>
        <Box className={classes.topSec_content}>
          <TopSec />
        </Box>
      </Box>
      <Box>
        <Box className={classes.animationSec}>
          <AnimateSec />
        </Box>
      </Box>

      <Box className={classes.bottomSec}>
        <BotSec />
      </Box>
    </Box>
  );
}
