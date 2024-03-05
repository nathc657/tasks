import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [show, setShow] = useState<boolean>(false);

    function flipShow(): void {
        setShow(!show);
    }
    return (
        <div>
            <Button onClick={flipShow}>Reveal Answer</Button>
            {show && 42}.
        </div>
    );
}
