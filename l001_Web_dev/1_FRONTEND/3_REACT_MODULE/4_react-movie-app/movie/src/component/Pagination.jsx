import React, { Component } from 'react'

// 3. pagination page =>
export default class Pagination extends Component {
    render() {
        let { pageArr, currentPageNo } = this.props;

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        pageArr.map((page) => {
                            return (
                                <li className={page === currentPageNo ? "page-item active" : "page-item"} key={page * Math.random()} style={{ cursor: "pointer" }}><a className="page-link" onClick={() => { this.props.handlePagination(page) }}>{page}</a></li>
                            )
                        })
                    }
                </ul>
            </nav>
        )
    }
}
