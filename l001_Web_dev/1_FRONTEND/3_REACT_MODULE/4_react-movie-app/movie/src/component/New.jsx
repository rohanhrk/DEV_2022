import React, { Component } from 'react'

export default class New extends Component {
    render() {
        return (
            <form>
                <div class="mb-3">
                    <label htmlFor="title" class="form-label">Title</label>
                    <input type="text" id="title" class="form-control" />
                </div>
                <div class="mb-3">
                    <label htmlFor="genre" class="form-label">Genre</label>
                    <select id="genre" class="form-control">
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Thriller">Thriller</option>
                    </select>

                </div>

                <div class="mb-3">
                    <label htmlFor="stock"  >Stock</label>
                    <input type="number" id="stock"  class="form-control" />
                    
                </div>
                <div class="mb-3">
                    <label  htmlFor="rate">Rate</label>
                    <input type="number" id="rate"  class="form-control"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}
