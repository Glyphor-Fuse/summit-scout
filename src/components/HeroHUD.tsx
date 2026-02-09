import { useState, useEffect } from "react";
import { Search, MapPin, Navigation, Mountain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const HeroHUD = () => {
  const [coordinates, setCoordinates] = useState({ lat: 46.5778, long: 7.9152 });

  // Simulate coordinate drift for "live" feel
  useEffect(() => {
    const interval = setInterval(() => {
      setCoordinates(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.0001,
        long: prev.long + (Math.random() - 0.5) * 0.0001
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background text-white flex flex-col justify-center items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-mountains.jpg" 
          alt="Summit Peak" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <div className="h-full w-full grid grid-cols-6 border-l border-r border-white/10">
          <div className="border-r border-white/10 h-full" />
          <div className="border-r border-white/10 h-full" />
          <div className="border-r border-white/10 h-full" />
          <div className="border-r border-white/10 h-full" />
          <div className="border-r border-white/10 h-full" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container px-4 flex flex-col items-center text-center space-y-8">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm animate-fade-in-down">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Live Satellite Feed</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
          Summit <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">Scout</span>
        </h1>
        
        <p className="max-w-xl text-lg md:text-xl text-muted-foreground font-light tracking-wide">
          The ultimate topographical companion for the modern explorer. 
          Map, track, and conquer the wild with precision.
        </p>

        {/* Search HUD */}
        <div className="w-full max-w-md p-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg flex items-center gap-2 ring-1 ring-white/5 shadow-2xl">
          <MapPin className="text-primary w-5 h-5 ml-2" />
          <Input 
            className="border-none bg-transparent h-12 text-lg focus-visible:ring-0 placeholder:text-white/30" 
            placeholder="Enter coordinates or trail name..."
          />
          <Button size="icon" className="h-10 w-10 bg-primary hover:bg-primary/90 rounded-md">
            <ArrowRight className="w-5 h-5 text-black" />
          </Button>
        </div>

        {/* Live Data Block */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 opacity-80">
          <div className="flex flex-col items-center">
            <span className="text-xs font-mono text-muted-foreground uppercase">Latitude</span>
            <span className="text-xl font-mono font-bold tracking-tighter">{coordinates.lat.toFixed(4)}° N</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-mono text-muted-foreground uppercase">Longitude</span>
            <span className="text-xl font-mono font-bold tracking-tighter">{coordinates.long.toFixed(4)}° E</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-mono text-muted-foreground uppercase">Elevation</span>
            <span className="text-xl font-mono font-bold tracking-tighter">2,450M</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-mono text-muted-foreground uppercase">Conditions</span>
            <span className="text-xl font-mono font-bold tracking-tighter">CLEAR</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHUD;
