import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div>
                    <img src={logo} alt="logo" className="w-8 rounded-full" />
                </div>
            </div>
            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">

            </div>
        </div>
    );
}

export default Footer;