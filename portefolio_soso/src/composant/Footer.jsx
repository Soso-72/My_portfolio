import "./footer.css"

export function Footer(){
    const email= "soraya.catherine@epitech.eu"
    const subject = encodeURIComponent("Demande d'information");
    const body = encodeURIComponent("Bonjour,\n\n Je souhaite vous contacter pour en savoir plus sur votre parcours et vos compétences. \n\n Cordialement,");
    const url= `https://outlook.office.com/mail/deeplink/compose?to=${email}&subject=${subject}&body=${body}`
    return (
        <>
    
            <div className="nav-contain" id="contact"> 
                <nav>
                    <ul className="ul-head">
                        <li>
                            <a href="tel:+262 06 92 22 41 60">
                                <span>+262 06 92 22 41 60</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Soso-72"> <img src="/gitub.jpeg" alt="gitub"/></a>
                        </li>
                        <li>
                            <a href={url}> <img src="gmail_img.png" alt="email"/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/soraya-catherine-27b7a1335?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bo063Py%2FYTyaIWBRt7TYfMQ%3D%3D"><img src="linkdin.png" alt="linkdin"/></a>
                        </li>
                    </ul>
                </nav>
            </div>
    
        </>
    )
}