"use client";

import { Box, Flex } from "@mantine/core";
import classes from "./footer.module.css";
import FooterLogo from "../../icons/footer-logo";
import { useTranslations } from "next-intl";
import { footerSocial } from "../../constant/footer";
import Image from "next/image";
import { useState } from "react";
import FooterList from "./footer-list";

export default function TopSec() {
  const t = useTranslations("footer");

  const [hoverId, setHoverId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoverId(id);
  };
  const handleMouseLeave = () => {
    setHoverId(null);
  };

  return (
    <Box className={classes.footer}>
      <Box className={classes.footerLeft}>
        <Box className={classes.footerLeftLogo}>
          <FooterLogo />
        </Box>

        <Box component="p" className={classes.text}>
          {t("desc")}
        </Box>
        <Flex className={classes.platForm} w={"100%"} gap={18} mt={20}>
          {footerSocial.map((item, idx) => {
            const { icon, title, hex, id } = item;
            return (
              <Box
                key={idx}
                className={classes.imgParent}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  backgroundColor: id === hoverId ? hex : "",
                }}
              >
                <Image src={icon} alt={title} />
              </Box>
            );
          })}
        </Flex>
      </Box>

      <FooterList />
    </Box>
  );
}
