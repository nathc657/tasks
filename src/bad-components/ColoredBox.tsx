import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ColoredBox(): JSX.Element {
    const COLORS = ["red", "blue", "green"];
    const DEFAULT_COLOR_INDEX = 0;
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    const handleColorChange = () => {
        setColorIndex((colorIndex + 1) % COLORS.length);
    };

    function ColorPreview({ color }: { color: string }): JSX.Element {
        return (
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        );
    }

    const currentColor = COLORS[colorIndex];
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {currentColor}</span>
            <div>
                <Button onClick={handleColorChange}>Next Color</Button>
                <ColorPreview color={currentColor} />
            </div>
        </div>
    );
}
