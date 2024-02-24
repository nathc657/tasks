/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const isEmpty = numbers.length === 0;
    if (isEmpty) {
        return [];
    }
    const answer = [numbers[0], numbers[numbers.length - 1]];
    return answer;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const answer = numbers.map((temp: number): number => temp * 3);
    return answer;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let count = 0;
    const ListofNumbers: number[] = [];
    const numberified = numbers.map((word: string): void => {
        if (Number(word)) {
            ListofNumbers[count] = Number(word);
        } else {
            ListofNumbers[count] = 0;
        }
        count++;
    });
    return ListofNumbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //First Removed Money Sign
    let count = 0;
    const newList: string[] = [];
    const removedMoneySign = amounts.map((amount: string): void => {
        if (amount[0] === "$") {
            newList[count] = amount.substring(1);
        } else {
            newList[count] = amount;
        }
        count++;
    });

    //Converts all numbers to numbers and non-numbinos to 0
    count = 0;
    const numbersOnly: number[] = [];
    const checkForNonInt = newList.map((point: string): void => {
        if (Number(point)) {
            numbersOnly[count] = Number(point);
        } else {
            numbersOnly[count] = 0;
        }
        count++;
    });

    return numbersOnly;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const isNotQuestion = (message: string): boolean =>
        message[message.length - 1] != "?";
    const filteredMessages = messages.filter(isNotQuestion);
    const processedMessages = filteredMessages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    return processedMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const isLessFour = (word: string): boolean => word.length < 4;
    const shortList = words.filter(isLessFour);
    return shortList.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let answer = true;
    const output = colors.map((color: string): boolean =>
        color !== "red" && color !== "blue" && color !== "green"
            ? (answer = false)
            : true
    );
    return answer;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let total = 0;
    const calculations = addends.map((num: number) => {
        total += num;
        return num.toString();
    });
    const answer = total.toString();
    const expression = calculations.join("+");
    if (total === 0) {
        return "0=0";
    }
    return `${answer}=${expression}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negativeIndex = values.findIndex((value: number) => value < 0);
    const total = 0;
    if (negativeIndex === -1) {
        let total = 0;
        const addAll = values.map((value: number) => (total += value));
        const newList: number[] = [...values];
        newList.push(total);
        return newList;
    } else {
        const count = 0;
        let left: number[] = [...values];
        left = left.filter(
            (value, index) => index < negativeIndex || index === negativeIndex
        );
        left.pop();
        let right: number[] = [...values];
        right = right.filter((value, index) => index > negativeIndex);
        const sum = left.reduce((acc, curr) => acc + curr, 0);
        return left.concat(values[negativeIndex], sum, right);
    }
}
