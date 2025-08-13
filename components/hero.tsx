import Container from "@/components/ui/container";
import Link from "next/link";
import { Mountain, Star, Shield, Users } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-24 text-foreground min-h-[90vh] flex items-center">
        {/* Enhanced Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-background/80 to-background dark:from-emerald-900/40 dark:via-slate-900/60 dark:to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <Mountain className="w-8 h-8 text-emerald-400/30" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Star className="w-6 h-6 text-yellow-400/30" />
        </div>
        
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400 border border-emerald-500/20">
              <Shield className="w-4 h-4" />
              Government Authorized Travel Company
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-foreground via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
              Discover Incredible India
            </h1>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-emerald-500">
              with Nirvana Treks & Tours
            </h2>
            
            <p className="mt-8 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience authentic adventures across the Himalayas and beyond. From pristine mountain lakes to cultural immersions, we craft journeys that connect you with the soul of India.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/tours"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-lg font-semibold text-black shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Explore Adventures</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/contact"
                className="group rounded-lg border-2 border-border px-8 py-4 text-lg font-semibold text-foreground hover:bg-accent hover:border-ring transition-all duration-300"
              >
                Plan Your Journey
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-2xl mx-auto">
              {[
                { icon: Users, label: "Happy Travelers", value: "500+" },
                { icon: Mountain, label: "Adventures", value: "50+" },
                { icon: Star, label: "Satisfaction", value: "4.9★" },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <stat.icon className="w-8 h-8 mx-auto text-emerald-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


