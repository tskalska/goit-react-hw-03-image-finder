import React from 'react';
import './Searchbar.css';


class Searchbar extends React.Component {
  state = {
    inputValue: ''
  }


  handleInputChange = (event) => {
    this.setState({
      inputValue: event.currentTarget.value, 
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState ({
      inputValue: ''
    });
    event.target.reset();
  }

  render(){
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
            onChange={this.handleInputChange}
            id={this.numberInputId}>
            </input>
          </form>
        </header>
      </div>
    );
  }
}

export default Searchbar;