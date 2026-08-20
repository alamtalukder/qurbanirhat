"use client";

import { FloppyDisk } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Surface,
    TextArea,
    TextField,
} from "@heroui/react";
import React from "react";

export function bookingForm() {
    const onSubmit = (e)=> {
        e.preventDefaul();
        const formData = new FormData(e.currentTarget);

        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        alert("Form submitted successfully!");
    };

    return (
        <div className="flex w-125 py-15 mt-14 mb-14 mx-auto items-center justify-center rounded-3xl bg-surface p-6">
            <Surface className="w-full min-w-[380px]">
                <Form onSubmit={onSubmit}>
                    <Fieldset className="w-full">
                        <Fieldset.Legend>Book Now</Fieldset.Legend>
                        <Description>Choose a favourite Cows/Goat</Description>
                        <Fieldset.Group>
                            <TextField
                                isRequired
                                name="name"
                                validate={(value) => {
                                    if (value.length < 3) {
                                        return "Name must be at least 3 characters";
                                    }

                                    return null;
                                }}
                            >
                                <Label>Name</Label>
                                <Input placeholder="Enter Your Name" variant="secondary" />
                                <FieldError />
                            </TextField>
                            <TextField isRequired name="email" type="email">
                                <Label>Email</Label>
                                <Input placeholder="Enter Your Email" variant="secondary" />
                                <FieldError />
                            </TextField>
                            <TextField
                                isRequired
                                name="bio"
                                validate={(value) => {
                                    if (value.length < 10) {
                                        return "Bio must be at least 10 characters";
                                    }

                                    return null;
                                }}
                            >
                                <Label>Phone</Label>
                                <TextArea placeholder="Enter Your Phone Number" variant="secondary" />
                                <FieldError />
                            </TextField>
                                <TextField
                                isRequired
                                name="number"
                                validate={(value) => {
                                    if (value.length < 10) {
                                        return "Phone Number must be at least 11 characters";
                                    }

                                    return null;
                                }}
                            >
                                <Label>Address</Label>
                                <TextArea placeholder="Enter Your Full Address" variant="secondary" />
                                <FieldError />
                            </TextField>



                        </Fieldset.Group>
                        <Fieldset.Actions>
                            <Button type="submit">
                                Buy Now
                            </Button>
                            <Button type="reset" variant="tertiary">
                                Cancel
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
            </Surface>
        </div>
    );
}

export default bookingForm;