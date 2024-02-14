import { Box, Button, Title } from "@mantine/core";

import classes from "./feed-back.module.css";
import { useTranslations } from "next-intl";
import Brush from "@/app/[locale]/icons/sec-feed-back/brush";

export default function FeedBack() {
  const t = useTranslations("feedBack");
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.parent}>
        <Box className={classes.contentBox}>
          <Title order={1}>{t("title")}</Title>

          <p>{t("sub")}</p>
          <Button
            py={0}
            px={24}
            bg={"#fff"}
            h={40}
            radius={20}
            c={"#000"}
            fw={600}
            fz={18}
            lh={40}
          >
            {t("btn")}
          </Button>
        </Box>

        <Box className={`${classes.bg} ${classes.right}`}>
          <Brush />
        </Box>
      </Box>
    </Box>
  );
}
