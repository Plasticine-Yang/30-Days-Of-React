import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

// header 数据
const author = 'Plasticine';

// main 数据
const likesCount = 666;

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

// 创建三个 jsx 元素
const header = (
  <header className="header">
    <h1>Hello {author}</h1>
  </header>
);

const main = (
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

const footer = (
  <footer>
    <p>Copyright 2022</p>
    <p>{partnersFormatted}</p>
    <p>mike: {partnerInfo.mike}</p>
    <p>jack: {partnerInfo.jack}</p>
    <p>plasticine: {partnerInfo.plasticine}</p>
  </footer>
);

// 将三个 jsx 元素组合起来
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

ReactDOM.render(app, rootElement);
