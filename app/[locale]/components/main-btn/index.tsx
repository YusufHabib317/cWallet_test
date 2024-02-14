import { Button } from "@mantine/core";
import classes from "./main-btn.module.css";
import { useTranslations } from "next-intl";

export default function MainBtn(props: { secType: string }) {
  const { secType } = props;
  const t = useTranslations(secType);
  return (
    <Button
      variant="filled"
      color="lime.4"
      size="md"
      radius="lg"
      c="gray.9"
      className={classes.startCwallet}
    >
      {t("main")}
    </Button>
  );
}
