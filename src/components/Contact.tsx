import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Visit Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to welcome you to Bella Vista. Reserve your table today 
            or contact us for special events and catering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                123 Via Roma<br />
                Little Italy District<br />
                New York, NY 10012
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-600">
                <p><strong>Monday - Thursday:</strong><br />5:00 PM - 10:00 PM</p>
                <p><strong>Friday - Saturday:</strong><br />5:00 PM - 11:00 PM</p>
                <p><strong>Sunday:</strong><br />4:00 PM - 9:00 PM</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-600">
                <p><strong>Phone:</strong><br />(212) 555-0123</p>
                <p><strong>Email:</strong><br />info@bellavistanyc.com</p>
                <p><strong>Reservations:</strong><br />reservations@bellavistanyc.com</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="mr-4">
            Make a Reservation
          </Button>
          <Button size="lg" variant="outline">
            Private Events
          </Button>
        </div>
      </div>
    </section>
  );
}