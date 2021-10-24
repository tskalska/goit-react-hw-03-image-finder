import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery';

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
    </div>
    );
  }
}

export default App;
