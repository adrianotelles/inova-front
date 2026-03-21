import { NavLink, useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "cursor-pointer text-black font-bold"
            : "cursor-pointer text-neutral-400";

    function navigateHome() {
        navigate('/home')
    }

    return (
        <>
            <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-10 lg:flex hidden">
                <div className="flex-1">
                    <button className="btn btn-ghost text-xl" onClick={navigateHome}>
                        <h1 className="text-2xl lg:text-3xl font-bold text-black">
                            INOVA
                        </h1>
                    </button>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink className={linkClass} to="home">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={linkClass} to="produtos">
                                Produtos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={linkClass} to="sobre-nos">
                                Sobre nós
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={linkClass} to="orcamento">
                                Orçamentos
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-10 lg:hidden flex">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink className={linkClass} to="home">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={linkClass} to="produtos">
                                    Produtos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={linkClass} to="sobre-nos">
                                    Sobre nós
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={linkClass} to="orcamento">
                                    Orçamentos
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <button className="btn btn-ghost text-xl" onClick={navigateHome}>
                        <h1 className="text-2xl lg:text-3xl font-bold text-black">
                            INOVA
                        </h1>
                    </button>
                </div>
                <div className="navbar-end"></div>
            </div>
        </>

    )
}

export default Header;