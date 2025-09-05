import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 1985 by the Rossi family, Bella Vista has been serving authentic 
              Italian cuisine for over three decades. Our passion for traditional recipes 
              combined with modern culinary techniques creates an unforgettable dining experience.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Chef Marco Rossi brings 25 years of experience from the finest kitchens in 
              Italy and continues the family tradition of using only the freshest ingredients 
              sourced from local farms and imported specialty items from Italy.
            </p>
            <p className="text-lg text-gray-600">
              Every dish is prepared with love and attention to detail, ensuring that each 
              guest experiences the true flavors of Italy in every bite.
            </p>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1659354218430-ac7f0b31e977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2ODg1NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Chef Marco in the kitchen"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black/70 text-white p-4 rounded">
              <h3 className="text-lg">Chef Marco Rossi</h3>
              <p className="text-sm text-gray-300">Executive Chef & Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}