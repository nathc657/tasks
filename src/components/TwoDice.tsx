import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dOne, setDOne] = useState<number>(-1);
    const [dTwo, setDTwo] = useState<number>(0);

    function rollLeft(): void {
        setDOne(d6());
    }

    function rollRight(): void {
        setDTwo(d6());
    }

    function isLose(): boolean {
        return dOne === 1 && dTwo === 1;
    }

    function isWin(): boolean {
        return dOne === dTwo && dOne !== 1;
    }

    return (
        <div>
            <span data-testid="left-die">{dOne}</span>
            <span data-testid="right-die">{dTwo}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            {isLose() && <p>Lose :C</p>}
            {isWin() && <p>Win :o</p>}
        </div>
    );
}
