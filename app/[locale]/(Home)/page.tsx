import SecMangment from "./_components/section-mangemnt";
import CombinedWallet from "./_components/section-combined-wallet";
import EasyAccess from "./_components/section-easy-access";
import Hero from "./_components/section-hero";
import Security from "./_components/section-security";
import BlockChain from "./_components/section-block-chain";
import BuiltIn from "./_components/section-built-in";
import CwalletTool from "./_components/cwallet-tool";
import FeedBack from "./_components/feed-back";
import Faq from "./_components/faq";
import Social from "./_components/section-social";

import dynamic from "next/dynamic";

const DHero = dynamic(
  () => import("@/app/[locale]/(Home)/_components/section-hero"),
  {
    ssr: false,
  }
);
const DSecurity = dynamic(
  () => import("@/app/[locale]/(Home)/_components/section-security"),
  {
    ssr: false,
  }
);
const DEasyAccess = dynamic(
  () => import("@/app/[locale]/(Home)/_components/section-easy-access"),
  {
    ssr: false,
  }
);
const DCombinedWallet = dynamic(
  () => import("@/app/[locale]/(Home)/_components/section-combined-wallet"),
  {
    ssr: false,
  }
);
const DSecMangment = dynamic(
  () => import("@/app/[locale]/(Home)/_components/section-mangemnt"),
  {
    ssr: false,
  }
);
const DBlockChain = dynamic(
  () => import("@/app/[locale]/(Home)/_components/section-block-chain"),
  {
    ssr: false,
  }
);
const DBuiltIn = dynamic(
  () => import("@/app/[locale]/(Home)/_components/section-built-in"),
  {
    ssr: false,
  }
);
const DCwalletTool = dynamic(
  () => import("@/app/[locale]/(Home)/_components/cwallet-tool"),
  {
    ssr: false,
  }
);
const DSocial = dynamic(
  () => import("@/app/[locale]/(Home)/_components/section-social"),
  {
    ssr: false,
  }
);
const DFeedBack = dynamic(
  () => import("@/app/[locale]/(Home)/_components/feed-back"),
  {
    ssr: false,
  }
);
const DFaq = dynamic(() => import("@/app/[locale]/(Home)/_components/faq"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <DHero />
      <DSecurity />
      <DEasyAccess />
      <DCombinedWallet />
      <DSecMangment />
      <DBlockChain />
      <DBuiltIn />
      <DCwalletTool />
      <DSocial />
      <DFeedBack />
      <DFaq />
    </>
  );
}
