"use client";
import { useEffect, useState } from "react";
import "./metricCounter.scss";
import NumberPlace from "./numberPlace";

function metricCounter({ number, index }) {
    const [numberArray, setNumberArray] = useState([]);
    const [counters, setCounters] = useState(false);
    const [intvlValue, setIntvlValue] = useState(150);
    useEffect(() => {
        const arr = number.toString().split("");
        setNumberArray(arr);
    }, []);

    useEffect(() => {
        numberArray.length > 0 && setArray();
    }, [numberArray]);

    const setArray = () => {
        let timeoutQueueArray = [];
        new Promise((resolve) => {
            let individualTransitionsArr = numberArray.map((item, indx) => {
                return Number(item) * intvlValue;
            });
            resolve(individualTransitionsArr);
        })
            .then((individualTransitionsArr) => {
                individualTransitionsArr.forEach((itm, index) => {
                    index == 0
                        ? timeoutQueueArray.push(itm)
                        : timeoutQueueArray.push(
                              itm + timeoutQueueArray[index - 1]
                          );
                });
            })
            .then(() => {
                timeoutQueueArray.unshift(0);
                let arr = numberArray.map((itm, indx) => (
                    <NumberPlace
                        key={indx}
                        index={index + "-" + indx}
                        number={Number(itm)}
                        timeout={timeoutQueueArray[indx]}
                        intvlValue={intvlValue}
                    />
                ));
                setCounters(arr);
            });
    };

    return <div className="counterContainer">{counters}</div>;
}

export default metricCounter;
