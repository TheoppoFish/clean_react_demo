export type userCommentDto = {
    id: string;
    source?: string;
    content?: string;
    createdBy: string;
    createdAt: string;
    updatedBy?: string;
    updatedAt?: string;
    note?: string;
};

export type userComment = {
    id: string;
    source?: string;
    content: string;
    createdBy: string;
    createdAt: string;
    note?: string
}