"use client";

import { Box } from "@mantine/core";
import classes from "./combinedWallet.module.css";

import Switch from "@/app/[locale]/icons/switch";
import Swip from "./swip";
import LearnMore from "@/app/[locale]/components/learn-more-btn/learn-more";

export default function AnimateSec() {
  return (
    <>
      <Box className={`${classes.leftSection} ${classes.animationItem}`}>
        <Box className={classes.animationItemImg}>
          <Swip light />
        </Box>
        <LearnMore
          link="https://cwallet.com/non_custodial_wallet"
          title="Non-Custodial"
        />
      </Box>
      <Box>
        <Switch />
      </Box>
      <Box className={`${classes.rightSection} ${classes.animationItem}`}>
        <Box className={`${classes.animationItemImg} ${classes.right}`}>
          <Swip />
        </Box>
        <LearnMore
          link="https://cwallet.com/custodial_wallet"
          title="Custodial"
        />
      </Box>
    </>
  );
}
