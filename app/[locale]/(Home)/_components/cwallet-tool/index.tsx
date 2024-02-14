import { Box, Title } from "@mantine/core";
import classes from "./cwallet-tool.module.css";
import { useTranslations } from "next-intl";
import { tools } from "@/app/[locale]/constant/tool-item";

export default function CwalletTool() {
  const t = useTranslations("cWalletTool");

  return (
    <Box className={classes.parentWrapper}>
      <Title order={1}>{t("title")}</Title>

      <Box component="p">{t("subTitle")}</Box>

      <Box className={classes.toolsContent}>
        {tools.map((item, idx) => {
          const { title, sub, icon: Icon } = item;
          return (
            <Box key={idx} className={classes.toolItem}>
              <Box className={classes.toolItemImg}>
                <Icon />
              </Box>
              <Box className={classes.toolItemText}>
                <Title order={3}>{t(`${title}`)}</Title>
                <Box component="p">{t(`${sub}`)}</Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box component="p" className={classes.more}>
        {t("more")}
      </Box>
    </Box>
  );
}
