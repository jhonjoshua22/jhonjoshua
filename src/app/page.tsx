'use client';

import GooeyNav from '../components/GooeyNav/GooeyNav';
import '../components/GooeyNav/GooeyNav.css';
import Threads from '../components/Threads/Threads';
import '../components/Threads/Threads.css';
import BlurText from '../components/BlurText/BlurText';
import TrueFocus from '../components/TrueFocus/TrueFocus';
import '../components/TrueFocus/TrueFocus.css';
import CircularText from '../components/CircularText/CircularText';
import '../components/CircularText/CircularText.css';
import Image from 'next/image';
import Stacks from '../components/Stacks/Stacks';
import '../components/Stacks/Stacks.css';
import StarBorder from '../components/StarBorder/StarBorder';
import '../components/StarBorder/StarBorder.css';
import CircularGallery from '../components/CircularGallery/CircularGallery';
import '../components/CircularGallery/CircularGallery.css';
import Typing from '../components/Typing/Typing';
import { navItems } from '../constants/navItems';
import Particles from '../components/Particles/Particles';
import '../components/Particles/Particles.css';

export default function Home() {
    const items = [
        { label: "Portfolio", href: "/" },
        { label: "Contact", href: "/contact" },
    ];

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    const images = [
        { id: 1, img: "../images/food.jpeg" },
        { id: 2, img: "../images/disney.jpeg" },
        { id: 3, img: "../images/cat.jpeg" },
        { id: 4, img: "../images/converse.jpeg" },
    ];

    return (
        <main className="relative bg-black min-h-screen" style={{ backgroundColor: "white" , minHeight: "100vh" }}>
            
            
            <CircularText
                text=" Josh Abutan * Josh Abutan *"
                onHover="speedUp"
                spinDuration={20}
            />    
            

            <GooeyNav style={{fontSize: '1vw', fontFamily: 'Gilroy', fontWeight: 800}}items={navItems} />

            <div style={{ width: '100%', height: '60vh', position: "absolute"}} className="hidden md:block">
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </div>

            <div style={{  color: 'black', background: "transparent", marginTop: '15vw', fontFamily: 'Gilroy', fontWeight: 800}} className=" w-full flex justify-center items-center my-4 md:mt-15 text-center font-bold relative px-4 md:px-0">
                <BlurText
                    text="Joshua Abutan"
                    delay={150}
                    animateBy="letters"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="lg:text-9xl md:text-7xl text-4xl text-center"
                />
            </div>

            <div style={{ color: 'black', marginBottom: '25vw', fontSize: '5vw', fontFamily: 'Gilroy', fontWeight: 800 }}>
                <TrueFocus
                    sentence="Design. Create. Transform."
                    manualMode={true}
                    blurAmount={5}
                    borderColor="red"
                    animationDuration={0.5}
                    pauseBetweenAnimations={1}
                />
            </div>

            <div style={{color: 'black', fontFamily: 'Gilroy', fontWeight: 800, zIndex: '1', marginBottom: '15vw'}}className="justify-center flex  gap-10 mt-[1vw]">
            <div className="p-[2vw] ml-[15vw] flex-col w-[40vw] z-[0] h-[40vw]">
                <h1 id="about" className="text-left w-[100%] text-[6vw] font-bold"> About me...</h1>
                <Typing className="w-[100%] text-[1vw] h-[10vw]"/>
                <h2 style={{fontFamily: 'Gilroy', fontWeight: 800}}className="text-[1.6vw]">Tech Stack</h2>
                <StarBorder
                    as="button"
                    className="custom-class"
                    color="black"
                    speed="4s"
                    >
                React
                </StarBorder>
                <StarBorder
                    as="button"
                    className="custom-class"
                    color="black"
                    speed="5s"
                    >
                Javascript
                </StarBorder>
                <StarBorder
                    as="button"
                    className="custom-class"
                    color="black"
                    speed="7s"
                    >
                Next.js
                </StarBorder>
                <StarBorder
                    as="button"
                    className="custom-class"
                    color="black"
                    speed="6s"
                    >
                CSS
                </StarBorder>
                <StarBorder
                    as="button"
                    className="custom-class"
                    color="black"
                    speed="4s"
                    >
                Tailwind
                </StarBorder><br/>
                <StarBorder
                    as="button"
                    className="custom-class"
                    color="black"
                    speed="3s"
                    >
                Php
                </StarBorder>
                <StarBorder
                    as="button"
                    className="custom-class"
                    color="black"
                    speed="5s"
                    >
                MySQL
                </StarBorder>
                <StarBorder
                    as="button"
                    className="custom-class"
                    color="black"
                    speed="7s"
                    >
                HTML
                </StarBorder>
                <br/><br/><h2 style={{fontFamily: 'Gilroy', fontWeight: 800}}className="text-[1.6vw]">Creative Tools</h2>
                <StarBorder
                    as="button"
                    className="custom-class"
                    color="black"
                    speed="2s"
                    >
                Figma
                </StarBorder>
                <StarBorder
                    as="button"
                    className="custom-class"
                    color="black"
                    speed="4s"
                    >
                Canva
                </StarBorder>
                <StarBorder
                    as="button"
                    className="custom-class"
                    color="black"
                    speed="6s"
                    >
                After Effects
                </StarBorder>
                <StarBorder
                    as="button"
                    className="custom-class"
                    color="black"
                    speed="5s"
                    >
                Illustrator
                </StarBorder>
            </div>

            <Stacks
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 400, height: 400 }}
                cardsData={images}
            />
            </div>

            <div style={{height: '40vw', position: 'relative' }} className="ml-[15vw] flex-col w-[100%] z-[0]">
                <h1 id="about" className="text-center w-[100%] text-[6vw] font-bold text-black">Highlights</h1>
                <CircularGallery bend={0} textColor="black" borderRadius={0.02} />
            </div>
            
            <div className="relative h-[50vw] flex items-center justify-between overflow-hidden px-[5vw]">
  
                <div className="absolute inset-0 w-full h-full z-0">
                    <Particles
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

                <div className="w-[40%] h-full flex items-center justify-center relative z-[0]">
                    <img
                        src="../images/experiences.png"
                        alt="Soft Skills Illustration"
                        className="w-full h-full object-contain pointer-events-none"
                    />
                </div>

                <div className="w-[55%] text-black font-bold relative z-[0]" style={{ padding: '4%' }}>
                    <h1 className="text-[2.5vw] text-left">
                        Soft Skills &<br />Other Professional Experiences
                    </h1>
                    <br />
                    <p className="text-[1vw] text-left leading-relaxed">
                        Before transitioning into web development, I worked as a Technical Support Representative for both Singaporean and American telecom companies from 2022 to 2024.<br /><br />
                        In 2025, I took on the role of Social Media and Community Manager for an indie educational game, managing outreach, content, and player engagement.
                    </p>
                    <br />
                    <p className="text-[1vw] text-left leading-relaxed">
                    I bring a strong set of soft skills that complement my technical abilities, including clear communication, adaptability, problem solving, teamwork, and a user-first mindset — all essential for building intuitive and user-friendly web experiences.<br /><br />
                    I'm a fast learner, highly organized, and thrive in collaborative environments where feedback and iteration drive better outcomes.
                    </p>
                </div>
            </div>

            <div className="text-black">
                <h1 className="text-center text-[6vw] font-bold">Project Showcase</h1>
                <div className="h-[auto] w-full grid grid-cols-3 gap-4" style={{ padding: '3% 2%' }}>
                    <div className="bg-gray-200 p-4 h-[28vw]"><img src="../images/scFrame.png"/>
                        <h1 style={{ 
                            textAlign: 'center', 
                            fontSize: '2vw', 
                            zIndex: '2',
                            fontWeight: 800,
                            fontFamily: 'Gilroy',
                            marginTop: '-8vw',}}>
                                Smart Clinic
                        </h1>
                    </div>
                    <div className="bg-gray-200 p-4 h-[28vw]"><a href="https://github.com/jhonjoshua22/ClassicGamesHub/settings/pages"><img src="../images/cghFrame.png"/></a>
                        <h1 style={{ 
                            textAlign: 'center', 
                            fontSize: '2vw', 
                            zIndex: '2',
                            fontWeight: 800,
                            fontFamily: 'Gilroy',
                            marginTop: '-8vw',}}>
                                Classic Games Hub
                        </h1>
                    </div>
                    <div className="bg-gray-200 p-4">Item 3</div>
                    <div className="bg-gray-200 p-4 h-[28vw]">Item 4</div>
                    <div className="bg-gray-200 p-4">Item 3</div>
                    <div className="bg-gray-200 p-4"></div>
                </div>
            </div>
            
        </main>
    );
}


