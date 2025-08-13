import Container from "@/components/ui/container";
import Link from "next/link";
import { Mountain, Star, Shield, Users, Sparkles, Globe, Compass, Camera } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden pb-32 pt-32 text-foreground min-h-screen flex items-center">
        {/* Ultra-Luxurious Dark Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Elegant gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          
          {/* Luxury gradient overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(251,191,36,0.08),transparent_60%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(99,102,241,0.06),transparent_60%)] animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(244,63,94,0.05),transparent_60%)] animate-pulse delay-2000" />
          
          {/* Premium mesh gradient */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 -right-20 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-rose-500/20 to-pink-600/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Subtle luxury texture overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNLTEwIDMwaDYwdjJoLTYweiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuMDIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        
        {/* Elegant Floating Elements with Luxury Colors */}
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <Mountain className="w-12 h-12 text-yellow-400/60 drop-shadow-2xl" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Star className="w-10 h-10 text-amber-300/80 drop-shadow-2xl" />
        </div>
        <div className="absolute top-60 left-1/4 animate-bounce delay-500">
          <Sparkles className="w-8 h-8 text-indigo-400/50 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-pulse delay-1500">
          <Globe className="w-14 h-14 text-rose-400/50 drop-shadow-2xl animate-spin-slow" />
        </div>
        <div className="absolute top-32 right-1/3 animate-bounce delay-2000">
          <Compass className="w-10 h-10 text-purple-400/50 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-60 left-1/3 animate-pulse delay-3000">
          <Camera className="w-9 h-9 text-emerald-400/50 drop-shadow-2xl" />
        </div>
        
        <Container>
          <div className="mx-auto max-w-6xl text-center">
            {/* Ultra-Classy Badge */}
            <div className="mb-12 inline-flex items-center gap-3 rounded-full glass-effect px-8 py-4 text-sm text-yellow-300 border border-yellow-500/30 animate-fade-in-up luxury-shadow">
              <Shield className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="font-semibold tracking-wide">Government Authorized Travel Company</span>
              <Sparkles className="w-4 h-4 text-yellow-400 animate-twinkle" />
            </div>
            
            {/* Massive Luxury Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter animate-fade-in-up delay-200 mb-8 text-shadow-luxury">
              <span className="block animate-slide-in-left text-foreground">Discover</span>
              <span className="block animate-slide-in-right delay-300 text-foreground">Incredible</span>
              <span className="block animate-slide-in-left delay-500 premium-gradient bg-clip-text text-transparent font-extrabold">
                India
              </span>
            </h1>
            
            <h2 className="mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold text-yellow-300 animate-fade-in-up delay-700 text-shadow-luxury">
              with Nirvana Treks & Tours
            </h2>
            
            {/* Elegant Description */}
            <p className="mt-12 text-xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed animate-fade-in-up delay-1000 font-light">
              Experience authentic adventures across the <span className="text-yellow-400 font-semibold">Himalayas</span> and beyond. From pristine mountain lakes to cultural immersions, we craft journeys that connect you with the <span className="text-rose-400 font-semibold">soul of India</span>.
            </p>
            
            {/* Ultra-Classy CTA Buttons */}
            <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-10 animate-fade-in-up delay-1200">
              <Link
                href="/tours"
                className="group relative overflow-hidden rounded-2xl gold-gradient px-16 py-8 text-2xl font-bold text-black luxury-shadow hover:shadow-yellow-500/40 transition-all duration-700 hover:scale-110"
              >
                <span className="relative z-10 flex items-center gap-4">
                  <Compass className="w-7 h-7" />
                  Explore Adventures
                  <Sparkles className="w-6 h-6 animate-twinkle" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-700" />
              </Link>
              <Link
                href="/contact"
                className="group relative rounded-2xl border-2 border-gray-500/30 glass-effect px-16 py-8 text-2xl font-bold text-foreground hover:border-yellow-400/50 transition-all duration-700 hover:scale-105 luxury-shadow"
              >
                <span className="flex items-center gap-4">
                  <Camera className="w-7 h-7" />
                  Plan Your Journey
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400 to-rose-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
              </Link>
            </div>
            
            {/* Luxury Stats Section */}
            <div className="mt-32 grid grid-cols-1 gap-16 sm:grid-cols-3 max-w-6xl mx-auto">
              {[
                { icon: Users, label: "Happy Travelers", value: "500+", color: "text-yellow-400", bgColor: "from-yellow-500/20 to-amber-600/10" },
                { icon: Mountain, label: "Adventures", value: "50+", color: "text-indigo-400", bgColor: "from-indigo-500/20 to-purple-600/10" },
                { icon: Star, label: "Satisfaction", value: "4.9★", color: "text-rose-400", bgColor: "from-rose-500/20 to-pink-600/10" },
              ].map((stat, i) => (
                <div key={i} className={`text-center group p-12 rounded-3xl glass-effect border-2 border-white/10 hover:border-white/20 luxury-shadow hover:scale-110 transition-all duration-700 animate-fade-in-up`} style={{animationDelay: `${1400 + (i * 200)}ms`}}>
                  <div className="relative">
                    <stat.icon className={`w-20 h-20 mx-auto ${stat.color} mb-8 group-hover:scale-125 transition-all duration-700 drop-shadow-2xl`} />
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-400/20 via-indigo-400/20 to-rose-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  <div className={`text-5xl font-black ${stat.color} mb-4 group-hover:animate-pulse text-shadow-luxury`}>{stat.value}</div>
                  <div className="text-xl text-gray-300 font-semibold tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


