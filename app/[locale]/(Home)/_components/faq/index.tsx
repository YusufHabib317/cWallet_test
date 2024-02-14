import { Box, Title } from "@mantine/core";
import classes from "./faq.module.css";
import FaqAccordion from "./faq-accordion";

export default function Faq() {
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.parent}>
        <Title order={1}>FAQ</Title>

        <Box className={classes.contentBox}>
          <FaqAccordion />
        </Box>
      </Box>
    </Box>
  );
}
