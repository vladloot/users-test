import {FC} from "react";
import {useDispatch} from "react-redux";
import {changeVisiblePage} from "../../store/action/action-creators";

export const NextPageButton: FC = () => {

    const dispatch = useDispatch();

    const onChangeVisiblePage = () => {
        dispatch(changeVisiblePage())
    }

    return (
        <div>
            <button type='button' onClick={onChangeVisiblePage}>Next page</button>
        </div>
    )
}