import React, { Component } from 'react';

class Index extends Component {
    state = {
        keyword: ''
    }
    inputRef = React.createRef()
    render() {
        return (

            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={this.inputRef} onChange={this.updateSearchKeyword} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.handleSearchAction}>Search</button>
                </div>
            </section>
        );
    }
    handleSearchAction = (params) => {
        console.log(this.state);
    }
    updateSearchKeyword = (event) => {
        this.setState({ keyword: event.target.value })

    }
}

export default Index;
