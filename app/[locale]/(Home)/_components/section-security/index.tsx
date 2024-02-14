import { Box, Flex, Title } from "@mantine/core";
import classes from "./security.module.css";
import { security } from "@/app/[locale]/constant/security";
import { useTranslations } from "next-intl";

export default function Security() {
  const t = useTranslations("sec_title");

  return (
    <Box className={classes.parentWrapper}>
      <Title className={classes.title}>{t("main")}</Title>

      <Box className={classes.subTitle}>{t("subTitle")}</Box>

      <Box className={classes.content}>
        {security.map((item, idx) => {
          const { title, img: Icon } = item;
          return (
            <Box key={idx}>
              <Icon className={classes.icon} />
              <Box component="h3" className={classes.itemTitle}>
                {t(`${title}`)}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
