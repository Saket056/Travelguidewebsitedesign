import { motion } from "motion/react";
import { Car, Bike, Ship, AlertCircle, IndianRupee, Clock } from "lucide-react";

interface TransportMode {
  id: string;
  name: string;
  icon: any;
  image: string;
  description: string;
  fare: string;
  bestFor: string[];
  tips: string[];
  availability: string;
}

const transportModes: TransportMode[] = [
  {
    id: "auto-rickshaw",
    name: "Auto-rickshaw",
    icon: Car,
    image: "https://images.unsplash.com/photo-1626491058156-2daaeea7f578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmlja3NoYXclMjBJbmRpYSUyMHRyYW5zcG9ydHxlbnwxfHx8fDE3NzE4MjE0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "The most common and convenient mode of transport in Varanasi for short to medium distances.",
    fare: "₹30-200 (depending on distance)",
    availability: "24/7",
    bestFor: [
      "Quick trips within the city",
      "Traveling with luggage",
      "Groups of 2-3 people",
      "Night travel (safer option)",
    ],
    tips: [
      "Always negotiate fare before starting the journey",
      "Use ride-sharing apps like Ola/Uber for fixed rates",
      "Keep small change handy",
      "Expect to pay extra after 10 PM",
    ],
  },
  {
    id: "e-rickshaw",
    name: "E-rickshaw",
    icon: Bike,
    image: "https://images.unsplash.com/photo-1626491058156-2daaeea7f578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmlja3NoYXclMjBJbmRpYSUyMHRyYW5zcG9ydHxlbnwxfHx8fDE3NzE4MjE0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Eco-friendly electric rickshaws perfect for short distances and narrow lanes in old Varanasi.",
    fare: "₹10-50 (very economical)",
    availability: "6 AM - 10 PM",
    bestFor: [
      "Short distances (1-3 km)",
      "Exploring narrow lanes",
      "Budget-friendly travel",
      "Eco-conscious travelers",
    ],
    tips: [
      "Ideal for traveling within ghat areas",
      "Cannot carry heavy luggage",
      "Slower than auto-rickshaws",
      "Fixed routes and stops available",
    ],
  },
  {
    id: "boat-rides",
    name: "Boat Rides",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1652396507015-74b259a6f58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMGJvYXQlMjBHYW5nZXMlMjByaXZlcnxlbnwxfHx8fDE3NzE4MjE0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Experience Varanasi from the sacred Ganges River - a must-do activity offering unique views of the ghats.",
    fare: "₹100-500 per person (1-2 hour ride)",
    availability: "Sunrise (5 AM) and Evening rides (4-7 PM) are most popular",
    bestFor: [
      "Sunrise/sunset views",
      "Photography enthusiasts",
      "Spiritual experience",
      "Viewing multiple ghats",
    ],
    tips: [
      "Book in advance during peak season",
      "Negotiate group rates for better prices",
      "Sunrise boat rides are magical",
      "Bring camera for stunning photos",
    ],
  },
  {
    id: "taxi-cab",
    name: "Taxi & Cab Services",
    icon: Car,
    image: "https://images.unsplash.com/photo-1626491058156-2daaeea7f578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmlja3NoYXclMjBJbmRpYSUyMHRyYW5zcG9ydHxlbnwxfHx8fDE3NzE4MjE0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Comfortable air-conditioned cabs for longer journeys, airport transfers, and outstation trips.",
    fare: "₹300-1000+ (based on distance)",
    availability: "24/7 (Book via apps)",
    bestFor: [
      "Airport/Railway station transfers",
      "Day trips to Sarnath",
      "Comfortable long-distance travel",
      "Groups of 4-6 people",
    ],
    tips: [
      "Use Ola/Uber for transparent pricing",
      "Book cabs for full-day city tours",
      "More expensive but comfortable",
      "AC available for comfort",
    ],
  },
];

export function Transportation() {
  return (
    <section id="transport" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Transportation Guide
          </h2>
          <p className="text-muted-foreground text-lg">
            Navigate Varanasi with ease - your complete guide to local transport
          </p>
        </motion.div>

        {/* Transport Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {transportModes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <motion.div
                key={mode.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={mode.image}
                    alt={mode.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl text-white">{mode.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{mode.description}</p>

                  {/* Fare & Availability */}
                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <IndianRupee className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">Fare</div>
                        <div className="text-sm text-muted-foreground">{mode.fare}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">Available</div>
                        <div className="text-sm text-muted-foreground">{mode.availability}</div>
                      </div>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Best For:</h4>
                    <ul className="space-y-1">
                      {mode.bestFor.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-accent" />
                      Travel Tips:
                    </h4>
                    <ul className="space-y-1">
                      {mode.tips.map((tip, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-accent mt-0.5">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Safety & General Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 border border-secondary/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl">Safety & Travel Guidelines</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium mb-2">🛡️ Safety First</h4>
              <p className="text-sm text-muted-foreground">
                Always share your ride details with family/friends. Avoid traveling alone late at night. Keep valuables secure.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium mb-2">💰 Payment Tips</h4>
              <p className="text-sm text-muted-foreground">
                Carry small denominations. Many drivers don't have change for ₹500/2000 notes. Digital payments are widely accepted.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium mb-2">📱 Apps to Use</h4>
              <p className="text-sm text-muted-foreground">
                Download Ola, Uber for cabs. Google Maps for navigation. Keep offline maps downloaded for better navigation.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium mb-2">⏰ Peak Hours</h4>
              <p className="text-sm text-muted-foreground">
                Avoid 9-11 AM and 5-7 PM for smooth travel. Early mornings are best for visiting ghats and temples.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium mb-2">🗺️ Old City Access</h4>
              <p className="text-sm text-muted-foreground">
                Many ghat areas have narrow lanes inaccessible to cars. Use e-rickshaws or walk to explore the old city.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium mb-2">🚶 Walking Tours</h4>
              <p className="text-sm text-muted-foreground">
                The best way to experience Varanasi's old lanes is on foot. Hire a local guide for immersive walking tours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
