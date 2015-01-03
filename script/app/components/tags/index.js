var React = require("react"),
    Widget = require("../widget"),
    _ = require("underscore");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            moreVisible: false
        }
    },
    
    toggleMore: function() {
        this.setState({ moreVisible: !this.state.moreVisible });  
    },
    
    renderTags: function(start, end) {
        var tags = this.props.tags;
        if (tags.length === 0)
            return "";
            
        end = end || tags.length-1;
        
        var rendered = [];
        for (var i = start; i < end; i++)
            rendered.push(this.renderTag(tags[i]));
        return rendered;
    },
                          
    renderTag: function(tag) {
        return <a href={"?tag=" + tag.slug} key={tag.id} className="hover row block padding-top-5 padding-bottom-5">
            <div className="col-md-12">
                <span className="pull-left bold">{tag.name}</span>
                <span className="pull-right light">{tag.count}</span>
            </div>
        </a>;           
    },
    
    render: function() {
        return <Widget title="Tags">
            {this.renderTags(0, 5)}
            <div className={"more" + (this.state.moreVisible ? "" : " hidden")}>
                {this.renderTags(6)}
            </div>
            <div className="row">
                <div className="col-md-12 text-right spacing-top-10">
                    <a onClick={this.toggleMore}>{this.state.moreVisible ? "less" : "more"}...</a>
                </div>
            </div>
        </Widget>
    } 
});