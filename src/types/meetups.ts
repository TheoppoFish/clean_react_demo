export type meetup = {
    id: string,
    image: string,
    title: string,
    address: string,
    description: string,
}

export type meetupDto = {
    key: string,
    _id: string,
    image: string,
    title: string,
    address: string,
    description?: string,
}

export type createMeetupForm = {
    title: string,
    image: any,
    address: string,
    description: string,
}