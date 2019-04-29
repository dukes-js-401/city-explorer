import React from 'react';
import './form.scss';

class Form extends React.Component {
  render() {
    return (
      <>
        <form>
          <label>Search for a location</label>
          <input type="text" placeholder="Enter a location here" />
          <button type="submit">Explore!</button>
        </form>
      </>
    )
  };
}

export default Form;