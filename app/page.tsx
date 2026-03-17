import dynamic from "next/dynamic";
import { HeroBanner } from "@/components/sections/hero/HeroBanner";
import { SectionTabs } from "@/components/sections/section-tabs/SectionTabs";
import { ApprovalFocusedSupport } from "@/components/sections/approval/ApprovalFocusedSupport";

const WeOptimizeForApproval = dynamic(
  () =>
    import("@/components/sections/we-optimize/WeOptimizeForApproval").then(
      (m) => m.WeOptimizeForApproval,
    ),
);

const SuccessStories = dynamic(
  () =>
    import("@/components/sections/success/SuccessStories").then(
      (m) => m.SuccessStories,
    ),
);

const OneVisaAccess = dynamic(
  () =>
    import("@/components/sections/one-visa/OneVisaAccess").then(
      (m) => m.OneVisaAccess,
    ),
);

export default function Home() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-white text-zinc-900"
      aria-label="France visa information page"
    >
      <HeroBanner />
      <SectionTabs />
      <ApprovalFocusedSupport />
      <WeOptimizeForApproval />
      <SuccessStories />
      <OneVisaAccess />
    </main>
  );
}
