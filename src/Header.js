import {Link} from 'react-router-dom';
const Header=()=>{

    return (
        <div>
            <Link to="/home">Home</Link><br/>
            <Link to="/login">Login</Link><br/>
            <Link to="/add">Registration</Link>
        </div>
    )
}
export default Header;
