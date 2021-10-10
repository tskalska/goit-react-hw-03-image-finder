import React from 'react';
import './componentsStyles/ImageGallery.css';
import './componentsStyles/Loader.css';
import pictureApi from './pictureApi';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import Loader from "react-loader-spinner";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    overflow: 'hidden',
  },
};

class ImageGallery extends React.Component {
  state = {
    pictures: [],
    currentPage: '',
    loading: false,
    modal: false,
    picture: null
  }

  onClickLoadMore = event => {
    this.setState({
      currentPage: this.state.currentPage + 1,    
    })
  }

  onClickOpenModal = picture => {
    console.log(picture);
    this.setState ({
      modal: true,
      picture
    })
  }

  winScroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  componentDidUpdate(prevProps, prevState) {

    const newSearch = this.props.serchRequest !== prevProps.serchRequest;
    
    const nextPage = this.state.currentPage !== prevState.currentPage && this.state.currentPage!==1;

    if (newSearch) {
      
      this.setState({
        pictures: [],
        currentPage: 1,
        loading: true,
      });

      pictureApi(1, this.props.serchRequest)
        .then(
          data => {this.setState({
            pictures: [
              ...data.hits.map(
                ({id, webformatURL,largeImageURL}) => ({id, webformatURL,largeImageURL})
              )
            ]
          })
        })
        .finally(() => this.setState({ loading:false }))
    }

    if (nextPage) {

      this.setState({
        loading: true,
      });
      
      pictureApi(this.state.currentPage, this.props.serchRequest)
        .then(
          data => { this.setState({
            pictures: [
              ...this.state.pictures,
              ...data.hits.map(
                ({id, webformatURL,largeImageURL}) => ({id, webformatURL,largeImageURL})
              )
            ]
          })
          this.winScroll();
        })
        .finally(() => this.setState({ loading:false }))
    }

  }

  
  render(){

    return(
      <div>
        <ul className="ImageGallery">{
          this.state.pictures.map(picture=>
            <ImageGalleryItem
              picture={picture}
              onClickOpenModal={this.onClickOpenModal}
            />
          )}
        </ul>
        
        {this.state.pictures.length >= 12 &&
          <Button 
            onClickLoadMore={this.onClickLoadMore} 
          /> 
        }

        {this.state.loading && 
          <Loader className="imgLoader"
            type="Grid" color="#00BFFF" height={80} width={80}
          /> 
        }

      {this.state.picture &&
        <Modal
          preventScroll={true}
          isOpen={this.state.modal}
          onRequestClose={() => this.setState({
            modal: false,
            picture: null
          })}
           style={customStyles}
        >
            <img src={this.state.picture.largeImageURL} alt="Error" className="imgModal"></img>
        </Modal>
      }
      </div>
    );
  }
}

export default ImageGallery;