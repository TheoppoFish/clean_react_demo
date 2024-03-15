import React, {Fragment} from 'react';
import {createMeetupForm} from "@/types";

import NewMeetupForm from "./components/NewMeetupForm";
import {useNavigate} from "react-router-dom";

const NewMeetupPage = () => {

    const navigate = useNavigate();


    const submitHandler = async (formData: createMeetupForm) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json ',
            },
        });

        if (response.ok) {
            navigate('/')
        }
    };

    return (
        <Fragment>
            <NewMeetupForm onAddMeetup={submitHandler} />
        </Fragment>
    );
};

export default NewMeetupPage;