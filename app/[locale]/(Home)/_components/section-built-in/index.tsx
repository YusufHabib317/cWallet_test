import { Box, Flex, Title } from "@mantine/core";
import classes from "./built-in.module.css";
import Image from "next/image";
import builtInImg from "@/public/images/built-in.svg";
import { useTranslations } from "next-intl";
import LearnMore from "@/app/[locale]/components/learn-more-btn/learn-more";

export default function BuiltIn() {
  const t = useTranslations("builtIn");

  return (
    <Box py={80} px={16}>
      <Box className={classes.content}>
        <Box className={classes.leftSec}>
          <Box className={classes.ImgWrapper}>
            <Image src={builtInImg} alt="swap-img" />
          </Box>
        </Box>
        <Box className={classes.righttSec}>
          <Title order={2}>{t("title")}</Title>

          <Box component="p">{t("subTitle")}</Box>

          <Flex mt={50} className={classes.learnMore}>
            <LearnMore link="ttps://cwallet.com/webwallet" />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
