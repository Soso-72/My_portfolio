import "./home.css"
import Galaxy from './Galaxy';

export function Home(){
    return (
        <>
                <div className="home-container" id ="Home">
                   
                    <div className="home-content">
                         <div className="home-galaxy">
                                <Galaxy 
                                  mouseRepulsion
                                  mouseInteraction
                                  density={1.6}
                                  glowIntensity={0.3}
                                  saturation={1}
                                  hueShift={160}
                                  twinkleIntensity={0.4}
                                  rotationSpeed={0.1}
                                  repulsionStrength={3.5}
                                  autoCenterRepulsion={0}
                                  starSpeed={0.5}
                                  speed={0.6}
                                />
                    </div>
                        <div className="box">
                            <h1>Bienvenue dans mon portefolio</h1>
                            <p>Je suis développeuse</p>
                        </div>
                    </div>
                </div>
        </>
    )
}