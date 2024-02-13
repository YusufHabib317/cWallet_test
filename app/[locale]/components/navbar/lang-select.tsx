import { locales } from "@/i18n";
import { Box, Flex, Menu, Stack } from "@mantine/core";
import { useLocale } from "next-intl";
import LangArrow from "@/app/[locale]/icons/navabr-lang-arrow";
import { Link } from "@/navigation";
import classes from "./navbar.module.css";

export default function LangSelect() {
  const local = useLocale();

  return (
    <Menu
      trigger="hover"
      position="top"
      transitionProps={{ transition: "fade", duration: 150 }}
      shadow="lg"
      withinPortal
      width={100}
    >
      <Menu.Target>
        <Flex fw={"bold"} gap={7} align={"center"}>
          {local}

          <LangArrow />
        </Flex>
      </Menu.Target>

      <Menu.Dropdown className={classes.lang_menu} p={10}>
        {locales?.map((lang, idx) => {
          return (
            <Stack key={idx}>
              <Link href="/" locale={lang} className={classes.lang_item}>
                {lang}
              </Link>
            </Stack>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
}
