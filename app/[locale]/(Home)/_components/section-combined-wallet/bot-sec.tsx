import { useTranslations } from "next-intl";
import classes from "./combinedWallet.module.css";
import { Box, Title } from "@mantine/core";

export default function BotSec() {
  const t = useTranslations("sec_combined");

  return (
    <Box className={classes.switchWalletContent}>
      <Title className={classes.title}>{t("main")}</Title>

      <Box component="p" className={classes.description}>
        {t("subTitle")}
      </Box>

      <Box component="h2" className={classes.manTitle}>
        Manage Multiple
        <Box component="span" px={5}>
          Custodial
        </Box>
        and
        <Box component="span" px={5}>
          Non-custodial
        </Box>{" "}
        wallets under
        <Box component="span" px={5}>
          One App
        </Box>
      </Box>

      <Box component="h3" className={classes.h3}>
        smoothly switch betweenwallets under
        <Box component="span" px={5}>
          accounts
        </Box>
      </Box>

      <Box component="h4" className={classes.h4}>
        {t("lastTitle")}
      </Box>
    </Box>
  );
}
