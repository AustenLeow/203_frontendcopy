import {useState} from 'react'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-[#EFEDE7] transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md h-20"> {/*logo container*/}
                <a className="text-xl font-semibold text-[#687259]" href="/">re_</a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl  my-4 text-[#687259]" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    about
                </a>
                <a className="text-xl my-4 text-[#687259]" href="/marketplace" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    marketplace
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
        return (
            <nav className="flex filter drop-shadow-md bg-[#EFEDE7] px-4 py-4 h-20 items-center justify-center">
                <div className="flex items-center justify-between w-4/5">
                <MobileNav open={open} setOpen={setOpen}/>
                <div className="w-3/4 flex items-center">
                    <a className="text-2xl font-semibold text-[#687259] " href="/">re_</a>
                </div>
                <div className="w-9/12 flex justify-end items-center">
    
                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-[#687259] rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full bg-[#687259] rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-[#687259] rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>
    
                    <div className="hidden md:flex text-[#687259]">
                        <NavLink to="/about" className="hover:underline">
                            about
                        </NavLink>
                        <NavLink to="/marketplace">
                            marketplace
                        </NavLink>
                        <NavLink to="/about" >
                            log in
                        </NavLink>
                        <NavLink to="/marketplace">
                            sign up
                        </NavLink>
                    </div>
                </div>
                </div>
            </nav>
        )
    }