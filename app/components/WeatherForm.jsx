var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.vaule = '';
            this.props.onSearch(location);
        }

    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location" placeholder="Search weather by city"/>
                    <button className="button expanded hollow">get weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;