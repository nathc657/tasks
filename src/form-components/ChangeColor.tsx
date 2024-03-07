import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setColor] = useState<string>("");
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "cyan",
        "blue",
        "purple",
        "violet"
    ];

    function selectColor(event: React.ChangeEvent<HTMLInputElement>): void {
        setColor(event.target.value);
    }

    return (
        <div>
            {colors.map((color: string) => (
                <FormCheck
                    key={color}
                    inline
                    type="radio"
                    onChange={selectColor}
                    id={`color-select-${color}`}
                    label={color}
                    value={color}
                    checked={selectedColor === color}
                />
            ))}
            <h3>Change Color</h3>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    width: "100px",
                    height: "100px",
                    marginTop: "20px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
