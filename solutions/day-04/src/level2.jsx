import htmlLogoImg from './images/html_logo.png';
import cssLogoImg from './images/css_logo.png';
import jsLogoImg from './images/js_logo.png';
import reactLogoImg from './images/react_logo.png';

const Level2 = () => {
  return (
    <section className="level2-container">
      <p>Front End Technologies</p>
      <div className="img-container">
        <img src={htmlLogoImg} alt="html" />
        <img src={cssLogoImg} alt="css" />
        <img src={jsLogoImg} alt="javascript" />
        <img src={reactLogoImg} alt="react" />
      </div>
    </section>
  );
};

export default Level2;
