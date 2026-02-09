import { Compass, Map, Radio, ShieldAlert, Star, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Map,
    title: "Offline Topography",
    desc: "Download 4K detailed maps for zero-signal zones. Never lose your bearing.",
    colSpan: "md:col-span-2",
    bg: "bg-card"
  },
  {
    icon: Radio,
    title: "SOS Beacon",
    desc: "Emergency satellite ping capability integrated.",
    colSpan: "md:col-span-1",
    bg: "bg-primary/10 border-primary/20"
  },
  {
    icon: Compass,
    title: "True North AI",
    desc: "Augmented reality compass that overlays route data on your camera feed.",
    colSpan: "md:col-span-1",
    bg: "bg-card"
  },
  {
    icon: WifiOff,
    title: "Zero-Trace Sync",
    desc: "Cache your progress without internet. Auto-syncs on return.",
    colSpan: "md:col-span-2",
    bg: "bg-card"
  },
];

export const GearModules = () => {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container px-4">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">System Modules</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-2 uppercase">Essential <span className="text-muted-foreground">Gear</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={i} className={`border-white/5 hover:border-primary/50 transition-colors duration-500 group ${f.colSpan} ${f.bg}`}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-background border border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <f.icon className="w-6 h-6" />
                </div>
                <CardTitle className="font-display text-2xl uppercase tracking-tight">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
                <div className="mt-6 h-1 w-full bg-secondary overflow-hidden rounded-full">
                  <div className="h-full bg-primary/20 w-0 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Stats Card */}
          <Card className="md:col-span-1 border-white/5 bg-gradient-to-br from-card to-background flex flex-col justify-center items-center text-center p-8">
            <div className="space-y-2">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-5xl font-display font-bold">2.4M+</div>
              <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Active Scouts</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GearModules;
