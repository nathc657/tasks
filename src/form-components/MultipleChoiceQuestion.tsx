import React, { useState } from "react";
import { FormGroup, FormSelect } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedAnswer, setAnswer] = useState<string>(options[0]);
    const [isCorrect, setCorrect] = useState<string>("❌");

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
        const answer = event.target.value;
        if (answer === expectedAnswer) {
            setCorrect("✔️");
        } else {
            setCorrect("❌");
        }
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <FormGroup controlId="userAnswer">
                <FormSelect value={selectedAnswer} onChange={updateAnswer}>
                    {options.map((select: string) => (
                        <option key={select} value={select}>
                            {select}
                        </option>
                    ))}
                </FormSelect>
                {isCorrect}
            </FormGroup>
        </div>
    );
}
