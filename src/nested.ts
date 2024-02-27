/* eslint-disable indent */
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";
import { duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions: Question[] = [...questions];
    return publishedQuestions.filter((question) => question.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQuestions: Question[] = [];
    questions.map((question: Question) =>
        question.body !== "" || question.expected !== ""
            ? nonEmptyQuestions.push(question)
            : question
    );
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const foundQuestion = questions.find((question) => question.id === id);
    return foundQuestion ? foundQuestion : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const allButOne: Question[] = [...questions];
    const outPutThing: Question[] = [];
    allButOne.map((question: Question) =>
        question.id !== id ? outPutThing.push(question) : question
    );
    return outPutThing;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const allButOne: Question[] = [...questions];
    const listONames: string[] = [];
    allButOne.map((question: Question) => listONames.push(question.name));
    return listONames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let total = 0;
    questions.map((question: Question) => (total = total + question.points));
    return total;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedQuestion: Question[] = [];
    questions.map((question: Question) =>
        question.published ? publishedQuestion.push(question) : question
    );
    let total = 0;
    publishedQuestion.map(
        (question: Question) => (total = total + question.points)
    );
    return total;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let CSV = "id,name,options,points,published";
    questions.map(
        (question: Question) =>
            (CSV =
                CSV +
                "\n" +
                question.id.toString() +
                "," +
                question.name +
                "," +
                question.options.length.toString() +
                "," +
                question.points.toString() +
                "," +
                question.published.toString())
    );
    return CSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const listOAnswers: Answer[] = [];
    questions.map((question: Question) =>
        listOAnswers.push({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return listOAnswers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const publishedQuestions: Question[] = [];
    questions.map((question: Question) =>
        publishedQuestions.push({ ...question })
    );
    publishedQuestions.map((question: Question) => (question.published = true));
    return publishedQuestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const compareType = questions[0].type;
    let isSame = true;
    questions.map((question: Question) =>
        question.type !== compareType ? (isSame = false) : isSame
    );
    return isSame;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestions: Question[] = [...questions];
    newQuestions.push(makeBlankQuestion(id, name, type));
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map((question: Question) => {
        if (question.id === targetId) {
            return { ...question, name: newName };
        }
        return { ...question };
    });
}
/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newList: Question[] = [];
    if (newQuestionType !== "multiple_choice_question") {
        questions.map((question: Question) =>
            targetId === question.id
                ? newList.push({
                      ...question,
                      type: newQuestionType,
                      options: []
                  })
                : newList.push({ ...question })
        );
    } else {
        questions.map((question: Question) =>
            targetId === question.id
                ? newList.push({ ...question, type: newQuestionType })
                : newList.push({ ...question })
        );
    }
    return newList;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const newList: Question[] = [];
    if (targetOptionIndex === -1) {
        questions.map((question: Question) =>
            targetId === question.id
                ? newList.push({
                      ...question,
                      options: [...question.options, newOption]
                  })
                : newList.push({ ...question })
        );
    } else {
        questions.map((question: Question) => {
            if (targetId === question.id) {
                const tempList: string[] = [...question.options];
                tempList[targetOptionIndex] = newOption;
                newList.push({ ...question, options: tempList });
            } else {
                newList.push({ ...question });
            }
        });
    }
    return newList;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const newList: Question[] = [];
    questions.map((question: Question) => {
        if (question.id === targetId) {
            newList.push({ ...question });
            const copy = duplicateQuestion(newId, question);
            newList.push({ ...copy });
        } else {
            newList.push({ ...question });
        }
    });
    return newList;
}
