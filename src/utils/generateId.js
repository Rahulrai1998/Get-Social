export const generateId = () => {
  const timestamp = Date.now().toString(36);
  const randomness = Math.random().toString(36).substring(2, 11);

  return timestamp + randomness;
};
