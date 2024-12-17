import taqueriaImg from './assets/about/taqueria.jpg'

const about = document.createElement('div');
about.className = about;

// story
const story = document.createElement('div');
story.className = 'story';

const storyImg = document.createElement('img');
storyImg.src = taqueriaImg;
story.appendChild(storyImg);

const storyDiv = document.createElement('div');

const storyDivP1 = document.createElement('p');
storyDivP1.appendChild(document.createTextNode('Welcome to '));
const emText = document.createElement('em');
emText.textContent = 'El Tacazo';
storyDivP1.appendChild(emText);
storyDivP1.appendChild(document.createTextNode(', where we bring the authentic flavors of Mexico right to your plate! Our taqueria is passionate about serving fresh, high-quality ingredients in every taco, burrito, and quesadilla. With traditional recipes passed down through generations and a focus on bold, vibrant flavors, we offer a true taste of Mexican cuisine.'));

const storyDivP2 = document.createElement('p');
storyDivP2.appendChild(document.createTextNode('Whether you\'re here for a quick bite or to enjoy a meal with friends and family, our welcoming atmosphere and mouthwatering dishes are sure to leave you craving more. At '));
storyDivP2.appendChild(emText);
storyDivP2.appendChild(document.createTextNode(', every meal is a celebration of food, culture, and community!'));

storyDiv.appendChild(storyDivP1);
storyDiv.appendChild(storyDivP2);

about.appendChild(story);

// contact
const contact = document.createElement('div');
contact.className = 'contact';

const hours = document.createElement('div');
hours.className = 'hours';
const h1Hours = document.createElement('h1');
h1Hours.appendChild(document.createTextNode('Hours'));
hours.appendChild(h1Hours);

const hoursUl = document.createElement('ul');
const listText = ['Monday: Closed', 'Tuesday-Thursday: 10am - 9pm', 'Friday - Saturday: 10am - 2am', 'Sudnday: 10am - 9pm'];
for(let i = 0; i < 4; i++){
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(listText[i]));
    hoursUl.appendChild(listItem);
}
hours.appendChild(hoursUl);
contact.appendChild(hours);

const location = document.createElement('div');
location.className = 'location';
const locationH1 = document.createElement('h1');
locationH1.appendChild(document.createTextNode('Locations'));
location.appendChild(locationH1);
const locationP = document.createElement('p');
locationP.appendChild(document.createTextNode('We have several locations!'));
location.appendChild(locationP);
const locationUl = document.createElement('ul');
const locationListText = ['123 Anyplace Rd, AyCity State', '456 Someplace Ave, SomeCity State', '789 Nowhere Blvd, ThatCity State'];
for(let i = 0; i < 3; i++){
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(locationListText[i]));
    locationUl.appendChild(listItem);
}
location.appendChild(locationUl);
contact.appendChild(location);
about.appendChild(contact);


export {about};