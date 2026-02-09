import { HeroHUD } from "@/components/HeroHUD";
import { TrailSimulator } from "@/components/TrailSimulator";
import { GearModules } from "@/components/GearModules";
import { AppDownload } from "@/components/AppDownload";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <HeroHUD />
      <GearModules />
      <TrailSimulator />
      <AppDownload />
    </div>
  );
};

export default Index;