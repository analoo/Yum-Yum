import React from "react";


function AddIngredient(props) {
    return (
        <div className="row">
            <input type="text" className="form-control col-md-3" id="exampleFormControlInput1"
                // value={getRecipe.ingredients}
                name="ingredients"
                // onChange={e => setRecipe({ ...getRecipe, ingredients: e.target.value })}
                placeholder="Ingredients Name" />
            <input type="text" className="form-control col-md-3" id="exampleFormControlInput1"
                // value={getRecipe.ingredients}
                name="ingredients"
                // onChange={e => setRecipe({ ...getRecipe, ingredients: e.target.value })}
                placeholder="Quantity" />
            <input type="text" className="form-control col-md-3" id="exampleFormControlInput1"
                // value={getRecipe.ingredients}
                name="ingredients"
                // onChange={e => setRecipe({ ...getRecipe, ingredients: e.target.value })}
                placeholder="Measurement" />
        </div>
    )
}

export default AddIngredient;