// src/components/RecipeForm.js
import React, { useState } from "react";

const RecipeForm = ({ addRecipe }) => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !ingredients || !instructions) return;

        // Pass the new recipe object back to the parent component
        addRecipe({ title, ingredients, instructions });
        
        // Clear the form fields
        setTitle("");
        setIngredients("");
        setInstructions("");
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2>Add a New Recipe</h2>
            <input
                type="text"
                placeholder="Recipe Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={inputStyle}
                required
            />
            <textarea
                placeholder="Ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                style={textareaStyle}
                required
            ></textarea>
            <textarea
                placeholder="Instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                style={textareaStyle}
                required
            ></textarea>
            <button type="submit" style={buttonStyle}>Add Recipe</button>
        </form>
    );
};

// Inline styles for RecipeForm
const formStyle = { marginBottom: "1em" };
const inputStyle = { display: "block", marginBottom: "0.5em", padding: "0.5em", width: "100%" };
const textareaStyle = { display: "block", marginBottom: "0.5em", padding: "0.5em", width: "100%", height: "80px" };
const buttonStyle = { padding: "0.5em 1em", background: "#28a745", color: "white", border: "none", cursor: "pointer" };

export default RecipeForm;
