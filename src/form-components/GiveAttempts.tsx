import React, { useState } from "react";
import { FormControl, FormGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    //Do as the task commands
    const [totalAttempts, setTotalAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    //Function for Requesting More Attempts
    function requestAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        const userInput = event.target.value;
        if (Number(userInput)) {
            setRequestedAttempts(Number(userInput));
        }
    }

    return (
        <div>
            <h1>Attempts Left: {totalAttempts}</h1>
            <FormGroup controlId="formAttemptRequest">
                <FormControl
                    type="number"
                    value={requestedAttempts}
                    onChange={requestAttempts}
                />
            </FormGroup>
            <Button
                onClick={() => setTotalAttempts(totalAttempts - 1)}
                disabled={totalAttempts <= 0}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setTotalAttempts(totalAttempts + requestedAttempts)
                }
            >
                gain
            </Button>
            <h3>Give Attempts</h3>
        </div>
    );
}
