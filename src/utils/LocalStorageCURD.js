const TOKEN_EXPIRY_DAYS = Number(import.meta.env.VITE_TOKEN_EXPIRY_DAYS) || 1;

export default (key, value, expiry = TOKEN_EXPIRY_DAYS) => {
  //Save data to localStorage with expiry
  const now = new Date();
  const expiryDate = new Date(now.getTime() + expiry * 24 * 60 * 60 * 1000);

  const dataToStore = {
    value: typeof value === "object" ? JSON.stringify(value) : value,
    expiry: expiryDate.getTime(),
  };

  localStorage.setItem(key, JSON.stringify(dataToStore));
  return true;
};
export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
  return true;
};
export const clearLocalStorage = () => {
  localStorage.clear();
  return true;
};

export const getFromLocalStorage = (key) => {
  const itemStr = localStorage.getItem(key);
  const value = itemStr && JSON.parse(itemStr)?.value;

  if (!itemStr) return null;
  return typeof value === "string" &&
    (value.startsWith("{") || value.startsWith("["))
    ? JSON.parse(value)
    : value;
};
