import React, { useState } from 'react'
import '../App.css';
export default function Calculator() {
    const [cal, setCal] = useState("");
    const [result, setResult] = useState("");

    const updateCal = (e) => {
        setCal(cal.concat(e.target.name));
    }

    const clear = () => {
        setCal("");
        setResult("");
    }

    const results = () => {
        try {
            setResult(eval(cal).toString());
        }
        catch {
            setResult("Error");
        }
    }

    return (
        <div className="container">
            <div className="content">
                <div className="title-body">Calculator</div>
                <div className="show-input">{cal || 0}</div>
                <div className=""><span className="text-orange-500">{result || ''}</span></div>


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
                            AC
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
