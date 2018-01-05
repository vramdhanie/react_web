import React, { Component } from 'react';
import PropTypes from 'prop-types';

import marked  from 'marked';

export class Markdown extends Component {
    constructor(props){
        super(props);
        this.output = marked(this.props.text)
    }

    render(){
        return (
            <div className="md" dangerouslySetInnerHTML={{__html:this.output}}>

            </div>
        );
    }
}

Markdown.propTypes = {
    text: PropTypes.string
};

Markdown.defaultProps = {
    text:'** EMPTY PAGE **'
};

export default Markdown;
