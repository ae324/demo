import React, { useState, useEffect } from "react";

import {Button } from "react-bootstrap";
import '../wallet.css';

const InitialPage = () => {

    // const locale = "en-US";
    // const [time, setTime] = useState(new Date());

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTime(new Date());
    //     }, 1000);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, [time]);

    // let tZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // let exactTime = time.toLocaleString(locale, {
    //     year: "numeric",
    //     month: "numeric",
    //     day: "numeric",
    //     hour: "numeric",
    //     hour12: true,
    //     minute: "numeric",
    //     second: "numeric",
    //     timeZone: tZone
    // });

    const [allie, setAllie] = useState(parseInt(Math.random() * 100));

    function changeAllie() {
        setAllie(parseInt(Math.random() * 100));
    }

    return (
        <>
         {/* <h1>{exactTime}</h1> */}
         <Button href="/wallet">Click To View Demo</Button>
         <br />
         <Button onClick={changeAllie}>change allie</Button>
         <h1>{allie}</h1>
        </>
    )
}

export default InitialPage;