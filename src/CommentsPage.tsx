import React, { FC, useEffect, useRef, useState } from "react";

type Comment = {
  id: string;
  source: string;
  content: string;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
};

const CommentsPage: FC = () => {
  // State of fetching comments
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // State of adding a comment
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Fetch comments
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/comments")
      .then((res) => res.json())
      .then((comments) => setComments(comments))
      .catch(() => setError("SYSTEM_ERROR"))
      .finally(() => setIsLoading(false));
  }, []);

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

  return <div>{/*your tsx file here*/}</div>;
};

export default CommentsPage;
