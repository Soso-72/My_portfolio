import { useEffect, useState } from "react"
import "./header.css"

export function Header(){
    const [scroll, setScroll]=useState(false)

    useEffect(() => {
        const onScroll =() =>{ 
        setScroll(window.scrollY > 100)
    }
     
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
    }, [])
    return (
        <>
            <header className={`${scroll ? "header-couleur" :"header-transparent"}`}>
                <div className="header-text">
                <h2 className="name">Soraya CATHERINE</h2>
                </div>
                <div className="nav-container">
                    <nav>
                        <ul className="ul-header">
                            <li>
                                <a href="#Home">home</a>
                            </li>   
                            <li>
                                <a href="#AboutMe">about me</a>
                            </li>
                            <li>
                                <a href="#skills">skill</a>
                            </li>
                            <li>
                                <a href="#project">project</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}