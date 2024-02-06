import './styles.css'

const Header = (props) => {
    return (
        <header className='my-header'>
                <h1> Hola soy un header creado y hoy es {props.day}</h1>
        </header>
    )
}
export default Header