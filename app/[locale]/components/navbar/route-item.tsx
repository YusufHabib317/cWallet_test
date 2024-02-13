"use client";

import { useState } from "react";
import { RouteT } from "@/app/[locale]/types/route-type";
import { Box, Flex, Menu } from "@mantine/core";

import classes from "./navbar.module.css";
import ArrowLeft from "@/app/[locale]/icons/navbar-arrow-left";
import { useTranslations } from "next-intl";

export default function RouteItem(props: RouteT) {
  const { title, subMenu, social } = props;

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const t_sub_routes = useTranslations(`subMenu_title.${title}`);

  return (
    <Menu
      trigger="hover"
      position="top"
      transitionProps={{ transition: "fade", duration: 150 }}
      shadow="lg"
      withinPortal
      width={600}
    >
      <Menu.Target>
        <Box className={classes.routLink}>{title}</Box>
      </Menu.Target>

      <Menu.Dropdown className={classes.dropdown}>
        {subMenu.map((item, idx) => {
          const { title, icon: Icon, isAvailable, description } = item;

          return (
            <>
              <Menu.Item
                leftSection={<Icon />}
                className={`${classes.menuItem} ${
                  !isAvailable
                    ? classes.cursorNotAllowed
                    : classes.cursorDefault
                }`}
                key={idx}
                disabled={!isAvailable}
                onMouseEnter={() => setHoveredItem(idx)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Box>
                  <Box component="h1" className={classes.contentBox_Title}>
                    {t_sub_routes(title)}
                  </Box>
                  <Box className={classes.contentBox_description}>
                    {description}
                  </Box>
                </Box>
                {isAvailable && hoveredItem === idx && (
                  <Box className={classes.arrowLeft}>
                    <ArrowLeft />
                  </Box>
                )}
              </Menu.Item>
            </>
          );
        })}

        {social ? (
          <>
            <Box className={classes.divider} />

            <Flex justify="space-between" w={"100%"} px={20} pb={10} mt={10}>
              {social.map((item, idx) => {
                const { id, title, icon: Icon } = item;

                return (
                  <Flex
                    key={idx}
                    align={"center"}
                    justify={"center"}
                    gap={10}
                    px={10}
                    className={classes.socialItem}
                  >
                    <Box>
                      <Icon />
                    </Box>
                    <Box className={classes.social_Title}>{title}</Box>
                  </Flex>
                );
              })}
            </Flex>
          </>
        ) : (
          ""
        )}
      </Menu.Dropdown>
    </Menu>
  );
}
