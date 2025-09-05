import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
    >
      <div className="absolute inset-0 bg-black/40 z-10" />
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1743793055775-3c07ab847ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGluaW5nfGVufDF8fHx8MTc1Njk0MDIzNnww&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Elegant restaurant interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl mb-6">Experience Fine Dining</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Authentic Italian cuisine crafted with passion and served with
          elegance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6" href="#menu">
            View Our Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg- text-white border-white hover:bg-white hover:text-black"
          >
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
}
