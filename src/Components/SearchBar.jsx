import React from 'react';

class SearchBar extends React.Component {
    state = {
        value: " "
    }

    onChangeHandler = e => {
        this.setState({
            value: e.target.value
        });
    };


    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <input style={{ width: '18em' , marginTop: 10}}
                        className="form-control searchField"
                        type="text" 
                        placeholder="Find Books..." 
                        onChange={this.onChangeHandler}
                    />
                </div>
            </form>
        )
    }
}

export default SearchBar;