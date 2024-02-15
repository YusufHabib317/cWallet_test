"use client";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import LogoCol from "@/public/images/logo-col";
import LogoRow from "@/public/images/logo-row";

import { Group, Box, Button, Modal, Stack, Divider } from "@mantine/core";

import Close from "@/app/[locale]/icons/x-close";
import Burger from "@/app/[locale]/icons/navab-burger";

import RouteItem from "./route-item";
import { routes } from "@/app/[locale]/constant/navbar-routes";

import { useTranslations } from "next-intl";

import classes from "./navbar.module.css";
import LangSelect from "./lang-select";
import MainBtn from "../main-btn";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setNavbarVisible(lastScrollTop > currentScrollPos || currentScrollPos < 10);

    setLastScrollTop(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastScrollTop]);

  const matches = useMediaQuery("(min-width: 64em)");

  const [opened, { open, close }] = useDisclosure(false);

  const t_main_routes = useTranslations("mainRoutes");

  return (
    <header>
      <Box className={`${classes.header} ${!navbarVisible && classes.hidden}`}>
        <Group className={classes.headerWrap} justify="space-between">
          {matches ? <LogoRow /> : <LogoCol />}

          {matches && (
            <Group justify="center">
              {routes.map((route, idx) => {
                return (
                  <Box key={idx}>
                    <RouteItem
                      title={t_main_routes(route.title)}
                      subMenu={route.subMenu}
                      social={route.social}
                      id={route.id}
                    />
                  </Box>
                );
              })}
            </Group>
          )}

          <Group pr={50}>
            <MainBtn secType="start_button" />

            {matches ? (
              <Box className={classes.lang}>
                <LangSelect />
              </Box>
            ) : (
              <Box style={{ cursor: "pointer" }} onClick={open}>
                <Burger />
              </Box>
            )}
          </Group>
        </Group>
      </Box>

      {!matches && (
        <Modal
          opened={opened}
          onClose={close}
          transitionProps={{ transition: "slide-left" }}
          overlayProps={{
            backgroundOpacity: 0,
          }}
          closeButtonProps={{
            icon: (
              <Box className={classes.close}>
                <Close />
              </Box>
            ),
          }}
          radius={20}
        >
          <Stack gap={40}>
            {routes.map((route, idx) => {
              return (
                <Box key={idx}>
                  <Box mb={10} fz={16} fw="bold" c={"gray.5"}>
                    {route.title}
                  </Box>

                  <Box className={classes.content}>
                    {route.subMenu.map((item) => {
                      const { title, icon: Icon, isAvailable, id } = item;
                      return (
                        <Box
                          className={classes.item}
                          key={id}
                          style={{
                            cursor: !isAvailable ? "not-allowed" : "default",
                            filter: !isAvailable ? "grayscale(100%)" : "",
                          }}
                        >
                          <Icon />
                          <Box
                            component="h1"
                            className={classes.modal_item_title}
                          >
                            {title}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                  <Divider mt={15} />
                </Box>
              );
            })}
          </Stack>
        </Modal>
      )}
    </header>
  );
}
