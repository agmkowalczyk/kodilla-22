import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
// import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et molestie diam. Maecenas ac velit vel lectus mollis dignissim a vitae ligula. Integer iaculis nisl non lacus facilisis accumsan. Ut tristique varius tellus, id blandit arcu mollis nec. Curabitur lacinia, diam ac porta efficitur, nunc metus euismod augue, ut porta odio ipsum et lorem. Proin iaculis eros justo, a cursus massa fermentum at. Nunc tempus enim nibh, interdum consectetur dui varius sit amet. Nam euismod enim id gravida mattis. Ut vel venenatis augue. Integer imperdiet lorem neque, at eleifend eros lacinia eget. Cras tempus eget ipsum ut sodales. Integer eu felis ut mi congue aliquet. Nullam ultrices eu nunc quis porta. Nullam fringilla leo a dapibus convallis.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
