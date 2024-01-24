export interface User {
    id: string;
    name: string;
    lat: number;
    lon: number;
}

export const initialUsers: User [] = [
    {
        id: '1',
        name: 'Ramiro',
        lat: 19.41, 
        lon: -99.15,
    },
    {
        id: '2',
        name: 'Carlos',
        lat: 50.13,
        lon: 8.88,
    },
    {
        id: '3',
        name: 'Pedro',
        lat: 42.36,
        lon: 13.40,
    },
    {
        id: '4',
        name: 'David',
        lat: 37.88,
        lon: -4.77,
    },
    {
        id: '5',
        name: 'Jose',
        lat: -30.35,
        lon: 21.83,
    },
    {
        id: '6',
        name: 'Victor',
        lat: 1.31,
        lon: 103.89,
    },
]

export const userNull:User = {
    id: '',
    name: '',
    lat: 0,
    lon: 0,
}