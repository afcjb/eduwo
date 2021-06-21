import React, { Component } from "react";
import AppBar from "./AppBar";
import ImageContainer from "./ImageContainer";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import * as actions from "./redux/actions.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { namePrefix: "", sorted: false };
  }

  componentDidMount = () => {
    const { namePrefix } = this.state;
    const { sorted } = this.state;
    const { newSearch } = this.props;
    const { getCityImages } = this.props;
    newSearch(namePrefix, sorted);
    getCityImages();
  };

  handleSearch = (e) => {
    this.setState({ namePrefix: e.target.value });
    console.log(this.props);
    console.log(this.state);
  };

  toggleSorted = (e) => {
    this.setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.checked };
    });
  };

  render() {
    const { namePrefix } = this.state;
    const { sorted } = this.state;
    const { cities } = this.props;
    const { data } = cities;
    const { links } = cities;
    const { metadata } = cities;
    const { images } = this.props;
    const { newSearch } = this.props;

    return (
      <>
        <AppBar
          namePrefix={namePrefix}
          sorted={sorted}
          handleSearch={this.handleSearch}
          toggleSorted={this.toggleSorted}
          newSearch={newSearch}
        ></AppBar>
        <ImageContainer data={data} images={images}></ImageContainer>
        <Pagination links={links} metadata={metadata} newSearch={newSearch} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    details: state.details,
    images: state.images,
  };
};

export default connect(mapStateToProps, actions)(App);
