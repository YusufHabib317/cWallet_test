import { Box, Flex, Group, Stack, Title } from "@mantine/core";
import classes from "./hero.module.css";
import Image from "next/image";

import heroImg from "@/public/images/hero.webp";
import hero_big from "@/public/images/heroImg.big.png";
import {
  AppStore,
  GooglePlay,
  Android,
  WebWallet,
} from "@/app/[locale]/icons/hero-sec/icons";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero_title");

  return (
    <Box pt={90} className={classes.parentWrapper}>
      <Box className={classes.parent}>
        <Box className={classes.contentWrapper} />
        <Box className={classes.content}>
          <Box>
            <Box className={classes.top_section}>
              <Title component="h1">{t("main")}</Title>

              <Box>
                <Box className={classes.cover_img}>
                  <Box component="span" className={classes.imgBox}>
                    <Image src={heroImg} alt="hero" className={classes.img} />
                  </Box>
                </Box>

                <Box component="p" className={classes.description}>
                  {t("subTitle")}
                </Box>

                <Box className={classes.btnDownloadWrapper}>
                  <Stack>
                    <Flex justify={"center"} gap={20}>
                      <AppStore />
                      <GooglePlay />
                    </Flex>
                    <Flex justify={"center"} gap={20}>
                      <Android />
                      <WebWallet />
                    </Flex>
                  </Stack>
                </Box>

                <Box className={classes.trusted}>
                  Trusted by millions and growing...
                </Box>

                <Box className={classes.imgSection}>
                  <Image
                    src={hero_big}
                    alt="Easy access to a secure, convenient, and flexible crypto wallet"
                    className={classes.img}
                    objectFit="cover"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
