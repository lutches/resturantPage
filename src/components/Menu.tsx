import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const menuItems = [
  {
    id: 1,
    name: "Truffle Pasta",
    description: "Fresh homemade pasta with black truffle, parmesan, and wild mushrooms",
    price: "$28",
    image: "https://images.unsplash.com/photo-1709429790175-b02bb1b19207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNoJTIwcGxhdGVkfGVufDF8fHx8MTc1Njk5NzY4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Pasta"
  },
  {
    id: 2,
    name: "Grilled Salmon",
    description: "Atlantic salmon with roasted vegetables and lemon herb butter",
    price: "$32",
    image: "https://images.unsplash.com/photo-1704007573697-6a516da421ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwcmVzdGF1cmFudCUyMHF1YWxpdHl8ZW58MXx8fHwxNzU2OTk3Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Seafood"
  },
  {
    id: 3,
    name: "Risotto ai Funghi",
    description: "Creamy arborio rice with mixed wild mushrooms and aged parmesan",
    price: "$24",
    image: "https://images.unsplash.com/photo-1709429790175-b02bb1b19207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNoJTIwcGxhdGVkfGVufDF8fHx8MTc1Njk5NzY4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Risotto"
  },
  {
    id: 4,
    name: "Osso Buco",
    description: "Braised veal shanks with saffron risotto and gremolata",
    price: "$38",
    image: "https://images.unsplash.com/photo-1704007573697-6a516da421ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwcmVzdGF1cmFudCUyMHF1YWxpdHl8ZW58MXx8fHwxNzU2OTk3Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Meat"
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic Italian dishes, 
            made with the finest ingredients and traditional techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl mb-2">{item.name}</h3>
                  <span className="text-xl text-primary">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {item.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            View our complete menu with all courses, wines, and desserts
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}