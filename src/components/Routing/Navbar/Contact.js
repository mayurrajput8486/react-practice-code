import { Link, Outlet } from "react-router-dom";

const Contact = () => {
    return(
        <>
            <h1>Welcome to Contact Component</h1>
            <ul>
                <li>
                     <Link to="/contact/adress">Adress</Link>
                </li>
                <li>
                    <Link to="/contact/details">Details</Link>
                </li>
            </ul>
            <Outlet/>
        </>
    )
}
export default Contact;