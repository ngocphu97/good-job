export interface Event {
    id: string;
    clientName: string;
    created_time: Date;
    story: string;
    message?: string;
    is_published?: boolean;
    thumbnail?: string;
    link?: string;
}
