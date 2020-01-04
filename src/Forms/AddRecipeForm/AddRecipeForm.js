import React from 'react';
import { withRouter } from 'react-router'
import './AddRecipeForm.css';
import FolderContext from '../../Contexts/FolderContext';
import FolderService from '../../Services/FolderService';
import config from '../../config';

class AddRecipe extends React.Component {
    state = {
        name: "",
        instructions: "",
        ingredients: "",
        folderSelect: "",
        folderId: "",
        formValid: false,
        nameValid: false,
        instructionsValid: false,
        ingredientsValid: false,
        folderSelectValid: false,
        validationMessage: null
    };

    static contextType = FolderContext;

    componentDidMount() {

        FolderService.getFolders()
            .then(this.context.setFolder)
            .catch(this.context.setError)
    }




    goBack = () => {
        this.props.history.goBack();
    }

    updateFormEntry(e) {
        const name = e.target.name;
        const value = e.target.value;
        let id;
        if (e.target.selectedOptions) {
            id = e.target.selectedOptions[0].id;
            this.setState({
                'folderId': id
            })
        }
        this.setState({
            [e.target.name]: e.target.value,

        }, () => { this.validateEntry(name, value) });
    }

    validateEntry(name, value) {
        let hasErrors = false;

        value = value.trim();
        if ((name === 'name') || (name === 'ingredients') || (name === 'instructions')) {
            if (value.length < 1) {
                hasErrors = true
            }

            else {
                hasErrors = false
            }
        }

        else if ((name === 'folderSelect') && (value === 'Select')) {
            hasErrors = true
        }

        else {
            hasErrors = false
        }

        this.setState({
            [`${name}Valid`]: !hasErrors,
        }, this.formValid);
    }

    formValid() {
        const { nameValid, instructionsValid, ingredientsValid, folderSelectValid } = this.state;
        if (nameValid && instructionsValid && ingredientsValid && folderSelectValid === true) {
            this.setState({
                formValid: true,
                validationMessage: null
            });
        }
        else {
            this.setState({
                formValid: !this.formValid,
                validationMessage: 'All fields are required.'
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, instructions, ingredients, folderId } = this.state;
        const recipe = {
            name: name,
            instructions: instructions,
            ingredients: ingredients,
            folderid: folderId,
        }

        this.setState({ error: null })
        


        fetch(`${config.API_ENDPOINT}/recipes`, {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                console.log(res.ok)
                if (!res.ok) {
                    return res.json().then(err => {
                        console.log(`Error is: ${err}`)
                        throw err
                    })
                }
                return res.json()
            })
            .then(data => {
                const recipeUrl = `/recipes/${data.folderid}`
                this.props.history.push(recipeUrl);
                this.setState({ error: null })
            })
            .catch(err => {
                this.setState({ err })
            })
    }


    render() {
        const { folders = [] } = this.context;

        const options = folders.map((folder) => {
            return (
                <option
                    key={folder.id}
                    id={folder.id}>
                    {folder.name}
                </option>
            )
        })
        return (
            <>
                <header>
                    <h2>Add Recipe</h2>
                </header>

                <form
                    className="addrecipe-form"
                    onSubmit={e => this.handleSubmit(e)}>
                    <h2 className="title">Add Recipe</h2>
                    <div className="form-section">
                        <label htmlFor="name">Recipe Name</label>
                        <input
                            type="text"
                            className="field"
                            name="name"
                            id="name"
                            aria-label="Name"
                            aria-required="true"
                            placeholder="Recipe Name"
                            onChange={e => this.updateFormEntry(e)} />
                    </div>
                    <div className="form-section">
                        <label htmlFor="content">Instructions</label>
                        <textarea
                            className="field"
                            name="instructions"
                            id="instructions"
                            aria-label="Instructions"
                            aria-required="false"
                            onChange={e => this.updateFormEntry(e)} />
                    </div>
                    <div className="form-section">
                        <label htmlFor="ingredients">Ingredients</label>
                        <input
                            type="text"
                            className="field"
                            name="ingredients"
                            id="ingredients"
                            aria-label="ingredients"
                            aria-required="true"
                            placeholder="Almond Milk"
                            onChange={e => this.updateFormEntry(e)} />
                        <input
                            type="text"
                            className="field"
                            name="ingredients"
                            id="ingredients-1"
                            aria-label="ingredients"
                            aria-required="true"
                            placeholder="Almond Milk"
                            onChange={e => this.updateFormEntry(e)} />
                        <input
                            type="text"
                            className="field"
                            name="ingredients"
                            id="ingredients-2"
                            aria-label="ingredients"
                            aria-required="true"
                            placeholder="Almond Milk"
                            onChange={e => this.updateFormEntry(e)} />
                        <input
                            type="text"
                            className="field"
                            name="ingredients"
                            id="ingredients-3"
                            aria-label="ingredients"
                            aria-required="true"
                            placeholder="Almond Milk"
                            onChange={e => this.updateFormEntry(e)} />
                        <input
                            type="text"
                            className="field"
                            name="ingredients"
                            id="ingredients-4"
                            aria-label="ingredients"
                            aria-required="true"
                            placeholder="Almond Milk"
                            onChange={e => this.updateFormEntry(e)} />
                    </div>
                    <div className="form-section">
                        <label htmlFor="folder-select">folder</label>
                        <select
                            type="text"
                            className="field"
                            name="folderSelect"
                            id="folder-select"
                            aria-label="folder"
                            aria-required="true"
                            ref={this.folderSelect}
                            onChange={e => this.updateFormEntry(e)}>
                            <option>Select</option>
                            {options}
                        </select>
                    </div>
                    <div className="buttons">
                        <button
                            type="button"
                            className="button"
                            onClick={() => this.goBack()}>
                            Cancel
                 </button>
                        <button
                            type="submit"
                            className="button"
                            disabled={!this.state.formValid}>
                            Save
                 </button>
                    </div>
                </form>
            </>
        )
    }
}

export default withRouter(AddRecipe)

