import React from 'react';
import './componentsStyles/ImageGalleryItem.css';



export default function ImageGalleryItem({picture, onClickOpenModal}) {
  return(
    <li className="ImageGalleryItem" key={picture.id} onClick={() => onClickOpenModal(picture)}>
      <img src={picture.webformatURL} alt="" className="ImageGalleryItem-image"/>
    </li>
  );
}