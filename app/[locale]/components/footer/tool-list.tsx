import classes from "./footer.module.css";

import { Anchor, Box } from "@mantine/core";

const list = [
  {
    title: "Tip Box",
    href: "/custodial_wallet",
  },
  {
    title: "Tip Box",
    href: "/custodial_wallet",
  },
  {
    title: "Airdrop Arena",
    href: "/non_custodial_wallet",
  },
  {
    title: "Giveaway",
    href: "/webwallet",
  },
  {
    title: "Bulk Payment",
    href: "https://ccpayment.com",
  },
  {
    title: "Request",
    href: "https://ccpayment.com",
  },
  {
    title: "Mobile Refills",
    href: "https://ccpayment.com",
  },
  {
    title: "Payment Button",
    href: "https://ccpayment.com",
  },
  {
    title: "Invoice",
    href: "https://ccpayment.com",
  },
];

export default function ToolList() {
  return (
    <Box className={`${classes.FooterItem} ${classes.hasChild}`}>
      <Box className={classes.subTitle}>Tools</Box>
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
