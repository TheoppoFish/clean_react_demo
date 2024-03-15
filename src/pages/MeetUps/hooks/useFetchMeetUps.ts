import {useEffect, useState} from 'react';


import {meetup, meetupDto} from "@/types";

const getMeetupsApi: () => Promise<meetupDto[]> = async () =>
    await fetch(`/api/meetups`).then(res => res.json())

const getAllMeetups = async (): Promise<meetup[]> => {
    const result = await getMeetupsApi();
    return result.map(item => ({
        title: item.title,
        image: item.image,
        address: item.address,
        description: item.description || "Coming soon...",
        id: item._id,
    }))
}

export const useFetchMeetUps = () => {
    // State of fetching comments
    const [meetups, setMeetups] = useState<meetup[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch comments
    useEffect(() => {
        setIsLoading(true);
        getAllMeetups()
            .then((meetups) => setMeetups(meetups))
            .catch(() => setError("SYSTEM_ERROR"))
            .finally(() => setIsLoading(false));
    }, []);

    return {meetups, isLoading, error, onReload: setMeetups}

};
