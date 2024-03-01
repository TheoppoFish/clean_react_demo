import React, {useEffect, useState} from 'react';

function getCommentsApi() {
    return fetch("/api/comments")
        .then((res) => res.json());
}

const getCommentsService = () => {
    // do something

    return getCommentsApi()

}

export const useComments = () => {
    // State of fetching comments
    const [comments, setComments] = useState<Comment[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch comments
    useEffect(() => {
        setIsLoading(true);
        getCommentsService()
            .then((comments) => setComments(comments))
            .catch(() => setError("SYSTEM_ERROR"))
            .finally(() => setIsLoading(false));
    }, []);

    return {comments, isLoading, error, setComments}

};
