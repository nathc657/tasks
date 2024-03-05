import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Christmas");
    const [currentHolidayIndex, setCurrentHolidayIndex] = useState<number>(0);
    const [output, setOutput] = useState("🎄");
    function alphabet() {
        const holidays = [
            "Christmas",
            "Halloween",
            "Independence Day",
            "Lunar New Year",
            "New Years"
        ];
        const emojis = ["🎄", "🎃", "🎆", "🏮", "🎉"];

        const nextIndex = (currentHolidayIndex + 1) % holidays.length;

        setHoliday(holidays[nextIndex]);
        setOutput(emojis[nextIndex]);
        setCurrentHolidayIndex(nextIndex);
    }

    function year() {
        const holidays = [
            "New Years",
            "Lunar New Year",
            "Independence Day",
            "Halloween",
            "Christmas"
        ];
        setCurrentHolidayIndex(holidays.indexOf(holiday));
        const emojis = ["🎉", "🏮", "🎆", "🎃", "🎄"];

        const nextIndex =
            (holidays.findIndex((x) => x === holiday) + 1) % holidays.length;

        setHoliday(holidays[nextIndex]);
        setOutput(emojis[nextIndex]);
        setCurrentHolidayIndex(nextIndex);
    }

    return (
        <div>
            <Button onClick={alphabet}>Advance by Alphabet</Button>
            <Button onClick={year}>Advance by Year</Button> Holiday: {output}
        </div>
    );
}
