"use client";

import { Box, Title } from "@mantine/core";
import classes from "./easyAccess.module.css";
import { easyAccess } from "@/app/[locale]/constant/easy-access";
import Check from "@/app/[locale]/icons/check";
import Image from "next/image";
import phone from "@/public/images/accessView.png";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslations } from "next-intl";

export default function EasyAccess() {
  const matches = useMediaQuery("(min-width: 64em)");

  const t = useTranslations("sec_access");
  return (
    <Box className={classes.parentWrapper}>
      <Title className={classes.title}>{t("main")}</Title>

      <Box component="p" className={classes.description}>
        {t("subTitle")}
      </Box>

      {matches ? (
        <Box className={classes.accesContent}>
          <Image
            src={phone}
            alt="Cwallet the best user experience crypto wallet"
            className={classes.phoneImg}
          />
          <Box className={classes.leftSection}>
            {easyAccess.map((item) => {
              if (item.id % 2 !== 0) {
                return (
                  <Box
                    key={item.id}
                    className={`${classes.accessItem} ${classes.left}`}
                  >
                    <Check className={classes.coverimg} />
                    <Box component="p"> {t(`${item.description}`)}</Box>
                  </Box>
                );
              }
              return null;
            })}
          </Box>
          <Box className={classes.rightSection}>
            {easyAccess.map((item) => {
              if (item.id % 2 === 0) {
                return (
                  <Box
                    key={item.id}
                    className={`${classes.accessItem} ${classes.right}`}
                  >
                    <Check className={classes.coverimg} />
                    <Box component="p">{item.description}</Box>
                  </Box>
                );
              }
              return null;
            })}
          </Box>
        </Box>
      ) : (
        <Box className={classes.rightSection}>
          {easyAccess.map((item) => {
            return (
              <Box
                key={item.id}
                className={`${classes.accessItem} ${classes.left}`}
              >
                <Check className={classes.coverimg} />
                <Box component="p">{item.description}</Box>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
