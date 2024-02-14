import { Box, Title } from "@mantine/core";
import classes from "./block-chain.module.css";
import MainBtn from "@/app/[locale]/components/main-btn";

export default function BlockChain() {
  return (
    <Box className={classes.parentWrapper}>
      <Box className={classes.content}>
        <Box className={classes.leftSec}>
          <Title order={2}>
            <Box component="span">50+</Box> blockchains,
          </Title>

          <Title order={2}>
            <Box component="span">800+</Box> Major cryptocurrencies
          </Title>

          <Box component="p">and growing</Box>

          <MainBtn secType="viewAll" />
        </Box>
        <Box className={classes.rightSec}></Box>
      </Box>
    </Box>
  );
}
