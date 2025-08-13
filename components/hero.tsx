import Container from "@/components/ui/container";
import Link from "next/link";
import { Mountain, Star, Shield, Users, Sparkles, Globe, Compass, Camera } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden pb-32 pt-32 text-foreground min-h-screen flex items-center">
        {/* Ultra Enhanced Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-background/80 to-background dark:from-emerald-900/40 dark:via-slate-900/60 dark:to-black animate-gradient-x" />
          
          {/* Multiple gradient overlays for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.15),transparent_70%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.15),transparent_70%)] animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(168,85,247,0.1),transparent_70%)] animate-pulse delay-2000" />
          
          {/* Animated mesh gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Geometric patterns */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNmE5NGEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <Mountain className="w-10 h-10 text-emerald-400/40 drop-shadow-lg" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Star className="w-8 h-8 text-yellow-400/40 drop-shadow-lg" />
        </div>
        <div className="absolute top-60 left-1/4 animate-bounce delay-500">
          <Sparkles className="w-6 h-6 text-blue-400/30 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-pulse delay-1500">
          <Globe className="w-12 h-12 text-purple-400/30 drop-shadow-lg animate-spin-slow" />
        </div>
        <div className="absolute top-32 right-1/3 animate-bounce delay-2000">
          <Compass className="w-8 h-8 text-cyan-400/30 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-60 left-1/3 animate-pulse delay-3000">
          <Camera className="w-7 h-7 text-pink-400/30 drop-shadow-lg" />
        </div>
        
        <Container>
          <div className="mx-auto max-w-6xl text-center">
            {/* Enhanced Badge with Animation */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-emerald-500/10 px-6 py-3 text-sm text-emerald-400 border border-emerald-500/20 backdrop-blur-sm animate-fade-in-up shadow-lg">
              <Shield className="w-5 h-5 animate-pulse" />
              <span className="font-medium">Government Authorized Travel Company</span>
              <Sparkles className="w-4 h-4 animate-twinkle" />
            </div>
            
            {/* Massive Enhanced Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-gradient-to-r from-foreground via-emerald-400 to-emerald-500 bg-clip-text text-transparent animate-fade-in-up delay-200 mb-6">
              <span className="block animate-slide-in-left">Discover</span>
              <span className="block animate-slide-in-right delay-300">Incredible</span>
              <span className="block animate-slide-in-left delay-500 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                India
              </span>
            </h1>
            
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-emerald-500 animate-fade-in-up delay-700">
              with Nirvana Treks & Tours
            </h2>
            
            {/* Enhanced Description */}
            <p className="mt-10 text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-1000">
              Experience authentic adventures across the <span className="text-emerald-400 font-semibold">Himalayas</span> and beyond. From pristine mountain lakes to cultural immersions, we craft journeys that connect you with the <span className="text-purple-400 font-semibold">soul of India</span>.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in-up delay-1200">
              <Link
                href="/tours"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 px-12 py-6 text-xl font-bold text-black shadow-2xl hover:shadow-emerald-500/40 transition-all duration-500 hover:scale-110 animate-pulse-glow"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Compass className="w-6 h-6" />
                  Explore Adventures
                  <Sparkles className="w-5 h-5 animate-twinkle" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-500" />
              </Link>
              <Link
                href="/contact"
                className="group relative rounded-2xl border-2 border-emerald-400/50 bg-background/20 backdrop-blur-sm px-12 py-6 text-xl font-bold text-foreground hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-500 hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  <Camera className="w-6 h-6" />
                  Plan Your Journey
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </Link>
            </div>
            
            {/* Enhanced Stats with Animations */}
            <div className="mt-24 grid grid-cols-1 gap-12 sm:grid-cols-3 max-w-4xl mx-auto">
              {[
                { icon: Users, label: "Happy Travelers", value: "500+", color: "text-emerald-400", bgColor: "from-emerald-500/20 to-emerald-600/10" },
                { icon: Mountain, label: "Adventures", value: "50+", color: "text-blue-400", bgColor: "from-blue-500/20 to-blue-600/10" },
                { icon: Star, label: "Satisfaction", value: "4.9★", color: "text-yellow-400", bgColor: "from-yellow-500/20 to-yellow-600/10" },
              ].map((stat, i) => (
                <div key={i} className={`text-center group p-8 rounded-3xl bg-gradient-to-br ${stat.bgColor} border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500 animate-fade-in-up`} style={{animationDelay: `${1400 + (i * 200)}ms`}}>
                  <div className="relative">
                    <stat.icon className={`w-16 h-16 mx-auto ${stat.color} mb-6 group-hover:scale-125 transition-all duration-500 drop-shadow-lg`} />
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-400/20 to-purple-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:animate-pulse`}>{stat.value}</div>
                  <div className="text-lg text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


