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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Security />
      <EasyAccess />
      <CombinedWallet />
      <SecMangment />
      <BlockChain />
      <BuiltIn />
      <CwalletTool />
      <Social />
      <FeedBack />
      <Faq />
    </>
  );
}
