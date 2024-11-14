import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !ingredients || !instructions) return;

        const newRecipe = { title, ingredients, instructions };
        setRecipes([...recipes, newRecipe]);

        // Reset form fields
        setTitle('');
        setIngredients('');
        setInstructions('');
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Recipe Sharing Website</h1>
            <div className="form-container">
                <h2>Add a New Recipe</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Recipe Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        className="input-field"
                        placeholder="Ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                    ></textarea>
                    <textarea
                        className="input-field"
                        placeholder="Instructions"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit" className="add-button">Add Recipe</button>
                </form>
            </div>

            <div className="recipe-list">
                <h2>Recipe List</h2>
                {recipes.length === 0 ? (
                    <p>No recipes added yet!</p>
                ) : (
                    recipes.map((recipe, index) => (
                        <div key={index} className="recipe-card">
                            <h3>{recipe.title}</h3>
                            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                            <p><strong>Instructions:</strong> {recipe.instructions}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default App;
