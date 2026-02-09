import { Battery, Signal, Star, Sun, Thermometer, Wind, Zap } from 'lucide-react';
import { useState } from "react";
import { cn } from "@/lib/utils";

export const TrailSimulator = () => {
  const [condition, setCondition] = useState<"sun" | "rain" | "fog">("sun");

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Controls Side */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
                Trail Condition <span className="text-primary">Simulator</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Don't let the weather catch you off guard. Visualize terrain under changing atmospheric conditions before you pack.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-mono uppercase tracking-widest text-primary/80">Select Atmosphere</p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setCondition("sun")}
                  className={cn(
                    "flex items-center gap-3 px-6 py-4 border rounded-lg transition-all duration-300",
                    condition === "sun" 
                      ? "bg-primary/10 border-primary text-primary" 
                      : "bg-card/50 border-white/5 text-muted-foreground hover:bg-card hover:text-white"
                  )}
                >
                  <Sun className="w-5 h-5" />
                  <span className="font-bold">Clear Sky</span>
                </button>
                <button
                  onClick={() => setCondition("rain")}
                  className={cn(
                    "flex items-center gap-3 px-6 py-4 border rounded-lg transition-all duration-300",
                    condition === "rain" 
                      ? "bg-blue-500/10 border-blue-500 text-blue-400" 
                      : "bg-card/50 border-white/5 text-muted-foreground hover:bg-card hover:text-white"
                  )}
                >
                  <Star className="w-5 h-5" />
                  <span className="font-bold">Heavy Rain</span>
                </button>
                <button
                  onClick={() => setCondition("fog")}
                  className={cn(
                    "flex items-center gap-3 px-6 py-4 border rounded-lg transition-all duration-300",
                    condition === "fog" 
                      ? "bg-gray-500/10 border-gray-400 text-gray-300" 
                      : "bg-card/50 border-white/5 text-muted-foreground hover:bg-card hover:text-white"
                  )}
                >
                  <Wind className="w-5 h-5" />
                  <span className="font-bold">Dense Fog</span>
                </button>
              </div>
            </div>

            <div className="p-6 bg-card border border-white/5 rounded-xl space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                   <Thermometer className="w-4 h-4 text-primary" />
                   <span className="text-sm font-mono text-muted-foreground">TEMP</span>
                </div>
                <span className="font-mono font-bold">
                  {condition === "sun" ? "22°C" : condition === "rain" ? "14°C" : "11°C"}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                   <Battery className="w-4 h-4 text-primary" />
                   <span className="text-sm font-mono text-muted-foreground">GPS DRAIN</span>
                </div>
                <span className="font-mono font-bold">
                  {condition === "sun" ? "LOW" : condition === "rain" ? "HIGH" : "MED"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                   <Signal className="w-4 h-4 text-primary" />
                   <span className="text-sm font-mono text-muted-foreground">VISIBILITY</span>
                </div>
                <span className="font-mono font-bold">
                  {condition === "sun" ? "100%" : condition === "rain" ? "65%" : "20%"}
                </span>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="flex-1 w-full relative group">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/images/trail-preview.jpg" 
                alt="Trail Map" 
                className={cn(
                  "w-full h-full object-cover transition-all duration-700",
                  condition === "fog" ? "blur-sm opacity-50 grayscale" : 
                  condition === "rain" ? "brightness-75 contrast-125" : "brightness-100"
                )}
              />
              
              {/* UI Overlay on Map */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                 <div className="bg-black/60 backdrop-blur px-3 py-1 rounded text-xs font-mono border border-white/10 text-white">
                    CAM-02: RIDGE_LINE
                 </div>
                 <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-red-500">LIVE</span>
                 </div>
              </div>

              {/* Rain Effect Overlay (CSS based) */}
              {condition === "rain" && (
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
              )}
              
              {/* Fog Effect Overlay */}
              {condition === "fog" && (
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              )}
            </div>
            
            {/* Floating Label */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 fill-current" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase opacity-80">Safety Score</span>
                  <span className="text-2xl font-display font-bold leading-none">
                    {condition === "sun" ? "98/100" : condition === "rain" ? "72/100" : "45/100"}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrailSimulator;
