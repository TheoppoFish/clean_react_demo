import React, {useEffect, useRef, useState} from 'react';

export const useCreateComment = (setComments: any) => {
    // State of adding a comment
    const commentRef = useRef<HTMLTextAreaElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);


    useEffect(() => {
        const submitHandler: (event: SubmitEvent) => Promise<() => void> = async (
            event: SubmitEvent
        ) => {
            if (event.type === "Submit" && commentRef.current?.value) {
                setIsSubmitting(true);

                try {
                    const newComments = await fetch("/api/comments", {
                        method: "POST",
                        body: JSON.stringify(commentRef.current.value),
                    }).then((res) => res.json());

                    setComments(newComments);
                } catch {
                    setSubmitError("API_ERROR");
                } finally {
                    setIsSubmitting(false);
                }
            }

            // Add event listener
            window.addEventListener("submit", submitHandler);

            return () => {
                window.removeEventListener("submit", submitHandler);
            };
        };
    }, []);


    return {commentRef, isSubmitting, submitError}
};
