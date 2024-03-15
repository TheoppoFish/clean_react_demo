import React from 'react';
import {useComments} from "@/hooks";

const List = () => {
    const {comments, isLoading, error, onReload} = useComments("test")

    if (isLoading) {
        return <div>Loading....</div>
    }

    if (error) {
        return <div>error msg </div>
    }

    if (comments.length === 0) {
        return <div>empty list</div>
    }

    return <div>{/*your tsx file here*/}</div>;
};

export default List;