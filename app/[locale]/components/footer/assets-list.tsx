import classes from "./footer.module.css";

import { Anchor, Box } from "@mantine/core";

const list = [
  {
    title: "Bitcoin (BTC)",
    href: "/",
  },
  {
    title: "Ethereum (ETH)",
    href: "/",
  },
  {
    title: "Binance Coin (BNB)",
    href: "/",
  },
  {
    title: "Litecoin (LTC)",
    href: "/",
  },
  {
    title: "Ripple (XRP)",
    href: "",
  },
  {
    title: "Dogecoin (DOGE)",
    href: "/",
  },
  {
    title: "Polkadot (DOT)",
    href: "/",
  },
  {
    title: "Dash (DASH)",
    href: "/",
  },
  {
    title: "TRON (TRX)",
    href: "/",
  },
  {
    title: "Cosmos (ATOM)",
    href: "/",
  },
  {
    title: "Stellar (XLM)",
    href: "/",
  },
  {
    title: "Load more",
    href: "/",
  },
];

export default function AssestList() {
  return (
    <Box className={`${classes.FooterItem} ${classes.hasChild}`}>
      <Box className={classes.subTitle}>Assets</Box>
      {list.map((item, idx) => {
        return (
          <Box className={classes.subLinksList} key={idx}>
            <Anchor
              className={`${classes.linkButton} ${classes.subItem}`}
              rel="noreferrer"
              target="_self"
              href={item.href}
              underline={"never"}
            >
              <Box className={classes.subLabel}>{item.title}</Box>
            </Anchor>
          </Box>
        );
      })}
    </Box>
  );
}
