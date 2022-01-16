import {usersType} from "../store/action/action-creators";

export const sortUsersByMonth = (activeUsers: usersType) => {
    const usersByMonth: any = [
        {
            '01': 'January',
            users: [],
        },
        {
            '02': 'February',
            users: [],
        },
        {
            '03': 'March',
            users: [],
        },
        {
            '04': 'April',
            users: [],
        },
        {
            '05': 'May',
            users: [],
        },
        {
            '06': 'Jun',
            users: [],
        },
        {
            '07': 'July',
            users: [],
        },
        {
            '08': 'August',
            users: [],
        },
        {
            '09': 'September',
            users: [],
        },
        {
            '10': 'October',
            users: [],
        },
        {
            '11': 'November',
            users: [],
        },
        {
            '12': 'December',
            users: [],
        },
    ];

    activeUsers.forEach(user => {
        const monthInNumericFormat = user.dob.slice(5, 7);

        usersByMonth.forEach((item: any) => {
            return Object.keys(item).includes(monthInNumericFormat) && item.users.push(user);
        })
    });

    return usersByMonth;
}