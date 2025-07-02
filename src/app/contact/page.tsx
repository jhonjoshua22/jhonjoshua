'use client';
import GooeyNav from '../../components/GooeyNav/GooeyNav';
import '../../components/GooeyNav/GooeyNav.css';
import {navItems} from '../../constants/navItems'
import CircularText from '../../components/CircularText/CircularText';
import '../../components/CircularText/CircularText.css';
import Particles from '../../components/Particles/Particles';
import '../../components/Particles/Particles.css';

export default function Home() {
    const items = [
        { label: "Portfolio", href: "../" },
        { label: "Contact", href: "/"},
    ];

    return (
        <main className="relative bg-black min-h-screen" style={{ fontFamily: 'Gilroy', backgroundColor: "white" , minHeight: "100vh" }}>
            
            <CircularText
                text=" Josh Abutan * Josh Abutan *"
                onHover="speedUp"
                spinDuration={20}
                style={{ fontWeight: 800 }}
            />    

            <GooeyNav style={{fontSize: '1vw', fontFamily: 'Gilroy', fontWeight: 800}}items={navItems} />

            <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '18vw',
                    position: 'fixed',
                    height: '7vw',
                    fontSize: '1vw',
                    right: '0',
                    top: '0',
                    marginTop: '1vw',
                    zIndex: '1',
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
            }} className="relative"><img src="../images/cv.png" className="h-[1.9vw]"/><h1 style={{marginLeft: '0.7vw', paddingTop:'0.2vw',}}> Download CV</h1></div>
            
            <div style={{ position: 'relative', width: '100%', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
  
            <div style={{ width: '100%', height: '1000px', position: 'relative' }}>
            <Particles
                className=""
                particleColors={['black', 'black']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
            </div>

            <h1 style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'black',
                fontSize: '4.7vw',
                fontWeight: '800',
            }}>
            Connect With Me
            </h1>

            <div style={{
                position: 'absolute',
                top: '47%',
                color: 'black',
                textAlign: 'left',
                padding: '4vw 10%',
                backgroundColor: 'rgba(0, 255, 255, 0.01)',
                fontSize: '2vw',
                fontWeight: '800',
                }} className=" w-[50%] h-[auto]">
                <h1 style={{fontSize: '3vw', marginBottom: '1vw'}}>Contact Information</h1>
                <h2 style={{fontWeight: '400', fontSize: '1.5vw'}}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5vw', margin: '1.2vw' }}><img style={{width: '1.5vw', height: '1.5vw'}} src="../../images/gmail.png"/><span>abutanjhonjoshua@gmail.com</span></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5vw', margin: '1.2vw' }}><img style={{width: '1.5vw', height: '1.5vw'}} src="../../images/message.png"/><span> +63 953 937 8933</span></div>
                </h2><br/>
                <h1 style={{fontSize: '3vw', marginBottom: '1.2vw'}}>Reach Out</h1>
                <div style={{display: 'flex', flexDirection: 'row', gap: '0.5vw', margin: '1vw'}}>
                    <img style={{width: '3vw', height: '3vw'}} src="../../images/linkedin.png"/>
                    <img style={{width: '3vw', height: '3vw'}} src="../../images/instagram.png"/>
                </div>

            </div>

            <div style={{
                position: 'absolute',
                top: '47%',
                color: 'black',
                right: '0%',
                textAlign: 'left',
                padding: '4vw 10%',
                backgroundColor: 'rgba(0, 255, 255, 0.01)',
                fontSize: '2vw',
                fontWeight: '800',
                }} className=" w-[50%] h-[auto]">
                <h1 style={{fontSize: '3vw', textAlign: 'center', marginBottom: '3vw'}}>Email Me</h1>
                <input type='text' placeholder='Name' style={{width: '100%', height: '3vw', border: '2px solid black', borderRadius: '5px', padding: '0.5vw', fontSize: '1vw', marginBottom: '2vw'}}/>
                <input type='text' placeholder='Email' style={{width: '100%', height: '3vw', border: '2px solid black', borderRadius: '5px', padding: '0.5vw', fontSize: '1vw', marginBottom: '2vw'}}/>
                <input type='text' placeholder='Subject' style={{width: '100%', height: '3vw', border: '2px solid black', borderRadius: '5px', padding: '0.5vw', fontSize: '1vw', marginBottom: '2vw'}}/>
                <textarea
                    id="emailMessage"
                    name="emailMessage"
                    placeholder="Type your message here..."
                    style={{
                        width: "100%",
                        minHeight: "120px",
                        resize: "vertical",
                        border: "2px solid black",
                        borderRadius: "5px",
                        marginBottom: "2vw",
                        padding: "0.5vw",
                        fontSize: "16px",
                        boxSizing: "border-box",
                    }}
                />
                <button type='submit' style={{background: 'black', color: 'white', fontWeight: '800', display: 'block', margin: '0 auto', width: '50%', height: '3.5vw', border: '2px solid black', borderRadius: '10px', padding: '0.5vw', fontSize: '1.5vw', marginBottom: '2vw'}}>Send</button>

            </div>
            
            </div>

        </main>
    );
}

