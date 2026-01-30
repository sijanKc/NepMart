export const ALL_PRODUCTS = [
    // Fashion
    {
        id: 1,
        title: "Handmade Dhaka Topi - Palpali Pattern",
        price: "850",
        oldPrice: "1,200",
        rating: 4.9,
        reviews: 245,
        discount: 30,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1610483863831-292a83232c43?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1610483863831-292a83232c43?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576188973526-0e5d742240ad?q=80&w=800&auto=format&fit=crop"
        ],
        description: "The Dhaka Topi is a type of hat, popular in Nepal, and which forms part of the national dress. This Palpali Dhaka Topi is handmade with traditional patterns, representing the rich cultural heritage of Palpa, Nepal.",
        features: [
            "100% Cotton Handwoven Fabric",
            "Traditional Palpali Patterns",
            "Comfortable and Breathable",
            "Authentic Nepali Craftsmanship"
        ],
        stock: 50,
        userReviews: [
            { id: 101, user: "Siddhartha L.", rating: 5, comment: "Excellent quality and authentic design. Fits perfectly!", date: "2024-01-15" },
            { id: 102, user: "Pratiksha G.", rating: 4, comment: "Beautiful patterns, though color is slightly darker than photo.", date: "2024-01-10" }
        ]
    },
    {
        id: 2,
        title: "Pure Pashmina Shawl - Handwoven",
        price: "12,500",
        oldPrice: "15,000",
        rating: 4.8,
        reviews: 112,
        discount: 16,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Experience the luxury of authentic Himalayan Pashmina. This shawl is handwoven from the softest wool of the Changthangi goat, known for its incredible warmth and lightness.",
        features: [
            "100% Authentic Pashmina Wool",
            "Extremely Lightweight and Warm",
            "Elegant and Versatile Design",
            "Ethically Sourced Wool"
        ],
        stock: 12,
        userReviews: [
            { id: 201, user: "Elena R.", rating: 5, comment: "So soft! Feels like a warm hug. Well worth the price.", date: "2024-01-20" }
        ]
    },
    {
        id: 13,
        title: "Traditional Nepali Kurtha Suruwal",
        price: "4,500",
        rating: 4.7,
        reviews: 56,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Classic Nepali Kurtha Suruwal set for men, featuring fine embroidery and comfortable cotton fabric. Perfect for festivals and formal occasions.",
        features: [
            "Premium Cotton Fabric",
            "Elegant Thread Work",
            "Standard Regular Fit",
            "Breathable Material"
        ],
        stock: 25,
        userReviews: []
    },
    // Food & Organic
    {
        id: 3,
        title: "Himalayan Organic Coffee Beans",
        price: "1,450",
        rating: 4.7,
        reviews: 89,
        category: "food",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Grown in the shade of the Himalayan foothills, our organic Arabica coffee beans offer a unique flavor profile with notes of chocolate and mountain air.",
        features: [
            "100% Organic Arabica",
            "Shade-Grown in High Altitude",
            "Medium-Dark Roast",
            "Strict Quality Control"
        ],
        stock: 40,
        userReviews: [
            { id: 301, user: "Mark D.", rating: 5, comment: "The aroma is incredible. Best morning coffee ever!", date: "2024-01-18" }
        ]
    },
    {
        id: 4,
        title: "Premium Ilam Tea - First Flush",
        price: "750",
        oldPrice: "900",
        rating: 4.9,
        reviews: 156,
        discount: 15,
        category: "food",
        image: "https://images.unsplash.com/photo-1544739313-6fad02872377?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1544739313-6fad02872377?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Hand-picked from the high-altitude tea gardens of Ilam, this first flush tea is known for its delicate floral notes and light golden liquor.",
        features: [
            "Hand-picked Young Leaves",
            "High Elevation Tea Garden",
            "Loose Leaf Tea",
            "Rich in Antioxidants"
        ],
        stock: 100,
        userReviews: []
    },
    {
        id: 14,
        title: "Pure Himalayan Shilajit (50g)",
        price: "2,200",
        rating: 4.9,
        reviews: 312,
        category: "food",
        image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Sourced from high-altitude Himalayan rocks, our Shilajit is purified using traditional Ayurvedic methods to ensure maximum potency and mineral content.",
        features: [
            "100% Pure Fulvic Acid Rich",
            "Purified resin form",
            "Traditional extraction",
            "Enhances energy & vitality"
        ],
        stock: 15,
        userReviews: []
    },
    // Handicrafts
    {
        id: 5,
        title: "Tibetan Singing Bowl - 3-Tone",
        price: "4,500",
        oldPrice: "5,500",
        rating: 5.0,
        reviews: 432,
        discount: 18,
        category: "handicrafts",
        image: "https://images.unsplash.com/photo-1594950195709-a14f66c242d7?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1594950195709-a14f66c242d7?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621252179027-94459d270c5c?q=80&w=800&auto=format&fit=crop"
        ],
        description: "A traditional Tibetan Singing Bowl, hand-hammered with seven metals. It produces a clear, long-lasting sound that is perfect for meditation and healing.",
        features: [
            "Hand-hammered Construction",
            "Includes Wooden Mallet and Cushion",
            "Resonant 3-Tone Vibration",
            "Traditional 7-Metal Alloy"
        ],
        stock: 8,
        userReviews: [
            { id: 501, user: "Zen M.", rating: 5, comment: "The sound is so deep and calming. Beautiful craft.", date: "2024-01-25" }
        ]
    },
    {
        id: 6,
        title: "Authentic Gorkha Khukuri Blade",
        price: "8,900",
        rating: 4.9,
        reviews: 210,
        category: "handicrafts",
        image: "https://images.unsplash.com/photo-1581412344293-673b32ddd27d?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1581412344293-673b32ddd27d?q=80&w=800&auto=format&fit=crop"
        ],
        description: "The legendary blade of the Gorkhas. This authentic Khukuri is hand-forged in Nepal using high-grade spring steel and features a traditional bone handle.",
        features: [
            "Hand-forged Carbon Steel",
            "Authentic Buffalo Bone Handle",
            "Includes Traditional Leather Scabbard",
            "Battle-Ready Quality"
        ],
        stock: 5,
        userReviews: []
    },
    // Footwear (Goldstar)
    {
        id: 7,
        title: "Goldstar Shoes - G10 Series",
        price: "2,450",
        oldPrice: "2,800",
        rating: 4.6,
        reviews: 1540,
        discount: 12,
        category: "footwear",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Nepal's iconic footwear. The Goldstar G10 is famous for its durability and comfort. A versatile shoe that works for both athletic activities and casual wear.",
        features: [
            "Durable Mesh and Synthetic Upper",
            "Rubber Phylon Sole",
            "Lightweight Design",
            "Traction-focused Outsole"
        ],
        stock: 85,
        userReviews: [
            { id: 701, user: "Rajan K.", rating: 5, comment: "Best budget shoes in Nepal. Lasts for years!", date: "2024-01-05" }
        ]
    },
    {
        id: 8,
        title: "Goldstar Pro Runner - Edition 25",
        price: "3,200",
        rating: 4.5,
        reviews: 890,
        category: "footwear",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Advanced running shoes from Goldstar. Featuring superior cushioning and breathable fabric for long-distance comfort.",
        features: [
            "Breathable Knit Upper",
            "Shock-absorbing Midsole",
            "Sleek Modern Design",
            "Reinforced Heel Support"
        ],
        stock: 45,
        userReviews: []
    }
    // ... other products would follow the same pattern
];
