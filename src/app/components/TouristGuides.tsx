import { useState } from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle, Mail, Star, Languages, Award, MapPin } from "lucide-react";

interface Guide {
  id: string;
  name: string;
  image: string;
  languages: string[];
  experience: string;
  rating: number;
  specialization: string[];
  phone: string;
  whatsapp: string;
  email: string;
  priceRange: string;
}

const guides: Guide[] = [
  {
    id: "guide-1",
    name: "Rajesh Kumar Pandey",
    image: "https://images.unsplash.com/photo-1763643206968-527acd7b690a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0b3VyaXN0JTIwZ3VpZGUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzE4MjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    languages: ["Hindi", "English", "French", "Spanish"],
    experience: "15 Years",
    rating: 4.9,
    specialization: ["Temple Tours", "Ghat Walks", "Spiritual Heritage"],
    phone: "+91-9876543210",
    whatsapp: "+91-9876543210",
    email: "rajesh.guide@varanasi.com",
    priceRange: "₹1500-3000/day",
  },
  {
    id: "guide-2",
    name: "Anita Sharma",
    image: "https://images.unsplash.com/photo-1763643206968-527acd7b690a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0b3VyaXN0JTIwZ3VpZGUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzE4MjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    languages: ["Hindi", "English", "German", "Japanese"],
    experience: "10 Years",
    rating: 4.8,
    specialization: ["Food Tours", "Photography Walks", "Cultural Tours"],
    phone: "+91-9876543211",
    whatsapp: "+91-9876543211",
    email: "anita.guide@varanasi.com",
    priceRange: "₹1200-2500/day",
  },
  {
    id: "guide-3",
    name: "Mohit Verma",
    image: "https://images.unsplash.com/photo-1763643206968-527acd7b690a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0b3VyaXN0JTIwZ3VpZGUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzE4MjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    languages: ["Hindi", "English", "Italian"],
    experience: "8 Years",
    rating: 4.7,
    specialization: ["Historical Sites", "Boat Tours", "Sunrise Tours"],
    phone: "+91-9876543212",
    whatsapp: "+91-9876543212",
    email: "mohit.guide@varanasi.com",
    priceRange: "₹1000-2200/day",
  },
];

export function TouristGuides() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourDate: "",
    numberOfPeople: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        tourDate: "",
        numberOfPeople: "",
        message: "",
      });
    }, 3000);
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsApp = (phone: string, guideName: string) => {
    const message = encodeURIComponent(
      `Hi ${guideName}, I found your profile on Dhoomchalle and would like to inquire about tour guide services in Varanasi.`
    );
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${message}`, "_blank");
  };

  return (
    <section id="guides" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Verified Tourist Guides
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore Varanasi with experienced, certified local guides
          </p>
        </motion.div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-medium">{guide.rating}</span>
                </div>

                {/* Name & Experience */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl text-white mb-1">{guide.name}</h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">{guide.experience} Experience</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Languages */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Languages className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Languages:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {guide.languages.map((lang) => (
                      <span
                        key={lang}
                        className="bg-muted px-3 py-1 rounded-full text-xs"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialization */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Specialization:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {guide.specialization.map((spec) => (
                      <span
                        key={spec}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">Price Range</div>
                  <div className="font-medium text-primary">{guide.priceRange}</div>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleCall(guide.phone)}
                    className="w-full bg-primary text-white py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                  <button
                    onClick={() => handleWhatsApp(guide.whatsapp, guide.name)}
                    className="w-full bg-green-500 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl mb-2">Quick Inquiry Form</h3>
            <p className="text-muted-foreground">
              Fill out this form and we'll connect you with the best guide for your needs
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="text-2xl mb-2">Thank You!</h4>
              <p className="text-muted-foreground">
                Your inquiry has been submitted. A guide will contact you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Preferred Tour Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.tourDate}
                    onChange={(e) =>
                      setFormData({ ...formData, tourDate: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm">Number of People *</label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.numberOfPeople}
                  onChange={(e) =>
                    setFormData({ ...formData, numberOfPeople: e.target.value })
                  }
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="How many people?"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Additional Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Submit Inquiry
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
