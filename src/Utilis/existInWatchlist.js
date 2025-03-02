export const existInWatchlist = (items, stock) => {
  if (!Array.isArray(items)) {
    console.error("Error: items is not an array", items); // Debugging
    return false; // Return a default value
  }

  return items.some((item) => item.id === stock.id);
};
