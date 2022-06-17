import reactLogoImg from './images/react_logo.png';

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

export const Level3Case2 = () => {
  const skills = [
    'HTML',
    'CSS',
    'Sass',
    'JS',
    'React',
    'Vue',
    'Node',
    'Python',
    'Django',
    'Git',
  ];
  const skillsJsx = [];

  for (let i = 0; i < skills.length; i++) {
    skillsJsx.push(
      <span
        style={{
          backgroundColor: '#61dafb',
          padding: '5px',
          borderRadius: '5px',
          minWidth: '40px',
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        {skills[i]}
      </span>
    );
  }

  return (
    <section className="level3-case2-container">
      {/* avatar */}
      <div
        style={{
          backgroundColor: '#fff',
          height: '200px',
          width: '200px',
          borderRadius: '50%',
        }}
      >
        <img src={reactLogoImg} alt="avatar" style={{ height: '100%' }} />
      </div>
      <h1>Plasticine</h1>
      <p>Senior Developer, China</p>
      <h1>SKILLS</h1>
      <div style={{ display: 'flex', gap: '10px' }}>{skillsJsx}</div>
      <p>Joined on June 17, 2022</p>
    </section>
  );
};
