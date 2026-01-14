import {
  CompletionProgress,
  DoMore,
  PaymentMethods,
  TransactionHistory,
  WalletSection,
} from "./components";
import { TradedAssets } from "./components/traded-assets";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <WalletSection />
      <CompletionProgress />
      <PaymentMethods />

      <TransactionHistory />

      <div className="block lg:hidden">
        <TradedAssets />
      </div>
      <DoMore />
    </div>
  );
}
