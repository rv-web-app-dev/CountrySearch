import React from 'react'

const Button = (props) => {
    return (
        <div class="container form-control-lg">
        <div class="row">
            <div class="col">
                <label for="searchBar1">Welcome to the country search app..</label>
            </div>
        </div>
        <div class="row">
            <div class="col-9">
                <input class="form-control" type="text" placeholder="Type here to search..." aria-label="Search"
                    id="searchBar1" onChange={props.handleSearch()} value={props.value}/>
            </div>
        </div>
    </div>
    )
}

export default Button