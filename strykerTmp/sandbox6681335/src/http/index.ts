// @ts-nocheck
import axios from 'axios';

export type Courses = {
    id: number;
    name: string;
    costs: number[];
    time_hours: string;
    time_days: string;
    duration: string;
    description: string[];
    modules: string[][];
    img: string;
};

type GetCoursesResponse = {
    rows(rows: any): unknown;
    data: Courses[];
};

export async function getCourses() {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.get<GetCoursesResponse>(
            'http://localhost:5002/api/courses',
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function register(email: string, name: string, password: string) {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.post(
            'http://localhost:5002/api/user/registration',
            {email,name,password}
        );

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function logIn(email: string, password: string) {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.post(
            'http://localhost:5002/api/user/login',
            {email ,password}
        );

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}