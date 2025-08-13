import Hero from "@/components/hero";
import Container from "@/components/ui/container";
import Link from "next/link";
import { MapPin, Clock, Star, Camera, Heart, ArrowRight } from "lucide-react";

export default function Home() {
  const featuredTours = [
    { 
      title: "Kashmir Great Lakes Trek", 
      href: "/tours/kashmir-great-lakes",
      duration: "7 Days",
      difficulty: "Moderate",
      location: "Jammu & Kashmir",
      price: "₹25,000",
      rating: 4.8,
      image: "🏔️",
      description: "Seven pristine alpine lakes surrounded by snow-capped peaks"
    },
    { 
      title: "Spiti Valley Road Trip", 
      href: "/tours/spiti-valley",
      duration: "8 Days", 
      difficulty: "Easy",
      location: "Himachal Pradesh",
      price: "₹18,000",
      rating: 4.9,
      image: "🏜️",
      description: "Cold desert landscapes and ancient monasteries"
    },
    { 
      title: "Kerala Backwaters Retreat", 
      href: "/tours/kerala-backwaters",
      duration: "4 Days",
      difficulty: "Easy", 
      location: "Kerala",
      price: "₹12,000",
      rating: 4.7,
      image: "🛶",
      description: "Serene houseboats through tropical waterways"
    },
  ];

  const features = [
    {
      icon: Camera,
      title: "Expert Photography",
      description: "Professional guides who know the best spots and lighting"
    },
    {
      icon: Heart,
      title: "Small Groups",
      description: "Maximum 12 travelers for personalized experiences"
    },
    {
      icon: Star,
      title: "Local Experiences",
      description: "Authentic cultural immersion with local communities"
    }
  ];

  return (
    <main>
      <Hero />
      
      {/* Enhanced Featured Tours Section */}
      <section className="py-32 bg-gradient-to-b from-background via-secondary/50 to-muted relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <Container>
          <div className="text-center mb-24 animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-6 py-3 text-sm text-emerald-400 border border-emerald-500/20 backdrop-blur-sm">
              <Star className="w-4 h-4 animate-twinkle" />
              <span className="font-medium">Handpicked Experiences</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 bg-gradient-to-r from-foreground via-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Featured Adventures
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Handpicked journeys that showcase the <span className="text-emerald-400 font-semibold">incredible diversity</span> of India
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour, index) => (
              <Link 
                key={tour.href} 
                href={tour.href} 
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/60 to-secondary/60 border border-border backdrop-blur-lg hover:border-emerald-500/70 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 animate-fade-in-up"
                style={{animationDelay: `${index * 200}ms`}}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-8">
                  {/* Enhanced Image placeholder with animation */}
                  <div className="w-full h-56 bg-gradient-to-br from-emerald-500/30 to-blue-500/30 rounded-2xl mb-8 flex items-center justify-center text-7xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-purple-400/20 animate-pulse"></div>
                    <span className="relative z-10 group-hover:animate-bounce">{tour.image}</span>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Tour Info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">
                        <Star className="w-3 h-3" />
                        {tour.rating}
                      </span>
                      <span className="text-2xl font-bold text-emerald-400">{tour.price}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:text-emerald-500 transition-colors">
                      {tour.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tour.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {tour.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {tour.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tour.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                        tour.difficulty === 'Moderate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {tour.difficulty}
                      </span>
                      <div className="flex items-center gap-1 text-emerald-400 group-hover:gap-2 transition-all">
                        <span className="text-sm font-medium">View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/tours"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105"
            >
              View All Adventures
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-32 bg-gradient-to-br from-muted via-background to-secondary relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>
        
        <Container>
          <div className="text-center mb-24 animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-6 py-3 text-sm text-purple-400 border border-purple-500/20 backdrop-blur-sm">
              <Heart className="w-4 h-4 animate-pulse" />
              <span className="font-medium">Exceptional Experiences</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 bg-gradient-to-r from-purple-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Why Choose Nirvana?
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              What makes our adventures <span className="text-purple-400 font-semibold">truly special</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="text-center group relative p-8 rounded-3xl bg-gradient-to-br from-background/50 to-secondary/30 border border-border backdrop-blur-sm hover:scale-105 transition-all duration-500 animate-fade-in-up"
                style={{animationDelay: `${i * 200}ms`}}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-emerald-500/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-emerald-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <feature.icon className="w-12 h-12 text-emerald-500 drop-shadow-lg group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-emerald-400 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
