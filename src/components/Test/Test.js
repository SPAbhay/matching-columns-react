import React from 'react';
import './Test.css';
import Columns from "../Columns/Column";
import Button from "../../UI/Button/Button";

const Test = () => {


    return (
        <div className="content">
            <div className="content-start">
                <h1 className="test-name">Test Name</h1>
                <p className="test-marks">15 Marks</p>
            </div>
            <div className="content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est dolor, tempus nec augue nec, mattis
                venenatis mauris. Aliquam erat volutpat. Nam eget velit eget leo porta facilisis. Vivamus bibendum diam
                lorem. Phasellus justo nisl, faucibus et neque vitae, auctor ullamcorper dui. Fusce tempor tellus ipsum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est dolor, tempus nec augue nec, mattis
                venenatis mauris. Aliquam erat volutpat. Nam eget velit eget leo porta facilisis. Vivamus bibendum diam
                lorem. Phasellus justo nisl, faucibus et neque vitae, auctor ullamcorper dui. Fusce tempor tellus ipsum.
            </div>

            <Columns/>
            <div className="footer">
                <Button>Hoya</Button>
                <Button className="end-test">End Test</Button>
            </div>

        </div>
    );
};

export default Test;