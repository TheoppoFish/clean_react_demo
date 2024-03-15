import React, {FC} from "react";
import classes from './MeetupItem.module.css';
import {useNavigate} from "react-router-dom";
import {meetup} from "@/types";
import {Card} from "@/components/layout";


interface MeetupItemProps {
  item: meetup
}
const MeetupItem:FC<MeetupItemProps>=({item}) =>{
  const navigate = useNavigate();
  const clickHandler = () => navigate(`/meetups/${item.id}`);

  return (
    <li className={classes.item}>
      <Card >
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <text>{item.address}</text>
        </div>
        <div className={classes.actions}>
          <button onClick={clickHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
