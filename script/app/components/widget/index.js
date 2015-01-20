var React = require("react");

module.exports = React.createClass({
    render: function() {
        return <div className={"small-font spacing-top-10 " + (this.props.className || "") + " " + (this.props.hidden ? " hidden" : "")}>
            <h3 className="upper-case spacing-bottom-10">{this.props.title}</h3>
            {this.props.children}
        </div>;
    }
});
