/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { FormCheck, FormGroup, FormControl } from "react-bootstrap";

export function EditMode(): JSX.Element {
    // Create the all mighty states as per the Tome
    const [isEditMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function changeEditMode(event: React.ChangeEvent<HTMLInputElement>): void {
        setEditMode(event.target.checked);
    }

    function changeUserName(event: React.ChangeEvent<HTMLInputElement>): void {
        setUserName(event.target.value);
    }

    function changeIfStudent(event: React.ChangeEvent<HTMLInputElement>): void {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <FormCheck
                type="switch"
                id="is-edit-mode"
                label="Editing?"
                checked={isEditMode}
                onChange={changeEditMode}
            />
            {!isEditMode && (
                <div>
                    {isStudent && <p>{userName} is a student</p>}
                    {!isStudent && <p>{userName} is not a student</p>}
                </div>
            )}
            {isEditMode && (
                <div>
                    <FormGroup controlId="formUserName">
                        <FormControl
                            value={userName}
                            onChange={changeUserName}
                        />
                    </FormGroup>
                    <FormCheck
                        type="checkbox"
                        id="is-a-student"
                        label="Student?"
                        checked={isStudent}
                        onChange={changeIfStudent}
                    />
                </div>
            )}
        </div>
    );
}
