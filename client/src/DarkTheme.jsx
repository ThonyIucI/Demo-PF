export const changeColor = (color, setColor) => {
  color === "dark" ? (color = "light") : (color = "dark");
  setColor(color);
  console.log(`ahora soy ${color}`);
};
