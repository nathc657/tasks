import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startProgress(): void {
        setProgress(true);
    }

    function endProgress(): void {
        setProgress(false);
    }

    function addAttempt(): void {
        setAttempts(attempts + 1);
    }

    function removeAttempt(): void {
        setAttempts(attempts - 1);
    }

    function startQuizFunct(): void {
        if (attempts > 0 && !inProgress) {
            startProgress();
            removeAttempt();
        }
    }

    function mulliganFunction(): void {
        if (!inProgress) {
            addAttempt();
        }
    }

    function stopQuizFunction(): void {
        if (inProgress) {
            endProgress();
        }
    }

    return (
        <div>
            <Button
                onClick={startQuizFunct}
                disabled={!(attempts > 0 && !inProgress)}
            >
                Start Quiz
            </Button>
            <Button onClick={mulliganFunction} disabled={inProgress}>
                Mulligan
            </Button>
            <Button onClick={stopQuizFunction} disabled={!inProgress}>
                Stop Quiz
            </Button>
            Attempts: {attempts}
        </div>
    );
}
