import Container from "@/components/ui/container";
import Link from "next/link";
import { Mountain, Star, Shield, Users, Sparkles, Globe, Compass, Camera } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden pb-32 pt-32 text-foreground min-h-screen flex items-center">
        {/* Mountain Greenery Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Natural mountain gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-slate-800 to-green-900" />
          
          {/* Forest gradient overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.12),transparent_60%)] animate-forest-whisper" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(21,128,61,0.08),transparent_60%)] animate-forest-whisper delay-1000" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(22,163,74,0.06),transparent_60%)] animate-forest-whisper delay-2000" />
          
          {/* Nature mesh gradient */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-full filter blur-3xl animate-nature-flow"></div>
            <div className="absolute top-40 -right-20 w-80 h-80 bg-gradient-to-r from-emerald-500/15 to-green-600/15 rounded-full filter blur-3xl animate-nature-flow animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-lime-500/15 to-green-500/15 rounded-full filter blur-3xl animate-nature-flow animation-delay-4000"></div>
          </div>
          
          {/* Subtle mountain texture overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMmM1NWUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTMwIDEwbDE1IDIwSDE1eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        {/* Nature Floating Elements */}
        <div className="absolute top-20 left-10 animate-leaf-sway delay-1000">
          <Mountain className="w-12 h-12 text-green-400/70 drop-shadow-2xl" />
        </div>
        <div className="absolute top-40 right-20 animate-forest-whisper">
          <Star className="w-10 h-10 text-emerald-300/80 drop-shadow-2xl" />
        </div>
        <div className="absolute top-60 left-1/4 animate-mountain-breeze delay-500">
          <Sparkles className="w-8 h-8 text-lime-400/60 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-gentle-glow delay-1500">
          <Globe className="w-14 h-14 text-green-400/60 drop-shadow-2xl animate-spin-slow" />
        </div>
        <div className="absolute top-32 right-1/3 animate-leaf-sway delay-2000">
          <Compass className="w-10 h-10 text-emerald-400/60 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-60 left-1/3 animate-forest-whisper delay-3000">
          <Camera className="w-9 h-9 text-green-500/60 drop-shadow-2xl" />
        </div>
        
        <Container>
          <div className="mx-auto max-w-6xl text-center">
            {/* Natural Mountain Badge */}
            <div className="mb-10 inline-flex items-center gap-3 rounded-full glass-effect px-6 py-3 text-sm text-green-300 border border-green-500/30 animate-fade-in-up luxury-shadow">
              <Shield className="w-5 h-5 text-green-400 animate-forest-whisper" />
              <span className="font-medium tracking-wide">Government Authorized Travel Company</span>
              <Sparkles className="w-4 h-4 text-emerald-400 animate-forest-whisper" />
            </div>
            
            {/* Simple, Natural Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up delay-200 mb-6">
              <span className="block animate-slide-in-left text-foreground">Discover</span>
              <span className="block animate-slide-in-right delay-300 text-foreground">Incredible</span>
              <span className="block animate-slide-in-left delay-500 nature-gradient bg-clip-text text-transparent font-bold">
                India
              </span>
            </h1>
            
            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-300 animate-fade-in-up delay-700">
              with Nirvana Treks & Tours
            </h2>
            
            {/* Natural Description */}
            <p className="mt-10 text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-1000">
              Experience authentic adventures across the <span className="text-green-400 font-semibold">Himalayas</span> and beyond. From pristine mountain lakes to cultural immersions, we craft journeys that connect you with the <span className="text-emerald-400 font-semibold">soul of India</span>.
            </p>
            
            {/* Natural Mountain CTA Buttons */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in-up delay-1200">
              <Link
                href="/tours"
                className="group relative overflow-hidden rounded-xl forest-gradient px-12 py-6 text-xl font-bold text-white luxury-shadow hover:shadow-green-500/40 transition-all duration-500 hover:scale-105 animate-gentle-glow"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Compass className="w-6 h-6" />
                  Explore Adventures
                  <Sparkles className="w-5 h-5 animate-forest-whisper" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
              </Link>
              <Link
                href="/contact"
                className="group relative rounded-xl border-2 border-green-500/30 glass-effect px-12 py-6 text-xl font-bold text-foreground hover:border-green-400/70 transition-all duration-500 hover:scale-105 luxury-shadow"
              >
                <span className="flex items-center gap-3">
                  <Camera className="w-6 h-6" />
                  Plan Your Journey
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </Link>
            </div>
            
            {/* Mountain Nature Stats Section */}
            <div className="mt-24 grid grid-cols-1 gap-12 sm:grid-cols-3 max-w-5xl mx-auto">
              {[
                { icon: Users, label: "Happy Travelers", value: "500+", color: "text-green-400" },
                { icon: Mountain, label: "Adventures", value: "50+", color: "text-emerald-400" },
                { icon: Star, label: "Satisfaction", value: "4.9★", color: "text-lime-400" },
              ].map((stat, i) => (
                <div key={i} className={`text-center group p-10 rounded-2xl glass-effect border-2 border-green-500/20 hover:border-green-400/40 luxury-shadow hover:scale-105 transition-all duration-500 animate-fade-in-up`} style={{animationDelay: `${1400 + (i * 200)}ms`}}>
                  <div className="relative">
                    <stat.icon className={`w-16 h-16 mx-auto ${stat.color} mb-6 group-hover:scale-110 transition-all duration-500 drop-shadow-xl animate-mountain-breeze`} />
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-lime-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-3 group-hover:animate-gentle-glow`}>{stat.value}</div>
                  <div className="text-lg text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


