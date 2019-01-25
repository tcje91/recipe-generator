import React, { Component } from 'react';
import './App.css';
import IngredientAdder from './components/IngredientAdder';
import IngredientList from './components/IngredientList';
import Recipe from './components/Recipe';
import GenerateButton from './components/GenerateButton';
import ResetButton from './components/ResetButton';

class App extends Component {

  state = {
    ingredients: [],
    showRecipe: false,
  }
  render() {
    return (
      <div className="App">
        <h1>Recipe Generator</h1>
        <IngredientAdder addIngredient={this.addIngredient}/>
        <IngredientList ingredients={this.state.ingredients} removeIngredient={this.removeIngredient}/>
        <GenerateButton changeState={this.changeState} />
        <Recipe ingredients={this.state.ingredients} showRecipe={this.state.showRecipe}/>
        <ResetButton resetState={this.resetState}/>
      </div>
    );
  }

  addIngredient = (newIngedient) => {
    this.setState(prevState => {
      return {
        ingredients: [...prevState.ingredients, newIngedient]
      }
    })
  }

  removeIngredient = ingredientToRemove => {
    this.setState(prevState => {
      return {
        ingredients: prevState.ingredients.filter(ingredient => ingredient !== ingredientToRemove)
      }
    })
  }

  changeState = () => this.setState({ showRecipe: true })

  resetState = () => this.setState({ ingredients: [], showRecipe: false })
}

export default App;
