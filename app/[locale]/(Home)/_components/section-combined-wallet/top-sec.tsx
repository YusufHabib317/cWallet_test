import { Box, Title } from "@mantine/core";
import classes from "./combinedWallet.module.css";

export default function TopSec() {
  return (
    <>
      <Box className={classes.boxItem}>
        <Box component="h3">37M+</Box>
        <Box component="p">Users</Box>
      </Box>
      <Box className={classes.boxItem}>
        <Box component="h3">53</Box>
        <Box component="p">Networks</Box>
      </Box>
      <Box className={classes.boxItem}>
        <Box component="h3">580M+</Box>
        <Box component="p">Transactions</Box>
      </Box>
    </>
  );
}
