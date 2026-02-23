import { motion } from "motion/react";
import { Star, MapPin, ThumbsUp } from "lucide-react";

interface FoodItem {
  id: string;
  name: string;
  image: string;
  description: string;
  bestPlaces: string[];
  rating: number;
  price: string;
}

const foods: FoodItem[] = [
  {
    id: "kachori-sabzi",
    name: "Kachori Sabzi",
    image: "https://images.unsplash.com/photo-1616787700988-44c85b2ffcf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBrYWNob3JpJTIwc3RyZWV0JTIwZm9vZHxlbnwxfHx8fDE3NzE4MjE0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A traditional Varanasi breakfast dish featuring crispy, spiced kachori served with flavorful potato curry. A must-try street food experience!",
    bestPlaces: [
      "Deena Chaat Bhandar",
      "Kashi Chaat Bhandar",
      "Ram Bhandar near Dashashwamedh Ghat",
    ],
    rating: 4.8,
    price: "₹30-50",
  },
  {
    id: "banarasi-paan",
    name: "Banarasi Paan",
    image: "https://images.unsplash.com/photo-1723770865841-e4b3ee3f0ac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXRlbCUyMGxlYWYlMjBwYWFuJTIwSW5kaWF8ZW58MXx8fHwxNzcxODIxNDI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "The world-famous Banarasi Paan is a sweet betel leaf preparation filled with various ingredients. It's the perfect way to end your meal in Varanasi!",
    bestPlaces: [
      "Tambul Kendra (Keshav Paan)",
      "Pradhan Paan Bhandar",
      "Vishwanath Gali Paan Shops",
    ],
    rating: 4.9,
    price: "₹50-200",
  },
  {
    id: "malaiyyo",
    name: "Malaiyyo (Malaiyo)",
    image: "https://images.unsplash.com/photo-1695712535779-7ee863e4a54c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzd2VldCUyMGRlc3NlcnQlMjBtYWxhaXxlbnwxfHx8fDE3NzE4MjE0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A seasonal winter delicacy made from milk foam, sugar, and saffron. Light as air and melts in your mouth - truly a unique Varanasi experience!",
    bestPlaces: [
      "Pahalwan Lassi (also serves Malaiyo)",
      "Street vendors near Assi Ghat (Winter only)",
      "Kashi Chat Bhandar",
    ],
    rating: 4.7,
    price: "₹40-80",
  },
];

interface FoodSectionProps {
  searchQuery: string;
}

export function FoodSection({ searchQuery }: FoodSectionProps) {
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    food.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="food" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Famous Varanasi Food
          </h2>
          <p className="text-muted-foreground text-lg">
            Taste the authentic flavors of Kashi - from street food to traditional delicacies
          </p>
        </motion.div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFoods.map((food, index) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-medium">{food.rating}</span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl text-white mb-1">{food.name}</h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">{food.price}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{food.description}</p>

                {/* Best Places */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h4 className="font-medium">Best Places to Try:</h4>
                  </div>
                  <ul className="space-y-2">
                    {food.bestPlaces.map((place, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        <span>{place}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* User Reviews Indicator */}
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white flex items-center justify-center text-white text-xs"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Loved by 500+ visitors
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredFoods.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No food items found matching your search.</p>
          </div>
        )}

        {/* Additional Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
        >
          <h3 className="text-2xl mb-4">🍽️ Food Tips for Varanasi</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <span className="text-primary">✓</span>
                Best Time to Eat
              </h4>
              <p className="text-sm text-muted-foreground">
                Try Kachori Sabzi for breakfast (6-10 AM) and Paan after dinner. Malaiyyo is only available in winter mornings (December-February).
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <span className="text-primary">✓</span>
                Safety Tips
              </h4>
              <p className="text-sm text-muted-foreground">
                Eat at popular, crowded places with high turnover. Drink bottled water and avoid raw salads if you have a sensitive stomach.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <span className="text-primary">✓</span>
                Vegetarian Paradise
              </h4>
              <p className="text-sm text-muted-foreground">
                Varanasi is predominantly vegetarian. You'll find amazing dairy-based sweets and pure vegetarian street food everywhere.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <span className="text-primary">✓</span>
                Don't Miss
              </h4>
              <p className="text-sm text-muted-foreground">
                Lassi at Blue Lassi Shop, Tamatar Chaat, and the famous Deena Chaat Bhandar near Bengali Tola are must-visits!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
