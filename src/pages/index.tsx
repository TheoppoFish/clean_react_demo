import React, {FC, memo, PropsWithChildren} from 'react';
import {useComments} from "@/hooks";
import {userComment} from "@/types";


const Comment: FC<{ comment: userComment }> = ({ comment }) => (
    <div>
        <h2>Comment</h2>
        <p>{comment.content}</p>
        <img src={comment.source} alt="comment image"/>
        <h2>{comment.createdBy} created this on</h2>
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
