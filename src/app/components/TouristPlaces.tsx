import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Clock, DollarSign, Navigation2, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Place {
  id: string;
  name: string;
  category: "temple" | "ghat" | "fort";
  images: string[];
  description: string;
  hours: string;
  entryFee: string;
  rating: number;
  location: {
    lat: number;
    lng: number;
  };
}

const places: Place[] = [
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath Temple",
    category: "temple",
    images: [
      "https://images.unsplash.com/photo-1712546623815-09416e1e751f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNoaSUyMFZpc2h3YW5hdGglMjB0ZW1wbGUlMjBWYXJhbmFzaXxlbnwxfHx8fDE3NzE4MjE0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "One of the most famous Hindu temples dedicated to Lord Shiva. It is located in Vishwanath Gali and is a major pilgrimage site.",
    hours: "3:00 AM - 11:00 PM",
    entryFee: "Free (Donations welcome)",
    rating: 4.8,
    location: { lat: 25.3109, lng: 83.0108 },
  },
  {
    id: "dashashwamedh-ghat",
    name: "Dashashwamedh Ghat",
    category: "ghat",
    images: [
      "https://images.unsplash.com/photo-1763186534248-d0de60fd81e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXNoYXNod2FtZWRoJTIwZ2hhdCUyMGV2ZW5pbmclMjBhYXJ0aXxlbnwxfHx8fDE3NzE4MjE0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "The main ghat in Varanasi on the Ganges River. Famous for the daily Ganga Aarti ceremony held every evening, attracting thousands of visitors.",
    hours: "Open 24/7 (Aarti: 6:00 PM - 7:00 PM)",
    entryFee: "Free",
    rating: 4.9,
    location: { lat: 25.3069, lng: 83.0107 },
  },
  {
    id: "ramnagar-fort",
    name: "Ramnagar Fort",
    category: "fort",
    images: [
      "https://images.unsplash.com/photo-1694791223523-ad242e6ba093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYW1uYWdhciUyMGZvcnQlMjBWYXJhbmFzaXxlbnwxfHx8fDE3NzE4MjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "An 18th-century fort located on the eastern bank of the Ganges. It houses a museum with vintage cars, royal artifacts, and weaponry.",
    hours: "10:00 AM - 5:00 PM (Closed on Mondays)",
    entryFee: "₹50 (Indians), ₹200 (Foreigners)",
    rating: 4.5,
    location: { lat: 25.2826, lng: 83.0534 },
  },
];

interface TouristPlacesProps {
  searchQuery: string;
}

export function TouristPlaces({ searchQuery }: TouristPlacesProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "temple" | "ghat" | "fort">("all");
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all", label: "All Places" },
    { id: "temple", label: "Temples" },
    { id: "ghat", label: "Ghats" },
    { id: "fort", label: "Forts" },
  ];

  const filteredPlaces = places.filter((place) => {
    const matchesCategory = selectedCategory === "all" || place.category === selectedCategory;
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDirections = (place: Place) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${place.location.lat},${place.location.lng}`;
    window.open(url, "_blank");
  };

  const nextImage = () => {
    if (selectedPlace) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedPlace.images.length);
    }
  };

  const prevImage = () => {
    if (selectedPlace) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedPlace.images.length) % selectedPlace.images.length);
    }
  };

  return (
    <section id="places" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Explore Tourist Places
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover the sacred temples, ghats, and historical forts of Varanasi
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as any)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-foreground hover:bg-muted"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
              onClick={() => {
                setSelectedPlace(place);
                setCurrentImageIndex(0);
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={place.images[0]}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-medium">{place.rating}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm capitalize">
                    {place.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-2">{place.name}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{place.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{place.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span>{place.entryFee}</span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    getDirections(place);
                  }}
                  className="w-full bg-secondary text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors"
                >
                  <Navigation2 className="w-4 h-4" />
                  Get Directions
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground text-lg">No places found. Try a different search or category.</p>
          </div>
        )}
      </div>

      {/* Place Detail Modal */}
      {selectedPlace && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPlace(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Gallery */}
            <div className="relative h-96">
              <img
                src={selectedPlace.images[currentImageIndex]}
                alt={selectedPlace.name}
                className="w-full h-full object-cover"
              />
              {selectedPlace.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              <button
                onClick={() => setSelectedPlace(null)}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Details */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl mb-2">{selectedPlace.name}</h2>
                  <div className="flex items-center gap-2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm capitalize">
                      {selectedPlace.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-accent text-accent" />
                      <span className="font-medium">{selectedPlace.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{selectedPlace.description}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium mb-1">Visiting Hours</div>
                    <div className="text-sm text-muted-foreground">{selectedPlace.hours}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium mb-1">Entry Fee</div>
                    <div className="text-sm text-muted-foreground">{selectedPlace.entryFee}</div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="mb-6">
                <h3 className="text-xl mb-3">Location & Map</h3>
                <div className="aspect-video rounded-lg overflow-hidden border border-border">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.0!2d${selectedPlace.location.lng}!3d${selectedPlace.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzM5LjYiTiA4M8KwMDAnMzguOSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <button
                onClick={() => getDirections(selectedPlace)}
                className="w-full bg-secondary text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors"
              >
                <Navigation2 className="w-5 h-5" />
                Get Shortest Path Directions
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
