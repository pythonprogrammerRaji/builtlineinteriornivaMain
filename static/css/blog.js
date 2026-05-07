const blogs = [
    {
        title : "2BHK Interior Cost in Bangalore",
        category: "other",
        slug: "2bhk-interior-cost",
        image:  "static/images/2bhk-interior.jpg",
        desc : "Detailed 2BHK interior design cost in Bangalore with budget and material insights."
    },
    {
        title : "Modern Kitchen Design Ideas",
        category: "kitchen",
        slug: "kitchen-design",
       image:  "static/images/kichen_interior.jpg",
        desc : "Explore modern kitchen design ideas with smart layouts and space-saving solutions."
    },
    {
        title: "Small Bedroom Ideas",
        category: "bedroom",
        slug: "bedroom-ideas",
        image:  "static/images/bedrooms.jpg",
        desc: "Discover small bedroom design ideas to maximize space with stylish interiors."
    },
    {
        title: "Living Room Trends",
        category: "living",
        slug: "living-room",
        image:  "static/images/Luxury-living-room1.jpg",
        desc: "Latest living room interior design trends with modern styles and décor ideas."
    },
    {
        title: "Low Budget Interior Tips",
        category: "other",
        slug: "budget-design",
        image:  "static/images/low-budget.jpg",
        desc: "Affordable interior design tips to create stylish homes on a low budget."
    },
    {
        title: "Luxury Interior Design",
         category: "living",
        slug: "luxury-design",
        image:  "static/images/luxury-interior.jpg",
        desc: "Premium luxury interior design ideas for elegant and modern homes."
    },
    {
        title: "False Ceiling Designs",
         category: "other",
        slug: "false-ceiling",
        image:  "static/images/false-celling.jpg",
        desc: "Modern false ceiling design ideas to enhance interiors with stylish finishes."
    },
    {
        title: "Wardrobe Design Ideas",
         category: "bedroom",
        slug: "wardrobe-design",
       image:  "static/images/wordrode.jpg",
        desc: "Functional wardrobe design ideas with smart storage solutions."
    },
    {
        title: "Office Interior Design",
        category: "commercial",
        slug: "office-design",
        image:  "static/images/office-interior.jpg",
        desc: "Modern office interior design ideas to improve productivity and workspace."
    },
    {
        title: "Bathroom Interior Ideas",
         category: "bathroom",
        slug: "bathroom-design",
       image:  "static/images/bathroom.jpg",
        desc: "Stylish bathroom interior design ideas with modern fittings and layouts."
    },
    {
        title: "Space Saving Furniture",
         category: "other",
        slug: "space-furniture",
        image:  "static/images/SF-KIDS STUDY 1.jpg.jpeg",
        desc: "Space-saving furniture ideas for small homes with smart designs."
    },
    {
        title: "Home Lighting Ideas",
         category: "other",
        slug: "lighting-ideas",
        image:  "static/images/lighting-interior.jpg",
        desc: "Creative home lighting ideas to improve ambiance and interior look."
    },
    {
        title: "Interior Design Mistakes",
         category: "other",
        slug: "design-mistakes",
        image:  "static/images/mistake-interior.jpg",
        desc: "Common interior design mistakes to avoid for better home planning."
    },
    {
        title: "Modular Kitchen Guide",
         category: "kitchen",
        slug: "modular-kitchen",
        image:  "static/images/Ukichen.jpg",
        desc: "Complete modular kitchen guide with layouts, materials, and cost."
    }

    
]


// every blog card detailed explanation

