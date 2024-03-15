import {http, HttpResponse} from 'msw'
import {meetupsResponse} from "@/mocks/responses";

export const handlers = [
    http.get('/api/meetups', (req,) => HttpResponse.json(meetupsResponse))
];
