import { Box, Flex, Title } from "@mantine/core";
import classes from "./secMang.module.css";
import Image from "next/image";
import crMangIm from "@/public/images/CryptoManagement.png";
import { useTranslations } from "next-intl";
import LearnMore from "@/app/[locale]/components/learn-more-btn/learn-more";

export default function SecMangment() {
  const t = useTranslations("sec_crMan");

  return (
    <Box className={classes.parentWrapper}>
      <Box className={classes.cryptoManagementContent}>
        <Box className={classes.leftSection}>
          <Box className={classes.imgWrapper}>
            <Image
              src={crMangIm}
              alt="Simple and secure crypto wallet, Online crypto wallet, Web crypto wallet"
              style={{
                width: "100%",
                objectFit: "contain",
                height: "100%",
              }}
            />
          </Box>
        </Box>

        <Box className={classes.rightSection}>
          <Title order={2}>{t("main")}</Title>

          <Box component="p">{t("subTitle")}</Box>

          <Flex mt={40}>
            <LearnMore link="https://cwallet.com/webwallet" />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
