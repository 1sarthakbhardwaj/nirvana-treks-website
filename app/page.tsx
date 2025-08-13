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
      
      {/* Featured Tours Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Adventures</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked journeys that showcase the incredible diversity of India
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <Link 
                key={tour.href} 
                href={tour.href} 
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-secondary/50 border border-border backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <div className="p-6">
                  {/* Image placeholder with emoji */}
                  <div className="w-full h-48 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center text-6xl">
                    {tour.image}
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

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Nirvana?</h2>
            <p className="text-xl text-muted-foreground">What makes our adventures special</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
