var React = require("react");

module.exports = React.createClass({
    render: function() {
        return <div className={"padding-15 box-sizing pull-left full-width small-font " + this.props.className + " " + (this.props.hidden ? " hidden" : "")}>
            <h3 className="upper-case spacing-bottom-10">{this.props.title}</h3>
            {this.props.children}
        </div>;
    }
});