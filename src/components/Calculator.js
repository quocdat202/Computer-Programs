import React, { useState } from 'react'
import '../App.css';
import sou from '../Audio/sou.mp3';
export default function Calculator() {
    const [cal, setCal] = useState("");
    const [result, setResult] = useState("");

    const updateCal = (e) => {
        setCal(cal.concat(e.target.name).toLocaleString());
        document.getElementById('play').play();
    }

    const clear = () => {
        setCal("");
        setResult("");
        document.getElementById('play').play();
    }

    const results = () => {
        document.getElementById('play').play();
        try {
            setResult(new Intl.NumberFormat({ style: 'currency', currency: 'VND' }).format(eval(cal).toString()));
        }
        catch {
            setResult("Error");
        }
    }

    return (
        <div id="container-full" className="container">
            <div id="content" className="content">
                <audio id="play" type="audio/mp3" src={sou}></audio>
                <div className="title-body">Calculator</div>
                <div className="content-top">
                    <div className="show-input">{cal || 0}</div>
                    <div className="show-result"><p>{result || ' '}</p>
                    </div>
                </div>

                <div className="item-content">
                    <div className="item-button">
                        <button className="" name="%" onClick={updateCal}>
                            %
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" name="(" onClick={updateCal}>
                            (
                        </button>
                    </div>


                    <div className="item-button">
                        <button className="" name=")" onClick={updateCal}>
                            )
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" name="/" onClick={updateCal}>
                            ÷
                        </button>
                    </div>
                </div>

                <div className="item-content">
                    <div className="item-button">
                        <button className="" name="7" onClick={updateCal}>
                            7
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" name="8" onClick={updateCal}>
                            8
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" name="9" onClick={updateCal}>
                            9
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" name="*" onClick={updateCal}>
                            ×
                        </button>
                    </div>
                </div>

                <div className="item-content">
                    <div className="item-button">
                        <button className="" name="4" onClick={updateCal}>
                            4
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" name="5" onClick={updateCal}>
                            5
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" name="6" onClick={updateCal}>
                            6
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" name="-" onClick={updateCal}>
                            -
                        </button>
                    </div>
                </div>

                <div className="item-content">
                    <div className="item-button">
                        <button className="" name="1" onClick={updateCal}>
                            1
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" name="2" onClick={updateCal}>
                            2
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" name="3" onClick={updateCal}>
                            3
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" name="+" onClick={updateCal}>
                            +
                        </button>
                    </div>
                </div>


                <div className="item-content">
                    <div className="item-button">
                        <button className="" onClick={clear}>
                            <span className="">AC</span>
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" name="0" onClick={updateCal}>
                            0
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" name="." onClick={updateCal}>
                            .
                        </button>
                    </div>

                    <div className="item-button">
                        <button className="" onClick={results}>
                            =
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}
