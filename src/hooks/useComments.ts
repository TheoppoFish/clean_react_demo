import {useEffect, useState} from 'react';

import {userComment, userCommentDto} from "@/types";

const getCommentsApi: (userId: String) => Promise<userCommentDto[]> = async (userId: String) =>
    fetch(`/api/comments/user/${userId}`).then(res => res.json())

const getCommentsService = async (userId: string): Promise<userComment[]> => {
    const result = await getCommentsApi(userId);
    return result.map(item => {
        return {
            id: item.id,
            content: item.content ?? "No comments for now",
            createdAt: item.createdAt,
            createdBy: item.createdBy
        }
    })

};

export const useComments = (userId: string) => {
    // State of fetching comments
    const [comments, setComments] = useState<userComment[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch comments
    useEffect(() => {
        setIsLoading(true);
        getCommentsService(userId)
            .then((comments) => setComments(comments))
            .catch(() => setError("SYSTEM_ERROR"))
            .finally(() => setIsLoading(false));
    }, []);

    return {comments, isLoading, error, onReload: setComments}

};
