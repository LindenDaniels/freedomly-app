import React from 'react';
import { withRouter } from 'react-router'
import './AddDebtForm.css';
import FolderContext from '../../Contexts/FolderContext';
import FolderService from '../../Services/FolderService';
import config from '../../config';

class AddDebt extends React.Component {
    state = {
        debt_name: "",
        debt_amount: "",
        folderSelect: "",
        folderId: "",
        formValid: false,
        debt_nameValid: false,
        debt_amountValid: false,
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

        const debt_name = e.target.debt_name;
        const debt_amount = e.target.debt_amount;
        const value = e.target.value;
        let id;
        if (e.target.selectedOptions) {
            id = e.target.selectedOptions[0].id;
            this.setState({
                'folderId': id
            })
        }
        this.setState({
            [e.target.debt_name]: e.target.value,

        }, () => {

            const x = value;
            const y = debt_name;
            debugger;
            this.validateEntry(debt_name, debt_amount, value)
        });
    }

    validateEntry(debt_name, debt_amount, value) {
        let hasErrors = false;
        value = value.trim();
        if ((debt_name === 'debt_name') || (debt_amount === 'debt_amount')) {
            if (value.length < 1) {
                hasErrors = true
            }

            else {
                hasErrors = false
            }
        }

        else if ((debt_name === 'folderSelect') && (value === 'Select')) {
            hasErrors = true
        }

        else {
            hasErrors = false
        }

        this.setState({
            [`${debt_name}Valid`]: !hasErrors,
        }, this.formValid);
    }

    formValid() {
        const { debt_nameValid, debt_amountValid, folderSelectValid } = this.state;
        if (debt_nameValid && debt_amountValid && folderSelectValid === true) {
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
        const { debt_name, debt_amount, folderId } = this.state;
        const debt = {
            debt_name: debt_name,
            debt_amount: debt_amount,
            folderid: folderId,
        }

        this.setState({ error: null })



        fetch(`${config.API_ENDPOINT}/debts`, {
            method: 'POST',
            body: JSON.stringify(debt),
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
                const debtUrl = `/debts/${data.folderid}`
                this.props.history.push(debtUrl);
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
                    {folder.debt_name}
                </option>
            )
        })
        return (
            <>
                <header>
                    <h2>Add Debt</h2>
                </header>

                <form
                    className="adddebt-form"
                    onSubmit={e => this.handleSubmit(e)}>
                    <h2 className="title">Add Debt</h2>
                    <div className="form-section">
                        <label htmlFor="debt_name">Debt Name</label>
                        <input
                            type="text"
                            className="field"
                            debt_name="debt_name"
                            id="debt_name"
                            aria-label="Name"
                            aria-required="true"
                            placeholder="Debt Name"
                            onChange={e => this.updateFormEntry(e)} />
                    </div>
                    <div className="form-section">
                        <label htmlFor="content">Debt Amount</label>
                        <textarea
                            className="field"
                            debt_amount="debt_amount"
                            id="debt_amount"
                            aria-label="Debt Amount"
                            aria-required="false"
                            onChange={e => this.updateFormEntry(e)} />
                    </div>

                    <div className="form-section">
                        <label htmlFor="folder-select">Folder</label>
                        <select
                            type="text"
                            className="field"
                            debt_name="folderSelect"
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

export default withRouter(AddDebt)

