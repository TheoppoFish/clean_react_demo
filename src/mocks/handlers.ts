import {http, HttpResponse} from 'msw'
import {commentsResponse} from "@/mocks/responses/allComments";

export const handlers = [
    http.get('/api/comments/*', (req,) => HttpResponse.json(commentsResponse))
];
