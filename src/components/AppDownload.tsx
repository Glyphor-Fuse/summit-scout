import { useRef, useEffect } from "react";
import { Download, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const AppDownload = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Abstract topo lines background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)" />
        </svg>
      </div>

      <div className="container px-4 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8">
          Start Your <br/> Expedition
        </h2>
        <p className="max-w-2xl text-xl md:text-2xl font-light opacity-90 mb-12">
          Join the community of explorers who trust Summit Scout for their wildest journeys. Available offline, everywhere.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button size="lg" className="bg-black text-white hover:bg-black/80 h-16 px-8 text-lg rounded-none border-2 border-transparent hover:border-white transition-all">
            <Download className="mr-2 w-5 h-5" />
            Download for iOS
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-black border-black hover:bg-black hover:text-white h-16 px-8 text-lg rounded-none transition-all">
            <Download className="mr-2 w-5 h-5" />
            Download for Android
          </Button>
        </div>

        <div className="mt-16 flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
           <span className="font-mono uppercase text-sm">View Web Map Interface</span>
           <Star className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
