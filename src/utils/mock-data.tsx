import {
  BBallIcon,
  CryptoIcon,
  GiftCardIcon,
  GiftIcon,
  HomeIcon,
  LinkIcon,
  RateCardIcon,
  RewardIcon,
  SettingIcon,
  TransactionIcon,
  WalletIcon,
  WifiIcon,
  WifiPhoneIcon,
} from "../assets/svg";
import { ITransaction } from "../types";
import { TransactionStatus, TransactionType } from "./enum";

export const menus = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    name: "Giftcard",
    link: "/gift-card",
    icon: <GiftIcon />,
  },
  {
    name: "Bill Payment",
    link: "/bill-payment",
    icon: <WifiIcon />,
  },
  {
    name: "Wallet",
    link: "/wallet",
    icon: <WalletIcon />,
  },
  {
    name: "Transaction",
    link: "/transaction",
    icon: <TransactionIcon />,
  },
  {
    name: "Rewards",
    link: "/rewards",
    icon: <RewardIcon />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <SettingIcon />,
  },
];

export const paymentOptions = [
  {
    name: "Giftcard",
    details: "Trade giftcards easily and fast.",
    color: "#07B4D3",
    icon: <GiftCardIcon />,
  },
  {
    name: "Crypto",
    details: "Quickly trade cryptocurrencies",
    color: "#F67416",
    icon: <CryptoIcon />,
  },
  {
    name: "Pay Bills",
    details: "Airtime, data, cable, betting, electricity.",
    color: "#E7B008",
    icon: <WifiPhoneIcon />,
  },
  {
    name: "Pay Link",
    details: "Get paid in seconds with payment links.",
    color: "#7BC111",
    icon: <LinkIcon />,
  },
  {
    name: "Rate",
    details: "Check current rates in realtime.",
    color: "#A855F7",
    icon: <RateCardIcon />,
  },

  {
    name: "Betting",
    details: "Fund betting accounts fast.",
    color: "#6B6EF8",
    icon: <BBallIcon />,
  },
];

export const tradeAssets = [
  {
    name: "Bitcoin (BTC)",
    imgUrl: "/images/icon/Bitcoin.svg",
    percent: "+0.54%",
  },
  {
    name: "Amazon Giftcard",
    imgUrl: "/images/icon/amazon-logo.svg",
    percent: "+6.88%",
  },
  {
    name: "Ethereum (ETH)",
    imgUrl: "/images/icon/Ethereum.svg",
    percent: "-12.09%",
  },
  {
    name: "Spotify Premium",
    imgUrl: "/images/icon/spotify-logo.svg",
    percent: "+6.88%",
  },
  {
    name: "Tether (USDT)",
    imgUrl: "/images/icon/tether.svg",
    percent: "+6.88%",
  },
];

export const transactions: ITransaction[] = [
  {
    id: 1,
    channel: "Giftcard Sell",
    type: TransactionType.Deposit,
    amount: 1500,
    fee: 0,
    total: 1500,
    reference: "202734856385823593758",
    status: TransactionStatus.Success,
    date: "2025-12-01T03:34:52",
  },
  {
    id: 2,
    channel: "Crypto Sell",
    type: TransactionType.Withdrawal,
    amount: 0,
    fee: 0,
    total: 0,
    reference: "202734856385823593758",
    status: TransactionStatus.Pending,
    date: "2025-09-01T03:34:52",
  },
  {
    id: 3,
    channel: "Airtime",
    type: TransactionType.Withdrawal,
    amount: 0,
    fee: 0,
    total: 0,
    reference: "202734856385823593758",
    status: TransactionStatus.Success,
    date: "2025-12-01T03:34:52",
  },
  {
    id: 4,
    channel: "Data",
    type: TransactionType.Deposit,
    amount: 0,
    fee: 0,
    total: 0,
    reference: "202734856385823593758",
    status: TransactionStatus.Success,
    date: "2025-08-05T03:34:52",
  },
  {
    id: 5,
    channel: "Fiat",
    type: TransactionType.Deposit,
    amount: 3000,
    fee: 0,
    total: 3000,
    reference: "202734856385823593758",
    status: TransactionStatus.Cancelled,
    date: "2025-08-01T03:34:52",
  },
];

export const completionSteps = [
  {
    title: "Verify your email",
    details: "Takes about 2 minutes",
    imgUrl: "/images/icon/email-yellow.svg",
    isCompleted: true,
  },
  {
    title: "Verify phone number",
    details: "Takes about 2 minutes",
    imgUrl: "/images/icon/phone.svg",
    isCompleted: false,
  },
  {
    title: "Update personal information",
    details: "Takes about 2 minutes",
    imgUrl: "/images/icon/customer.svg",
    isCompleted: false,
  },
  {
    title: "Upgrade KYC",
    details: "Takes about 2 minutes",
    imgUrl: "/images/icon/customer-kyc.svg",
    isCompleted: false,
  },
  {
    title: "Enable 2FA",
    details: "Takes about 2 minutes",
    imgUrl: "/images/icon/2fa.svg",
    isCompleted: false,
  },
    {
    title: "Make your first transaction",
    details: "Takes about 2 minutes",
    imgUrl: "/images/icon/paper-plane.svg",
    isCompleted: false,
  },
];
