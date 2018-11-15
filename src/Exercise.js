import React, { Component } from 'react';
import exercise from './exercise.gif';

export class Exercise extends Component {
    render() {
        return (
            <div className="append">
                <img src={exercise} className="img" alt="exercise" />
            </div>
        )
    }
}