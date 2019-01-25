import React from "react";

class IngredientAdder extends React.Component {
  state = {
    newIngredient: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.newIngredient}/>
        <button type="submit">Add ingredient</button>
      </form>
    );
  }

  handleChange = event => {
    const updatedIngredient = event.target.value;
    this.setState({ newIngredient: updatedIngredient });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addIngredient(this.state.newIngredient)
    this.setState({ newIngredient: '' });
  }
}

export default IngredientAdder;
