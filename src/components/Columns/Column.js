import React from 'react';
import './Column.css';
import { useRef } from "react";
import {useState} from "react";

const Column = () => {
    const [answerArr, setAnswerArr] = useState([]);

    var col1_selected = false;
    var col2_selected = false;
    // const [cn1, setCn1] = useState('');
    // const [cn2, setCn2] = useState('');
    var cn1 = '';
    var cn2 = '';

    const assignRandomColour = () =>{
        return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    }

    const resetVars = () =>{
        cn1.style.borderWidth='0.25px';
        cn2.style.borderWidth='0.25px';
        cn1 = '';
        cn2 = '';
        col1_selected = false;
        col2_selected = false;
    }


    const join1 = (e) =>{
        col1_selected = true;
        cn1 = e.target;
        cn1.style.borderWidth = '0.2rem';
        if (col2_selected===true)
        {
            const randomCol = assignRandomColour();
            cn1.style.backgroundColor = randomCol;
            cn2.style.backgroundColor = randomCol;
            resetVars();
        }

    }

    const join2 = (e) =>{
        col2_selected = true;
        cn2 = e.target;
        cn2.style.borderWidth = '0.2rem';
        if (col1_selected===true)
        {

            // cn1.classList.add('bg-yellow');
            // cn2.classList.add('bg-yellow');
            const randomCol = assignRandomColour();
            cn1.style.backgroundColor = randomCol;
            cn2.style.backgroundColor = randomCol;
            resetVars();
        }
    }


    return (
        <div className="columns">
            <div className="column column-1">
                <div onClick={join1} className="row box1">Lorem ipsum dolor sit amet, consectetur</div>
                <div onClick={join1} className="row box2">Lorem ipsum dolor sit amet, consectetur</div>
                <div onClick={join1} className="row box3">Lorem ipsum dolor sit amet, consectetur</div>
                <div onClick={join1} className="row box4">Lorem ipsum dolor sit amet, consectetur</div>
            </div>

            <div className="column column-2">
                <div onClick={join2} className="row box1">Lorem ipsum dolor sit amet, consectetur</div>
                <div onClick={join2} className="row box2">Lorem ipsum dolor sit amet, consectetur</div>
                <div onClick={join2} className="row box3">Lorem ipsum dolor sit amet, consectetur</div>
                <div onClick={join2} className="row box4">Lorem ipsum dolor sit amet, consectetur</div>
            </div>
        </div>
    );
};

export default Column;