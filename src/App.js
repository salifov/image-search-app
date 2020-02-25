import React from "react";
import ImageSearch from './ImageSearch/ImageSearch';
import ImageList from './ImageList/ImageList';

const API_KEY = "15384835-6343929d818611b4933d5c71d";

class App extends React.Component {

  state = {
    images: [],
    error: null
  }

  handleGetRequest = async (e) => {

    e.preventDefault();

    const searchItem = e.target.elements.searchValue.value;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchItem}&image_type=photo`;

    const request = await fetch(url);
    const response = await request.json();
    
    if (!searchItem) {
      this.setState({ error: "Please provide a value." })
    } else {
      this.setState({ images: response.hits, error: null });
    }
    
  }

  render() {
    return (
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest} />

        {
          this.state.error !== null ? 
          <div style={{color: "#fff", textAlign:"center"}}>{this.state.error}</div> : 
          <ImageList images={this.state.images} />
        }

      </div>
    );
  }
}

export default App