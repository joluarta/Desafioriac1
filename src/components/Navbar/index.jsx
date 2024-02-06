import './styles.css'

const Navbar = (props) => {

    return (
        <nav className="mynav">
            <ul>
                {
                    props.links.map((link) => (
                            <li>
                                <a href={link.url}>{link.name}</a>
                            </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar