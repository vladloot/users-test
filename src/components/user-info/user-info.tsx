import style from "./user-info.module.css"
import {useDispatch} from "react-redux";
import {changeActiveStatus} from "../../store/action/action-creators";
import {useState} from "react";

type propsTypes = {
    firstName: string
    id: string
    isActiveStatus: boolean
};

export const UserInfo = ({firstName, id}: propsTypes) => {

    const dispatch = useDispatch();

    const [isActiveChecked, setIsActiveChecked] = useState(true);

    const onChangeActiveStatus = () => {
        setIsActiveChecked(!isActiveChecked)
        dispatch(changeActiveStatus(id, isActiveChecked))
    };


    return (
        <div className={style.userInfo}>
            <span className={style.userName}>{firstName}</span>

            <label className={style.radio}>
                <input type='radio' value='not active' checked={isActiveChecked} onChange={onChangeActiveStatus}/> Not
                active
            </label>

            <label className={style.radio}>
                <input type='radio' value='active' checked={!isActiveChecked} onChange={onChangeActiveStatus}/> Active
            </label>

        </div>
    )
}