import React, { useState, useEffect } from "react";
import HeroBackground from "../HeroBackground";

const legend = [
  ["(gf)", "gluten free"],
  ["(df)", "dairy free"],
  ["(v)", "vegetarian"],
  ["(ve)", "vegan"],
  ["(n)", "contains nuts"],
];

const sections = [
  {
    title: "Bar",
    items: [
      { name: "Spicy Margarita", tags: "(gf) (ve)" },
      { name: "Shiner Bock", tags: "(ve)" },
      { name: "Modelo Especial", tags: "(ve)" },
      { name: "Josh Cellars Cabernet Sauvignon", tags: "(gf) (df) (v)" },
      { name: "Silver Moki Sauvignon Blanc", tags: "(gf) (df) (v)" },
      { name: "Casalforte Extra Dry Prosecco", tags: "(gf) (ve)" },
      {
        name: "Sparkling water, still water, lemonade, iced tea, & coffee",
        tags: "(gf) (df) (ve) (***coffee creamer contains dairy)",
      },
    ],
  },
  {
    title: "Cocktail Hour",
    items: [
      { name: "Brisket burnt ends with peach habañero glaze", tags: "(gf) (df)" },
      { name: "Barbacoa Tostadas", tags: "(gf)" },
      { name: "Avocado Toast", tags: "(v)" },
      { name: "Popcorn Bar", tags: "(gf) (v)" },
      {
        name: "Honey lavender, sweet and smoky BBQ, jalapeno ranch",
        tags: "(gf) (v)",
        sub: true,
      },
    ],
  },
  {
    title: "Dinner",
    items: [
      { name: "Smoked Beef + Chicken Fajitas", tags: "(gf) (df)" },
      { name: "Peppers + Onions", tags: "(gf) (ve)" },
      { name: "Flour Tortillas", tags: "(v)" },
      { name: "Corn Tortillas", tags: "(gf) (v)" },
      { name: "Spanish Rice", tags: "(ve)" },
      { name: "Borracho Beans", tags: "(gf) (ve)" },
      { name: "Cheddar Cheese", tags: "(v)" },
      { name: "Pico de Gallo", tags: "(gf) (ve)" },
      { name: "Sour Cream", tags: "(gf) (v)" },
      { name: "Salsa Roja", tags: "(gf) (ve)" },
      { name: "Tortilla Chips", tags: "(gf) (ve)" },
    ],
  },
  {
    title: "Dessert",
    items: [
      { name: "Tres Leches Cakes (plain w/ fruit, chocolate)", tags: "" },
      { name: "Gluten-free Vegan Chocolate Layer Cake", tags: "(gf) (ve)" },
      { name: "Churro Cart:", tags: "" },
      { name: "Regular churros", tags: "(v)", sub: true },
      { name: "Gluten free churros", tags: "(v) (gf)", sub: true },
      { name: "Mixed berry sauce", tags: "(ve) (gf)", sub: true },
      { name: "Nutella sauce", tags: "(gf) (v) (n)", sub: true },
      { name: "Oreo topping", tags: "(ve)", sub: true },
      { name: "Shredded coconut topping", tags: "(gf) (ve)", sub: true },
      { name: "Chopped pecan topping", tags: "(gf) (ve) (n)", sub: true },
      { name: "Whipped cream", tags: "(gf) (v)", sub: true },
    ],
  },
];

export default function Allergens() {
  const [showBottom, setShowBottom] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  const getCardStyle = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(40px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

const cardStyle = (delay) => ({
  ...getCardStyle(cardVisible, delay),
  background: "rgba(89, 66, 56, 0.8)",
  backdropFilter: "blur(1px)",
  WebkitBackdropFilter: "blur(5px)",
  borderRadius: "30px",
  padding: "15px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: `
    0 0 5px rgba(243, 174, 61, 0.6),
    0 0 10px rgba(243, 174, 61, 0.35)
  `,
  maxWidth: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "2vmin",
});

  useEffect(() => {
    const timer = setTimeout(() => setCardVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowBottom(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className="container" style={{ marginTop: "2.70vmin" }}>
        <HeroBackground image="dock.JPG" bgColor="#2a2620" />
        <div className="container">
          <div
            className="d-flex justify-content-center"
            style={{
              opacity: showBottom ? 1 : 0,
              transition: "opacity 0.6s ease",
              transitionDelay: "0s",
            }}
          >
            <div
              style={{
                background: "rgba(89, 66, 56, 0.8)",
                backdropFilter: "blur(1px)",
                WebkitBackdropFilter: "blur(5px)",
                borderRadius: "30px",
                padding: "0.2rem 0.6rem",
                maskImage: `linear-gradient(to right, transparent, white 3%, white 90%, transparent), 
                    linear-gradient(to bottom, transparent, white 20%, white 30%, transparent)`,
                WebkitMaskImage: `linear-gradient(to right, transparent, white 2%, white 95%, transparent), 
                          linear-gradient(to bottom, transparent, white 25%, white 60%, transparent)`,
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  width: "0",
                  animation: "typing 2.5s ease-out forwards",
                  color: "white",
                }}
              >
                Allergen Info
              </h1>
            </div>
          </div>

          <br></br>

          {/* Disclaimer + legend */}
          <div className="container align-items-center" style={cardStyle(0)}>
            <p style={{ marginBottom: 0 }}>
              <strong>
                Food and drinks have not been prepared in dedicated allergen-free
                facilities, therefore cross-contamination is always a possibility.
                Please inquire with the catering staff if you have any safety
                concerns regarding food allergies and cross-contamination.
              </strong>
            </p>
            <p style={{ marginBottom: 0 }}>Dine at your own risk and please don’t sue us 😊</p>
          </div>
  <div
  className="container align-items-center"
  style={{ ...cardStyle(0), textAlign: "center" }}
>
  <h3 className="text-center justify-content-center"><strong>Legend</strong></h3>
<div className="row justify-content-center" style={{ marginBottom: 0 }}>
  {legend.map(([abbr, meaning]) => (
    <div key={abbr} className="col-auto px-3">
      <p style={{ marginBottom: 0 }}>
        <strong>{abbr}</strong> – {meaning}
      </p>
    </div>
  ))}
</div>
</div>
          {/* Menu sections */}
         {sections.map((section, i) => (
  <div
    key={section.title}
    className="container align-items-center"
    style={{ ...cardStyle(0.2 * (i + 1)), textAlign: "center" }}>
    <h3 className="text-center justify-content-center"><strong>{section.title}</strong></h3>
    <div style={{ marginBottom: 0 }}>
      {section.items.map((item) => (
        <div key={item.name}>
          <p style={{ marginBottom: 0 }}>
            {item.sub ? "- " : ""}
            {item.name}{" "}
            <strong>
                {item.tags}
            </strong>
          </p>
        </div>
      ))}
    </div>
  </div>
))}

          <br></br>
        </div>
      </div>
    </>
  );
}