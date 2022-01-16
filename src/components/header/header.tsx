import style from './header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.title}>Employees</div>
            <div className={style.title}>Employees birthday</div>
        </header>
    )
}