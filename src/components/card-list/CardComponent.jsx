import { Component } from "react";
import './card.css'

class CardList extends Component {
  render() {
    const { cats } = this.props;

    return (
      <div className="cards">
        {cats.map((cat) => {
          const { name, email, id } = cat;

          return (
            <div className="card-contain" key={id}>
              <img src={`https://robohash.org/LC${id}.png?set=set4&size=200x200`} alt={`monster ${name}`} />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })};
      </div>
    )
  }
}

export default CardList;