import Link from "next/link";
import classes from "./learnMore.module.css";
import { Box, Stack } from "@mantine/core";
import LearnMoreArrow from "@/app/[locale]/icons/learn-more-arrow";
import { useTranslations } from "next-intl";

export default function LearnMore(props: { link: string; title?: string }) {
  const { link, title } = props;

  const t = useTranslations("learnMore");
  return (
    <Stack mt={40} className={classes.parent}>
      {title ? (
        <Box className={classes.learnMore_title} component="h5">
          {title}
        </Box>
      ) : (
        ""
      )}
      <Link href={link} className={classes.learnMore_link}>
        <Box component="span">
          {t("main")} <LearnMoreArrow className={classes.ArrowIcon} />
        </Box>
      </Link>
    </Stack>
  );
}
