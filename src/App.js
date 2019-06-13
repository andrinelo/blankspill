import React, { Component } from 'react';
import './App.css';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        
        this.onChange = this.onChange.bind(this);
    }

    onChange(newValue) {
        console.log('change', newValue);
    }

    render() {
        return (
            <div>
                <AceEditor
                    mode="javascript"
                    theme="monokai"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{
                        $blockScrolling: true
                    }}
                />
            </div>
        );
    }
}