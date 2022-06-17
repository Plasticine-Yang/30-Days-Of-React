/**
 * @description hexadecimal color generator
 * @returns random color in hex
 */
const generateColor = () => {
  const hexColorStr = '0123456789abcdef';
  const color = ['#'];

  for (let i = 0; i < 6; i++) {
    color.push(hexColorStr[Math.floor(Math.random() * hexColorStr.length)]);
  }

  return color.join('');
};

export const Level3Case1 = () => {
  const colors = new Array(5).fill('').map(() => generateColor());
  const colorsJsx = [];

  for (let i = 0; i < colors.length; i++) {
    colorsJsx.push(
      <div className="color-item" style={{ backgroundColor: colors[i] }}>
        {colors[i]}
      </div>
    );
  }

  return <section className="level3-case1-container">{colorsJsx}</section>;
};
