import { Client } from './client';

export interface Group {
    id?: string;
    groupName: string;
    created_time?: string;
    clients: Array<Client>;
}
