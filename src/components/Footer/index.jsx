import './styles.css'

const Footer = (props)=>{
return (
    <footer className="my-footer">
       {props.children}
    </footer>
)
}

export default Footer