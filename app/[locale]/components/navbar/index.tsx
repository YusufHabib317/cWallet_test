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

export default function Navbar() {
  const matches = useMediaQuery("(min-width: 56.25em)");

  const [opened, { open, close }] = useDisclosure(false);

  const t_main_routes = useTranslations("mainRoutes");
  const t_start_button = useTranslations("start_button");

  return (
    <header>
      <Box className={classes.header}>
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
                      id={route.id}
                    />
                  </Box>
                );
              })}
            </Group>
          )}

          <Group pr={50}>
            <Button
              variant="filled"
              color="lime.4"
              size="md"
              radius="lg"
              c="gray.9"
              className={classes.startCwallet}
            >
              {t_start_button("main")}
            </Button>

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
