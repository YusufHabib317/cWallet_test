import { Box, Flex } from "@mantine/core";
import classes from "./footer.module.css";
import { Android, AppStore, GooglePlay, WebWallet } from "../../icons/footer";

export default function DownloadBtns() {
  return (
    <Flex
      gap={20}
      w={"100%"}
      justify={"center"}
      my={20}
      style={{
        margin: "0 auto",
      }}
      direction={{
        sm: "row",
        base: "column",
      }}
      mx={"auto"}
      align={"center"}
    >
      <AppStore />
      <GooglePlay />
      <Android />
      <WebWallet />
    </Flex>
  );
}
