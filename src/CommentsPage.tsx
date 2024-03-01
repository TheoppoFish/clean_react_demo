import React, { FC, useEffect, useRef, useState } from "react";
import {useComments} from "./hooks/useComments.ts";
import {useCreateComment} from "./hooks/useCreateComment.ts";
import List from "./components/list.tsx";

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

  const {comments, isLoading, error, setComments} = useComments()

  const  {commentRef, submitError, isSubmitting}=useCreateComment(setComments)


  if (isSubmitting) {
    return <div>Loading....</div>
  }

  if (submitError) {
    return <div>error msg </div>
  }

  if (comments.length === 0) {
    return <div>empty list</div>
  }

  return <div><List/></div>;
};

export default CommentsPage;
