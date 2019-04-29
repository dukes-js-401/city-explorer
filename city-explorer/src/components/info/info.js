import React from 'react';




class Info extends React.Component {
  render() {
    return (
      //hidden until a city is entered
      <div> 
        <section>

          <p>section for weather</p>
        </section>
        <section>
          <p>section for Yelp</p>
        </section>
        <section>
          <p>section for Meetup</p>
        </section>
        <section>
          <p>section for movies</p>
        </section>
        <section>
          <p>section for trails</p>
        </section>

      </div>
    )
  }
}


// componentDidMount() {
//   fetch(https://city-explorer-backend.herokuapp.com)
// }

export default Info;