import Container from "@/components/ui/container";

export const metadata = {
  title: "About | Nirvana Treks & Tours",
  description: "Govt. of India authorized travel company for treks and tours across India.",
};

export default function AboutPage() {
  return (
    <main className="py-16">
      <Container>
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 max-w-3xl text-white/80">
          Nirvana Treks & Tours is a Govt. of India authorized travel company delivering authentic, safe, and unforgettable journeys across India. From Himalayan treks to cultural immersions, we craft experiences that connect you with the soul of India.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Our Authorization</h3>
            <p className="mt-2 text-white/70">We operate with necessary licenses and compliance under Govt. of India tourism guidelines.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Safety First</h3>
            <p className="mt-2 text-white/70">Experienced guides, verified routes, and robust protocols for your peace of mind.</p>
          </div>
        </div>
      </Container>
    </main>
  );
}


