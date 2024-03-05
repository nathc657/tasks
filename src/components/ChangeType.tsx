import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeType(): void {
        if (questionType === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {questionType === "short_answer_question" && "Short Answer"}
            {questionType === "multiple_choice_question" && "Multiple Choice"}
        </div>
    );

    return <div>Change Type</div>;
}
