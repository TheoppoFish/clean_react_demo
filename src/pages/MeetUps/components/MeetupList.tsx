import React, {FC} from "react";

import MeetupItem from "./MeetupItem";
import {useFetchMeetUps} from "../hooks/useFetchMeetUps";

import classes from './MeetupList.module.css';

const MeetupList:FC=()=> {
  const {meetups, isLoading, error}=useFetchMeetUps()

  if (isLoading) {
    return <div>Loading....</div>
  }

  if (error) {
    return <div>Something went wrong! </div>
  }

  if (meetups.length === 0) {
    return <div>No more events</div>
  }

  return (
    <ul className={classes.list}>
      {meetups.map((meetup, _index) => (
        <MeetupItem key={_index} item={meetup}/>
      ))}
    </ul>
  );
}

export default MeetupList;
