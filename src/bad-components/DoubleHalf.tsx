import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState(10);

    function Doubler(): JSX.Element {
        return (
            <Button onClick={() => setDhValue((prevValue) => 2.0 * prevValue)}>
                Double
            </Button>
        );
    }

    function Halver(): JSX.Element {
        return (
            <Button onClick={() => setDhValue((prevValue) => 0.5 * prevValue)}>
                Halve
            </Button>
        );
    }

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler />
            <Halver />
        </div>
    );
}
