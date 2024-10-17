import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../store/search-actions';
import './HeaderCartButton.css';

const Logo =() =>
{  const dispatch =useDispatch();
 
    return(
        <div className="header-logo max-w-[150px]  ">
        <Link to="/" className='' onClick={() => {dispatch(getProducts({type:'Products'}))}}>
        <img src={logo} alt="" />
        </Link>
        </div>
    )
}


export default Logo;