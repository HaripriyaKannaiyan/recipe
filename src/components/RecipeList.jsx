// src/components/RecipeList.js
import React from "react";

const RecipeList = ({ recipes }) => {
    return (
        <div style={listContainerStyle}>
            <h2>Recipes</h2>
            {recipes.map((recipe, index) => (
                <div key={index} style={recipeBoxStyle}>
                    <h3>{recipe.title}</h3>
                    <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                    <p><strong>Instructions:</strong> {recipe.instructions}</p>
                </div>
            ))}
        </div>
    );
};

// Inline styles for RecipeList
const listContainerStyle = { marginTop: "2em" };
const recipeBoxStyle = { border: "1px solid #ddd", padding: "1em", marginBottom: "1em", borderRadius: "8px" };

export default RecipeList;
