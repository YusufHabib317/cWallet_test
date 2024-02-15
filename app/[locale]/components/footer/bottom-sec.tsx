import { Anchor, Box, Flex, Stack } from "@mantine/core";
import classes from "./footer.module.css";

export default function BottomSec() {
  return (
    <Box px={60}>
      <Stack align="center">
        <Flex gap={5}>
          <Anchor
            c={"gray.6"}
            fz={{
              sm: 14,
              base: 11,
            }}
          >
            Privacy Policy
          </Anchor>
          <Box c={"gray.6"}>|</Box>
          <Anchor
            c={"gray.6"}
            fz={{
              sm: 14,
              base: 11,
            }}
          >
            Terms of Service
          </Anchor>
          <Box c={"gray.6"}>|</Box>

          <Anchor
            c={"gray.6"}
            fz={{
              sm: 14,
              base: 11,
            }}
          >
            AML Policy
          </Anchor>
          <Box c={"gray.6"}>|</Box>

          <Anchor
            c={"gray.6"}
            fz={{
              sm: 14,
              base: 11,
            }}
          >
            Anti-Bot Policy
          </Anchor>
        </Flex>

        <Box
          c={"gray.6"}
          fz={{
            sm: 14,
            base: 11,
          }}
        >
          Copyright ©2024Cwallet. All rights reserved.
        </Box>

        <Box
          c={"gray.6"}
          fz={{
            sm: 14,
            base: 11,
          }}
          style={{
            textAlign: "center",
          }}
        >
          Cwallet Services are provided by Amonra UAB (registration no.
          306133544), with address at Atarchitektų g.56-101, Vilnius, Lithuania.
          Amonra UAB has been granted a Virtual Asset Service Provider (VASP)
          registration by the Registry of Legal Entities of the Republic of
          Lithuania and local Financial Intelligence Unit (FIU). The
          registration enables Amonra UAB to provide crypto asset exchange and
          custody services.
        </Box>

        <Box
          c={"gray.6"}
          fz={14}
          style={{
            textAlign: "center",
          }}
        >
          Hash AI Technology Limited <br /> address: Unit 321B, Building 1W,
          Hong Kong Science Park <br /> Certificate No. <br />{" "}
          72625632-000-02-23-7
        </Box>
      </Stack>
    </Box>
  );
}
