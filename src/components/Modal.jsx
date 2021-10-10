import React from 'react';
import './componentsStyles/Modal.css'

// import * as basicLightbox from 'basiclightbox';


export default function Modal({src}) {
  return(
    <div className="modal">
      <img src={src} alt="" width="800" height="600"/>
      Picture
    </div>
  )
}
