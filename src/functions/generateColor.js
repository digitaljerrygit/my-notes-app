export default function generateColor() {
  const colors = ["#080f0f", "#a4bab7", "#bea57d", "#a52422"];

  const min = 0;
  const max = colors.length;

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return colors[getRandomArbitrary(min, max)];
}