const blogDetails = [

  {
    slug: "2bhk-interior-cost",
    title: "2BHK Interior Cost in Bangalore",
    image: "static/images/2bhk-interior.jpg",
    content: `
      <h2>2BHK Interior Cost in Bangalore</h2>
      <p>The cost of 2BHK interior design in Bangalore depends on materials, customization, and design style. A basic setup starts from ₹3–5 lakhs.</p>

      <h2>Cost Breakdown</h2>
      <p>Kitchen, wardrobe, lighting, and furniture significantly affect overall cost.</p>

      <h2>Budget Tips</h2>
      <p>Plan smartly and choose durable materials for long-term value.</p>
    `
  },

  {
    slug: "kitchen-design",
    title: "Modern Kitchen Design Ideas",
    image: "static/images/kichen_interior.jpg",
    content: `
      <h2>Modern Kitchen Design</h2>
      <p>Modern kitchens focus on efficiency, aesthetics, and storage.</p>

      <h2>Popular Layouts</h2>
      <p>L-shaped and U-shaped kitchens are widely used.</p>

      <h2>Storage Ideas</h2>
      <p>Use modular cabinets and pull-out drawers.</p>
    `
  },

  {
    slug: "bedroom-ideas",
    title: "Small Bedroom Ideas",
    image: "static/images/bedrooms.jpg",
    content: `
      <h2>Small Bedroom Design</h2>
      <p>Small bedrooms require smart space planning.</p>

      <h2>Design Tips</h2>
      <p>Use light colors, mirrors, and compact furniture.</p>

      <h2>Storage Solutions</h2>
      <p>Use storage beds and wall shelves.</p>
    `
  },

  {
    slug: "living-room",
    title: "Living Room Trends",
    image: "static/images/Luxury-living-room1.jpg",
    content: `
      <h2>Living Room Interior Trends</h2>
      <p>Modern living rooms focus on minimal design and comfort.</p>

      <h2>Trending Styles</h2>
      <p>Neutral tones, smart furniture, and open layouts are popular.</p>

      <h2>Decor Ideas</h2>
      <p>Use lighting and wall art to enhance the space.</p>
    `
  },

  {
    slug: "budget-design",
    title: "Low Budget Interior Tips",
    image: "static/images/low-budget.jpg",
    content: `
      <h2>Budget Interior Design</h2>
      <p>You can design your home beautifully even with a limited budget.</p>

      <h2>Cost Saving Tips</h2>
      <p>Reuse furniture and choose simple materials.</p>

      <h2>Planning</h2>
      <p>Proper planning reduces unnecessary expenses.</p>
    `
  },

  {
    slug: "luxury-design",
    title: "Luxury Interior Design",
    image: "static/images/luxury-interior.jpg",
    content: `
      <h2>Luxury Interior Design</h2>
      <p>Luxury interiors focus on premium materials and elegant finishes.</p>

      <h2>Design Elements</h2>
      <p>Use marble, wood, and custom furniture.</p>

      <h2>Lighting</h2>
      <p>Statement lighting enhances luxury spaces.</p>
    `
  },

  {
    slug: "false-ceiling",
    title: "False Ceiling Designs",
    image: "static/images/false-celling.jpg",
    content: `
      <h2>False Ceiling Design</h2>
      <p>False ceilings improve lighting and aesthetics.</p>

      <h2>Design Types</h2>
      <p>POP, gypsum, and wooden ceilings are popular.</p>

      <h2>Benefits</h2>
      <p>Enhances interior look and hides wiring.</p>
    `
  },

  {
    slug: "wardrobe-design",
    title: "Wardrobe Design Ideas",
    image: "static/images/wordrode.jpg",
    content: `
      <h2>Wardrobe Design</h2>
      <p>Wardrobes should be functional and stylish.</p>

      <h2>Types</h2>
      <p>Sliding and hinged wardrobes are common.</p>

      <h2>Storage</h2>
      <p>Use shelves and drawers efficiently.</p>
    `
  },

  {
    slug: "office-design",
    title: "Office Interior Design",
    image: "static/images/office-interior.jpg",
    content: `
      <h2>Office Interior Design</h2>
      <p>Office interiors improve productivity and comfort.</p>

      <h2>Layout</h2>
      <p>Use open layouts and ergonomic furniture.</p>

      <h2>Lighting</h2>
      <p>Proper lighting improves work efficiency.</p>
    `
  },

  {
    slug: "bathroom-design",
    title: "Bathroom Interior Ideas",
    image: "static/images/bathroom.jpg",
    content: `
      <h2>Bathroom Interior Design</h2>
      <p>Modern bathrooms focus on cleanliness and style.</p>

      <h2>Design Ideas</h2>
      <p>Use tiles, glass partitions, and modern fittings.</p>

      <h2>Lighting</h2>
      <p>Use soft lighting for a relaxing feel.</p>
    `
  },

  {
    slug: "space-furniture",
    title: "Space Saving Furniture",
    image: "static/images/SF-KIDS STUDY 1.jpg.jpeg",
    content: `
      <h2>Space Saving Furniture</h2>
      <p>Smart furniture helps maximize small spaces.</p>

      <h2>Ideas</h2>
      <p>Use foldable beds and multi-purpose furniture.</p>

      <h2>Benefits</h2>
      <p>Improves functionality and saves space.</p>
    `
  },

  {
    slug: "lighting-ideas",
    title: "Home Lighting Ideas",
    image: "static/images/lighting-interior.jpg",
    content: `
      <h2>Home Lighting Design</h2>
      <p>Lighting enhances mood and interior aesthetics.</p>

      <h2>Types</h2>
      <p>Ambient, task, and accent lighting are essential.</p>

      <h2>Tips</h2>
      <p>Use layered lighting for best results.</p>
    `
  },

  {
    slug: "design-mistakes",
    title: "Interior Design Mistakes",
    image: "static/images/mistake-interior.jpg",
    content: `
      <h2>Interior Design Mistakes</h2>
      <p>Avoid common mistakes to improve design quality.</p>

      <h2>Common Issues</h2>
      <p>Poor lighting, wrong colors, and clutter.</p>

      <h2>Solutions</h2>
      <p>Plan properly and consult professionals.</p>
    `
  },

  {
    slug: "modular-kitchen",
    title: "Modular Kitchen Guide",
    image: "static/images/Ukichen.jpg",
    content: `
      <h2>Modular Kitchen Guide</h2>
      <p>Modular kitchens are efficient and modern.</p>

      <h2>Layouts</h2>
      <p>L-shape, U-shape, and island kitchens are popular.</p>

      <h2>Materials</h2>
      <p>Use durable materials for long-term use.</p>
    `
  }

];
