import NavbarWalletGreen from "@/app/[locale]/icons/navbar-wallet-green";
import Swap from "@/app/[locale]/icons/navbar-swap";
import NavbarWalletGray from "@/app/[locale]/icons/navbar-wallet-gray";
import WebWallet from "@/app/[locale]/icons/navbar-wallet-gray";
import Stake from "@/app/[locale]/icons/navbar-stake";

import Cash from "@/app/[locale]/icons/navabr-cash";
import P2p from "@/app/[locale]/icons/navbar-p2p";

import TopBox from "@/app/[locale]/icons/navabr-top-box";
import Request from "@/app/[locale]/icons/navabr-request";
import AirDrop from "@/app/[locale]/icons/navabr-air-drop";
import Invoice from "@/app/[locale]/icons/navabr-invoice";
import GiveAway from "@/app/[locale]/icons/navabr-giveaway";
import PaymentBtn from "@/app/[locale]/icons/navabr-payment-btn";
import Bulk from "@/app/[locale]/icons/navabr-bulk";
import MobRefill from "@/app/[locale]/icons/navabr-mob-refill";

import ReferralBot from "@/app/[locale]/icons/navabr-referral-bot";
import SubBot from "@/app/[locale]/icons/navabr-subscription-bot";
import PriceAlertBot from "@/app/[locale]/icons/navabr-price-alert-bot";
import DaoBot from "@/app/[locale]/icons/navabr-dao-bot";
import GroupManBot from "@/app/[locale]/icons/navabr-group-mang-bot";
import Help from "@/app/[locale]/icons/navabr-help";
import Faq from "@/app/[locale]/icons/navbar-faqs";
import Blog from "@/app/[locale]/icons/navabr-blog";
import MediaKit from "@/app/[locale]/icons/navab-media-kit";
import ContactUs from "@/app/[locale]/icons/navab-contact-us";

import Telegram from "@/app/[locale]/icons/telegram";
import Discord from "@/app/[locale]/icons/discord";
import Twitter from "@/app/[locale]/icons/twitter";

export const routes = [
  {
    id: 1,
    title: "Wallets",
    subMenu: [
      {
        id: 1,
        title: "Non-Custodial Wallet",
        description: "Secured Crypto Management",
        icon: NavbarWalletGreen,
        isAvailable: true,
      },
      {
        id: 2,
        title: "Swap",
        description:
          "Exchange 300+ tokens with aggregated leading CEXs and DEXs",
        icon: Swap,
        isAvailable: true,
      },
      {
        id: 3,
        title: "Custodial Wallet",
        description: "Control Your Assets Anywhere",
        icon: NavbarWalletGray,
        isAvailable: true,
      },
      {
        id: 4,
        title: "Web Wallet",
        description: "Complete Flexibility of Online Assets Control",
        icon: WebWallet,
        isAvailable: true,
      },
      {
        id: 5,
        title: "Stake & Lend",
        description: "Up to 120% APY, earn valuable crypto daily",
        icon: Stake,
        isAvailable: false,
      },
    ],
  },
  {
    id: 2,
    title: "Buy & Sell",
    subMenu: [
      {
        id: 1,
        title: "Buy & Sell",
        description:
          "Fiat integration made easy, 150+ currencies & countries covered",
        icon: Cash,
        isAvailable: true,
      },
      {
        id: 2,
        title: "P2P Trading",
        description:
          "Easy P2P Trade, Low Threshold – Where Crypto & Fiat Flow Freely.",
        icon: P2p,
        isAvailable: true,
      },
    ],
  },

  {
    id: 2,
    title: "Tools",
    subMenu: [
      {
        id: 1,
        title: "Tip Box",
        description: "Receive crypto tips and payments anytime anywhere!",
        icon: TopBox,
        isAvailable: true,
      },
      {
        id: 2,
        title: "Request",
        description: "Request crypto payments, split bills anytime, anywhere",
        icon: Request,
        isAvailable: true,
      },
      {
        id: 3,
        title: "Airdrop Arena",
        description: "Free Crypto Games. Play to Earn Crypto",
        icon: AirDrop,
        isAvailable: true,
      },
      {
        id: 4,
        title: "Invoice",
        description: "One-stop management for your business bills",
        icon: Invoice,
        isAvailable: false,
      },
      {
        id: 5,
        title: "Giveaway",
        description: "Provably fair, draw winners with a verified task system",
        icon: GiveAway,
        isAvailable: true,
      },
      {
        id: 6,
        title: "Payment Button",
        description: "Accept Crypto Payments With Ease From Anywhere",
        icon: PaymentBtn,
        isAvailable: true,
      },
      {
        id: 7,
        title: "Bulk Payment",
        description:
          "Auto-payroll system. Send tokens to multiple receivers with 0 fee",
        icon: Bulk,
        isAvailable: true,
      },
      {
        id: 8,
        title: "Mobile Refills",
        description:
          "Easily top up your phone with crypto. Supports 50+ tokens",
        icon: MobRefill,
        isAvailable: true,
      },
    ],
  },
  {
    id: 2,
    title: "Bots",
    subMenu: [
      {
        id: 1,
        title: "Wallet Bot",
        description: "Send and Receive Crypto With A Single Command",
        icon: NavbarWalletGreen,
        isAvailable: true,
      },
      {
        id: 2,
        title: "Tip & Airdrop Bot",
        description: "Increase community engagement and activity",
        icon: AirDrop,
        isAvailable: true,
      },
      {
        id: 3,
        title: "Exchange Bot",
        description: "Swap Trending Tokens Instantly",
        icon: WebWallet,
        isAvailable: true,
      },
      {
        id: 4,
        title: "Referral Bot",
        description: "Enhanced Community Growth",
        icon: ReferralBot,
        isAvailable: true,
      },
      {
        id: 5,
        title: "Subscription Bot",
        description: "Crypto Monetization With Paid Membership",
        icon: SubBot,
        isAvailable: true,
      },
      {
        id: 6,
        title: "Price Alert Bot",
        description: "Get First-hand Market Rate and Price Changes",
        icon: PriceAlertBot,
        isAvailable: true,
      },
      {
        id: 7,
        title: "DAO Bot",
        description: "Access Control Through On-chain Holdings",
        icon: DaoBot,
        isAvailable: true,
      },
      {
        id: 8,
        title: "Group Management Bot",
        description: "Manage Group with Crypto",
        icon: GroupManBot,
        isAvailable: true,
      },
    ],
    social: [
      {
        id: 1,
        title: "Telegram",
        icon: Telegram,
      },
      {
        id: 2,
        title: "Discord",
        icon: Discord,
      },
      {
        id: 3,
        title: "Twitter",
        icon: Twitter,
      },
    ],
  },
  {
    id: 2,
    title: "Resources",
    subMenu: [
      {
        id: 1,
        title: "Help Center",
        description: null,
        icon: Help,
        isAvailable: true,
      },
      {
        id: 2,
        title: "FAQs",
        description: null,
        icon: Faq,
        isAvailable: true,
      },
      {
        id: 3,
        title: "Blog",
        description: null,
        icon: Blog,
        isAvailable: true,
      },
      {
        id: 4,
        title: "Media Kit",
        description: null,
        icon: MediaKit,
        isAvailable: true,
      },
      {
        id: 5,
        title: "Career",
        description: null,
        icon: MediaKit,
        isAvailable: true,
      },
      {
        id: 6,
        title: "Contact Us",
        description: null,
        icon: ContactUs,
        isAvailable: true,
      },
    ],
  },
];
