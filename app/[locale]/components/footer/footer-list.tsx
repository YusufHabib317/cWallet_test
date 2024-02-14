import { Box } from "@mantine/core";
import classes from "./footer.module.css";
import ToolList from "./tool-list";
import ProductList from "./product-list";
import AssestList from "./assets-list";
import SupportList from "./support-list";

export default function FooterList() {
  return (
    <Box className={classes.footerList}>
      <ProductList />
      <ToolList />
      <AssestList />
      <SupportList />
    </Box>
  );
}
