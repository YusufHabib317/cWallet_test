import classes from "./footer.module.css";

import { Anchor, Box } from "@mantine/core";

import message from "@/public/images/footer-social/message.svg";
import Image from "next/image";

const topList = [
  {
    title: "Help Center",
    href: "/",
  },
  {
    title: "FAQs",
    href: "/",
  },
  {
    title: "Live Support",
    href: "/",
  },
];
const bottomList = [
  {
    title: "business@cwallet.com",
    href: "/",
  },
  {
    title: "marketing@cwallet.com",
    href: "/",
  },
];

export default function SupportList() {
  return (
    <Box className={`${classes.FooterItem} ${classes.hasChild}`}>
      <Box className={classes.subTitle}>Support</Box>
      {topList.map((item, idx) => {
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
      <Box className={classes.subTitle} mt={10}>
        Contact Us
      </Box>
      {bottomList.map((item, idx) => {
        return (
          <Box className={classes.subLinksList} key={idx}>
            <Anchor
              className={`${classes.linkButton} ${classes.subItem}`}
              rel="noreferrer"
              target="_self"
              href={item.href}
              underline={"never"}
            >
              <Box
                component="span"
                style={{
                  width: "3px",
                  height: "3px",
                  margin: "0 0px 0 0",
                }}
              >
                <Image src={message} alt="email" objectFit="cover" />
              </Box>
              <Box component="span" className={classes.subLabel}>
                {item.title}
              </Box>
            </Anchor>
          </Box>
        );
      })}
    </Box>
  );
}
