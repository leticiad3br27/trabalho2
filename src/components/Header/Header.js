"use client"
import Link from "next/link"
import style from "./header.module.css"
import { useState } from "react";

export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    const [buttonText, setButtonText] = useState("Achou")

    const handleClick = () => {
        setShowMenu(!showMenu)
        setButtonText(showMenu ? "Cade?" : "Achou!")
    }

    return (
        <header className={style.header}>
            <button className={style.botao} onClick={handleClick}>{buttonText}</button>
            {
                showMenu &&
                <nav>
                    <ul className={style.li}>
                        <li>
                            <Link href="/buscar" className={style.link}><svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z" fill="#003e5a"></path> </g></svg></Link>
                        </li>
                        <li>
                            <Link href="/Medico" className={style.link}><svg fill="#003e5a" width="36px" height="36px" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.417 9.579A7.917 7.917 0 1 1 8.5 1.662a7.917 7.917 0 0 1 7.917 7.917zm-3.193-.767a1.588 1.588 0 1 0-1.999 1.534v1.515a2.014 2.014 0 0 1-4.027 0v-.334a2.676 2.676 0 0 0 2.262-2.64v-2.14a1.244 1.244 0 0 0-.506-1.002.894.894 0 1 0-.395.754.424.424 0 0 1 .08.248v2.14a1.851 1.851 0 1 1-3.703 0v-2.14a.422.422 0 0 1 .1-.273.895.895 0 1 0-.356-.77 1.245 1.245 0 0 0-.565 1.043v2.14a2.676 2.676 0 0 0 2.262 2.64v.334a2.835 2.835 0 1 0 5.67 0v-1.515a1.59 1.59 0 0 0 1.177-1.534zm-.821 0a.767.767 0 1 1-.767-.767.768.768 0 0 1 .767.767z"></path></g></svg></Link>
                        </li>
                        <li>
                            <Link href="/" className={style.link}><svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.72"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 18H9" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg></Link>
                        </li>
                        <li>
                            <Link href="/Paciente" className={style.link}><svg fill="#003e5a" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M23,12a1,1,0,0,1-1,1H17a1,1,0,0,1-.832-.445l-.866-1.3-2.354,7.06A1,1,0,0,1,12,19h-.038a1,1,0,0,1-.932-.757L8.862,9.574l-.914,2.742A1,1,0,0,1,7,13H2a1,1,0,0,1,0-2H6.279L8.052,5.684a1,1,0,0,1,1.918.074l2.168,8.668,1.914-5.742a1,1,0,0,1,1.78-.239L17.535,11H22A1,1,0,0,1,23,12Z"></path></g></svg></Link>
                        </li>
                        <li>
                            <Link href="/Consulta" className={style.link}><svg fill="#003e5a" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000c6b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3,11h8V3a1,1,0,0,1,2,0v8h8a1,1,0,0,1,0,2H13v8a1,1,0,0,1-2,0V13H3a1,1,0,0,1,0-2Z"></path></g></svg></Link>
                        </li>
                        
                    </ul>
                    
                </nav>
            }
        </header>
    )
}
