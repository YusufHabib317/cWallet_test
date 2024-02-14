"use client";

import LangArrow from "@/app/[locale]/icons/navabr-lang-arrow";
import { Accordion, ActionIcon, Box } from "@mantine/core";
import { useTranslations } from "next-intl";

const groceries = [
  {
    value: "What_does_Cwallet",
    description: "Cwallet",
  },
  {
    value: "What_are_network_fees",
    description: "Every",
  },
  {
    value: "What_if_I_accidentally",
    description: "Due",
  },
  {
    value: "Will_Cwallet_charge",
    description: "Besides",
  },
];

export default function FaqAccordion() {
  const t = useTranslations("faq");

  const items = groceries.map((item) => {
    const { value, description } = item;
    return (
      <Accordion.Item
        key={item.value}
        value={item.value}
        style={{
          background: "transparent",
          border: "none",
          borderBottom: "1px dashed black",
        }}
      >
        <Accordion.Control icon={null}>
          <Box fw={"bolder"} fz={20} lts={-0.25}>
            {t(value)}
          </Box>
        </Accordion.Control>
        <Accordion.Panel>{t(description)}</Accordion.Panel>
      </Accordion.Item>
    );
  });
  return (
    <Accordion variant="separated" chevron={<LangArrow />}>
      {items}
    </Accordion>
  );
}
