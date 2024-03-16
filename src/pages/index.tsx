import React, {FC, memo, PropsWithChildren} from 'react';
import {useComments} from "@/hooks";
import {userComment} from "@/types";


const Comment: FC<{ comment: userComment }> = ({ comment }) => (
    <div>
        <h2>{comment.createdBy}</h2>
        <p>{comment.content}</p>
        <small>{new Date(comment.createdAt).toLocaleString()}</small>
    </div>
);

const CommentList: FC<{ comments: userComment[] }> = ({ comments }) => (
    <div>
        {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
        ))}
    </div>
);

const LandingPage: FC<PropsWithChildren> = () => {
    const {comments, isLoading, error} = useComments("test")

    if (isLoading) {
        return <div>Loading....</div>
    }

    if (error) {
        return <div>error msg </div>
    }

    if (comments.length === 0) {
        return <div>empty list</div>
    }
    return <CommentList comments={comments}/>;
};

export default memo(LandingPage);
