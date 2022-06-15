import React, { Component } from 'react'
import { Link, Switch } from 'react-router-dom';

export default class New extends Component {
    state = {
        listObj: {
            title: "",
            genre: "",
            stock: "",
            rate: ""
        }
    }

    handleChangeValue = (e) => {
        let id = e.currentTarget.id;
        let value = e.currentTarget.value;

        let newObj = { ...this.state.listObj };
        newObj[id] = value;

        this.setState({
            listObj: newObj
        })
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.addMovie(this.state.listObj);
    }
    render() {
        let { title, genre, stock, rate } = this.state;
        return (
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="display-6">Title</label>
                    <input type="text" id="title" value={title} className="form-control lead" onChange={this.handleChangeValue} />
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className="display-6">Genre</label>
                    <select id="genre" value={genre} className="form-control lead" onChange={this.handleChangeValue}>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Thriller">Thriller</option>
                    </select>

                </div>
                <div className="mb-3">
                    <label htmlFor="stock" className="display-6">Stock</label>
                    <input type="number" value={stock} id="stock" className="form-control lead" onChange={this.handleChangeValue} />

                </div>
                <div className="mb-3">
                    <label htmlFor="rate" className="display-6">Rate</label>
                    <input id="rate" type="number" value={rate} className="form-control lead" onChange={this.handleChangeValue} />
                </div>

                <button type="submit" className="submit-btn" onClick={this.handleSubmitForm}>
                    <Link to="/" class="btn btn-primary">Submit</Link>
                </button>
            </form>
        )
    }
}
