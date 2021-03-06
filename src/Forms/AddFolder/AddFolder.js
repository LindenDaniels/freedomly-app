import React from 'react';
import FolderContext from '../../Contexts/FolderContext';
import config from '../../config';
import PropTypes from 'prop-types';

export default class AddFolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErrors: false,
            folder_name: "",
            formValid: false,
            folder_nameValid: false,
            validationMessage: "",
        };
    }

    static contextType = FolderContext;

    goBack = () => {
        this.props.history.goBack();
    }

    updateFormEntry(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [e.target.name]: e.target.value
        }, () => { this.validateEntry(name, value) });
    }

    validateEntry(name, value) {
        let inputErrors;
        let hasErrors = this.state.hasErrors;

        value = value.trim();
        if (value < 1) {
            inputErrors = `${name} is required.`;
        }

        else {
            inputErrors = '';
            hasErrors = false;
        }
        this.setState({
            validationMessage: inputErrors,
            [`${name}Valid`]: !hasErrors,
            hasErrors: !hasErrors
        }, this.formValid);
    }

    formValid() {
        const { folder_nameValid } = this.state;
        if (folder_nameValid === true) {
            this.setState({
                formValid: true
            });
        }
        else {
            this.setState({
                formValid: !this.formValid
            }
            )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { folder_name } = this.state;
        const folder = {
            folder_name
        }

        this.setState({ error: null })
        fetch(`${config.API_ENDPOINT}/folders`, {
            method: 'POST',
            body: JSON.stringify(folder),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        console.log(`Error is: ${error}`)
                        throw error
                    })
                }
                return res.json()
            })
            .then(data => {
                this.goBack()
                this.context.addFolder(data)
                const debtUrl = `/folders/${data.folderid}`
                this.props.history.push(debtUrl);
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    render() {

        return (
            <>
                <header>
                    <h1>Add Folder</h1>
                </header>
                <form
                    className="folder-form"
                    onSubmit={e => this.handleSubmit(e)}>
                    <div className="form-section">
                        <label htmlFor="folder_name">Title</label>
                        <input
                            type="text"
                            className="field"
                            name="folder_name"
                            id="folder_name"
                            aria-label="Title"
                            aria-required="true"
                            placeholder="Folder Title"
                            aria-placeholder="Folder Title"
                            onChange={e => this.updateFormEntry(e)} />
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
                            disabled={this.state.formValid === false}>
                            Save
                 </button>
                        {}
                    </div>
                </form>
            </>
        )
    }
}


AddFolder.propType = {
    push: PropTypes.func.isRequired
};