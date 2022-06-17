import htmlLogoImg from './images/html_logo.png';
import cssLogoImg from './images/css_logo.png';
import jsLogoImg from './images/js_logo.png';
import reactLogoImg from './images/react_logo.png';

export const Level2Case1 = () => {
  return (
    <section className="level2-case1-container">
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

export const Level2Case2 = () => {
  return (
    <section className="level2-case2-container">
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <div className="field-container">
        <input className="field" placeholder="First name" type="text" />
        <input className="field" placeholder="Last name" type="text" />
        <input className="field" placeholder="Email name" type="text" />
      </div>
      <button className="subscribe-btn">Subscribe</button>
    </section>
  );
};
