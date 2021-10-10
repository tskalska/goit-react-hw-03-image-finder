import React from 'react';
import './components/componentsStyles/App.css';
import Searchbar from './components/Searchbar'
import ImageGallery from './components/ImageGallery';

class App extends React.Component  {
  state = {
    picture: ''
  }

  formSubmitHandler = pictureName => {
    if(this.state.picture.trim ===''){
      alert('Введите название изображения')
      return;
    }
    this.setState ({ picture: pictureName.toLowerCase()});
  }


  render(){
    return (
    <div>
        <Searchbar
         onSubmit={ this.formSubmitHandler}
        /> 
        <ImageGallery 
          serchRequest = {this.state.picture}>
        </ImageGallery> 
        
      {/* 
     
      
      <Modal /> */}
    </div>
    );
  }
}

export default App;
