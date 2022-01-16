import {useEffect} from "react";
import style from './employees.module.css';
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../store/store";
import {fetchUsers} from "../../store/thunk/usersThunk/usersThunk";
import {numbersToSliceAlphabetType} from "../../store/reducers/usersReducer/usersReducer";
import {usersType} from "../../store/action/action-creators";
import {NextPageButton} from "../next-page-button/next-page-button";
import {UsersColumns} from "../users-columns/users-columns";

export const Employees = () => {

    const dispatch = useDispatch();

    const users = useSelector<rootReducerType, usersType>(state => state.usersReducer.users);

    const {firstNumber, lastNumber} = useSelector<rootReducerType, numbersToSliceAlphabetType>((state) => {
        return state.usersReducer.numbersToSliceAlphabet;
    });

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    return (
        <>
            <div className={style.employeesWrapper}>
                <UsersColumns users={users} firstNumber={firstNumber} lastNumber={lastNumber}/>
                <NextPageButton/>
            </div>
        </>
    )
}