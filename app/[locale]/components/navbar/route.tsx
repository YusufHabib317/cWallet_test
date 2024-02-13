"use client";

import { useState } from "react";
import { RouteT } from "@/app/[locale]/types/route-type";
import { Box, Menu } from "@mantine/core";

import classes from "./navbar.module.css";
import ArrowLeft from "@/app/[locale]/icons/navbar-arrow-left";
import { useTranslations } from "next-intl";

export default function Route(props: RouteT) {
  const { title, subMenu } = props;

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
            <Menu.Item
              leftSection={<Icon />}
              className={`${classes.menuItem} ${
                !isAvailable ? classes.cursorNotAllowed : classes.cursorDefault
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
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
}
