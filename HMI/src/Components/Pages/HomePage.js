import imageFilm1 from '../../img/stormtrooper.jpg';
import imageFilm2 from '../../img/groot.jpg';
import clearPage from '../utils/render';

const renderHomePage = () =>{
    clearPage();
    renderImage(imageFilm1);
    renderImage(imageFilm2);
}


const main=document.querySelector('main');

function renderImage (imageUrl) {
    const divisionImage=document.createElement('div');
    const image=document.createElement('img');
    image.src=imageUrl;
    main.appendChild(divisionImage);
    divisionImage.appendChild(image);
}


export default renderHomePage;