import { Anchor, Box, Flex, Stack, Title } from "@mantine/core";
import classes from "./social.module.css";
import Image from "next/image";
import telegram from "@/public/images/social/telegram.svg";
import twitter from "@/public/images/social/twitter.svg";
import twitch from "@/public/images/social/twitch.svg";
import discord from "@/public/images/social/discord.svg";
import youtube from "@/public/images/social/youtube.svg";
import instagram from "@/public/images/social/instagram.svg";
import ContentWithSwip from "./content-with-swip";

export default function Social() {
  return (
    <Box py={80} px={16}>
      <Stack justify="center" className={classes.parent}>
        <Title order={2}>
          Tip, Airdrop, and Earn Crypto with
          <Box component="span"> Cwallet Bots</Box> Through Your Social Media
        </Title>

        <Flex
          gap={10}
          px={100}
          justify={"space-between"}
          direction={{
            md: "row",
            base: "column",
          }}
        >
          <Box className={classes.link} component="a" mx={"auto"}>
            <Box>
              <Image src={telegram} alt="telegram" />
            </Box>
            <Box component="span">Telegram</Box>
          </Box>
          <Box className={classes.link} component="a" mx={"auto"}>
            <Box>
              <Image src={twitter} alt="Twitter" />
            </Box>
            <Box component="span">Twitter</Box>
          </Box>
          <Box className={classes.link} component="a" mx={"auto"}>
            <Box>
              <Image src={discord} alt="Discord" />
            </Box>
            <Box component="span">Discord</Box>
          </Box>
          <Box
            className={`${classes.link} ${classes.none}`}
            component="a"
            mx={"auto"}
          >
            <Box>
              <Image src={twitch} alt="twitch" />
            </Box>
          </Box>
          <Box
            className={`${classes.link} ${classes.none}`}
            component="a"
            mx={"auto"}
          >
            <Box>
              <Image src={youtube} alt="youtube" />
            </Box>
          </Box>
          <Box
            className={`${classes.link} ${classes.none}`}
            component="a"
            mx={"auto"}
          >
            <Box>
              <Image src={instagram} alt="Instagram" />
            </Box>
          </Box>
        </Flex>

        <ContentWithSwip />
      </Stack>
    </Box>
  );
}
