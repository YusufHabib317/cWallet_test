import classes from "./footer.module.css";

import telegram from "@/public/images/footer-social/teleram.svg";
import twitter from "@/public/images/footer-social/twitter.svg";
import discord from "@/public/images/footer-social/discord.svg";

import { Anchor, Box, Stack } from "@mantine/core";
import Image from "next/image";

export default function ProductList() {
  return (
    <Box className={`${classes.FooterItem} ${classes.hasChild}`}>
      <Box className={classes.subTitle}>Products</Box>
      <Box className={classes.subLinksList}>
        <Anchor
          className={`${classes.linkButton} ${classes.subItem}`}
          rel="noreferrer"
          target="_self"
          href="/custodial_wallet"
          underline={"never"}
        >
          <Box className={classes.subLabel}>Custodial Wallet</Box>
        </Anchor>
        <Anchor
          className={`${classes.linkButton} ${classes.subItem}`}
          rel="noreferrer"
          target="_self"
          href="/non_custodial_wallet"
          underline={"never"}
        >
          <Box className={classes.subLabel}>Non-Custodial Wallet</Box>
        </Anchor>
        <Anchor
          className={`${classes.linkButton} ${classes.subItem}`}
          rel="noreferrer"
          target="_self"
          href="/webwallet"
          underline={"never"}
        >
          <Box className={classes.subLabel}>Web Wallet</Box>
        </Anchor>
        <Anchor
          className={`${classes.linkButton} ${classes.subItem}`}
          rel="noreferrer"
          target="_blank"
          href="https://ccpayment.com"
          underline={"never"}
        >
          <Box component="span" className={classes.subLabel}>
            Payments
          </Box>
        </Anchor>
      </Box>

      <Box className="footer-child-item">
        <Box mt={32} mb={-10}>
          Bots
        </Box>
        <Stack className={classes.subLinksList} gap={0}>
          <Anchor
            className={`${classes.linkButton} ${classes.subItem}`}
            rel="nofollow"
            target="_blank"
            href="https://my.cwallet.com/bots/telegramBot"
            underline={"never"}
          >
            <Image
              src={telegram}
              className={classes.subIcon}
              alt=""
              width={50}
              height={50}
            />
            <Box component="span" className={classes.subLabel}>
              cctip_bot
            </Box>
          </Anchor>
          <Anchor
            className={`${classes.linkButton} ${classes.subItem}`}
            rel="nofollow"
            target="_blank"
            href="https://my.cwallet.com/bots/twitterBot"
            underline={"never"}
          >
            <Image
              src={twitter}
              className={classes.subIcon}
              alt=""
              width={50}
              height={50}
            />
            <Box component="span" className={classes.subLabel}>
              cctip_com
            </Box>
          </Anchor>
          <Anchor
            className={`${classes.linkButton} ${classes.subItem}`}
            rel="nofollow"
            target="_blank"
            href="https://my.cwallet.com/bots/discordBot"
            underline={"never"}
          >
            <Image
              src={discord}
              className={classes.subIcon}
              alt=""
              width={50}
              height={50}
            />
            <Box component="span" className={classes.subLabel}>
              CC Bot
            </Box>
          </Anchor>
        </Stack>
      </Box>
    </Box>
  );
}
