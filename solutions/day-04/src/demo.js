import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

// Header Component
const Header = () => {
  // header 数据
  const author = 'Plasticine';

  return (
    <header className="header">
      <h1>Hello {author}</h1>
    </header>
  );
};

// Main functional component
const Main = () => {
  // main 数据
  const likesCount = 666;

  return (
    <main style={{ backgroundColor: 'skyblue', fontSize: '24px' }}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis animi,
        tempora tenetur eos commodi, veritatis atque qui obcaecati reiciendis
        fugit nemo repellat architecto, impedit dolor aliquam saepe illum ut
        nobis?
      </p>
      <p>likes: {likesCount}</p>
      <p>1 + 1 = {1 + 1}</p>
    </main>
  );
};

// Footer functional component
const Footer = () => {
  // footer 数据
  const partners = ['mike', 'jack', 'plasticine'];
  const partnersFormatted = partners.map((partner) => (
    <li key={partner}>{partner}</li>
  ));
  const partnerInfo = {
    mike: '178cm',
    jack: '180cm',
    plasticine: '200cm',
  };

  return (
    <footer>
      <p>Copyright 2022</p>
      <p>{partnersFormatted}</p>
      <p>mike: {partnerInfo.mike}</p>
      <p>jack: {partnerInfo.jack}</p>
      <p>plasticine: {partnerInfo.plasticine}</p>
    </footer>
  );
};

// combine above components with App functional component
const App = () => {
  // 将三个 jsx 元素组合起来
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
