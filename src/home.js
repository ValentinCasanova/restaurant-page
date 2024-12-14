import tacos1Img from './assets/home/tacos1.jpg';
import tacos3Img from './assets/home/tacos3.jpg';
import tacos4Img from './assets/home/tacos4.jpg';
import tacos5Img from './assets/home/tacos5.jpg';

const home = document.createElement('div');
home.appendChild(document.createElement('span'));

const homeDiv = document.createElement('div');
homeDiv.className = 'home';

const homeTitle = document.createElement('div');
homeTitle.className = 'title';
const restName = document.createElement('h1');
restName.appendChild(document.createTextNode("El Tacazo"));
homeTitle.appendChild(restName);
homeDiv.appendChild(homeTitle);

const body = document.createElement('div');
body.className = 'body';
const titleSub = document.createElement('p');
titleSub.appendChild(document.createTextNode('Home of the best tacos in town!'));
body.appendChild(titleSub);

const body1 = document.createElement('div');
const body1Img = document.createElement('img');
body1Img.src = tacos1Img;
body1.appendChild(body1Img);
const body1P = document.createElement('p');
body1P.appendChild(document.createTextNode('At El Tacazo, we believe every taco should be a masterpiece. That’s why we use only the freshest ingredients, sourced daily to ensure bold, vibrant flavors in every bite. From crisp vegetables to perfectly seasoned meats, our commitment to quality shines through, creating tacos that are as wholesome as they are delicious. Taste the difference freshness makes!'))
body1.append(body1P);
body.append(body1);

const body2 = document.createElement('div');
body2.id = 'tacos-specials';
const body2H = document.createElement('h2');
body2H.appendChild(document.createTextNode('Taco Tuesday Special'));
body2.append(body2H);
const body2Div = document.createElement('div');
body2Div.className = 'taco-specials';
const body2Img1 = document.createElement('img');
body2Img1.src = tacos3Img;
const body2Img2 = document.createElement('img');
body2Img2.src = tacos4Img;
const body2Img3 = document.createElement('img');
body2Img3.src = tacos5Img;
body2Div.appendChild(body2Img1);
body2Div.appendChild(body2Img2);
body2Div.appendChild(body2Img3);
body2.appendChild(body2Div);
const body2P = document.createElement('p');
body2P.appendChild(document.createTextNode('Tacos $1.99 all day!'));
body2.appendChild(body2P);
body.appendChild(body2);

homeDiv.append(body);
homeDiv.append(document.createElement('span'));
home.appendChild(homeDiv);
home.appendChild(document.createElement('span'));
home.className = 'content';

export {home};