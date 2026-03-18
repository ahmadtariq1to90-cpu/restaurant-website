export const WHATSAPP_NUMBER = "919872786826";

export const MENU_ITEMS = [
  { id: 1, category: "Starters", name: "Truffle Arancini", description: "Crispy risotto balls stuffed with mozzarella and truffle oil.", price: "$14", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80" },
  { id: 2, category: "Starters", name: "Spicy Tuna Tartare", description: "Fresh tuna, avocado, chili, soy-ginger dressing, taro chips.", price: "$18", image: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?auto=format&fit=crop&w=800&q=80" },
  { id: 3, category: "Main Course", name: "Wagyu Ribeye", description: "12oz premium wagyu, roasted garlic mash, asparagus, red wine jus.", price: "$65", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
  { id: 4, category: "Main Course", name: "Pan-Seared Scallops", description: "Jumbo scallops, cauliflower purée, crispy pancetta, lemon butter.", price: "$38", image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80" },
  { id: 5, category: "Drinks", name: "Smoked Old Fashioned", description: "Bourbon, bitters, orange peel, hickory smoke.", price: "$16", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" },
  { id: 6, category: "Desserts", name: "Dark Chocolate Fondant", description: "Molten center, vanilla bean ice cream, mixed berry compote.", price: "$14", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80" },
];

export const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};
