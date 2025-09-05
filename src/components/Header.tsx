import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">Bella Vista</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="#menu" className="hover:text-primary transition-colors">
            Menu
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button className="hidden md:inline-flex">
          Make Reservation
        </Button>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
}