const Footer = ( ) => {
    return(
        <footer className="flex flex-col w-full  mt-48 bg-black p-8 text-white">
            <div className="w-1/2">
            <h1>About Us</h1>
            <p className="text-gray-400">E-Shopping is a Seattle, Gujarat–based e-commerce and cloud computing giant whose humble beginnings can be traced to founder Jeff Bezos’s garage, where he began selling books on the still-emerging World Wide Web..</p><br/>
            <ul className="text-gray-400 text-xs">
                <p className="text-bold">Contact Us</p>
                <li>Valsad ,Gujart-396035</li>
                <li>9712332728</li>
                <li>gulammohiuddin0712@gmail.com</li><br/>
                <li className="text-right "><h3>&copy; E-Commerce Website 🛒</h3></li>

            </ul>
            </div>
        </footer>
    )  
}

export default Footer;