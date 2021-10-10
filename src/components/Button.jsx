import React from 'react';
import './componentsStyles/Button.css'

export default function Button({onClickLoadMore}) {
  return ( 
    <button type="button" className="Loadmore-button" onClick={onClickLoadMore}> 
      <span className="SearchForm-button-label">Load more</span>
    </button> 
)}



      