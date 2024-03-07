import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    //Do the thing like the instructions said
    const [givenAnswer, setGivenAnswer] = useState<string>("");
    const [isCorrect, setCorrect] = useState<string>("❌");

    //Make a function like the BLESSED TOME did
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        const answer = event.target.value;
        setGivenAnswer(answer);
        if (answer === expectedAnswer) {
            setCorrect("✔️");
        } else {
            setCorrect("❌");
        }
    }

    return (
        <div>
            <FormGroup controlId="formInputAnswer">
                <FormLabel>Enter Answer: </FormLabel>
                <FormControl value={givenAnswer} onChange={updateAnswer} />
            </FormGroup>
            <h3>{isCorrect}</h3>
        </div>
    );
}
