type propsTypes = {
    monthlyUsersList: any
};

export const BirthdayUsersList = ({monthlyUsersList}: propsTypes) => {

    if (!monthlyUsersList.users.length) {
        return null;
    }
    ;

    const monthInNumberFormat = Object.keys(monthlyUsersList)[0];
    const monthInStringFormat = monthlyUsersList[monthInNumberFormat];

    //@ts-ignore
    const users = monthlyUsersList.users.map(({id, lastName, firstName}) => {
        return (
            <div key={id}>
                {`${lastName} ${firstName} - ${monthInNumberFormat} ${monthInStringFormat}`}
            </div>
        )
    });

    return (
        <div>
            <h2>{monthInStringFormat}</h2>
            {users}
        </div>
    )
}