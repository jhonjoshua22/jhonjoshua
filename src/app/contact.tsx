'use client';
import DotGrid from '../components/DotGrid/DotGrid';
import '../components/DotGrid/DotGrid.css';
import GooeyNav from '../components/GooeyNav/GooeyNav';
import '../components/GooeyNav/GooeyNav.css';

export default function Home() {
    const items = [
        { label: "Portfolio", href: "/" },
        { label: "Contact"},
    ];

    return (
        <main className="relative bg-black min-h-screen" style={{ backgroundColor: "black" , minHeight: "100vh" }}>
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <DotGrid
    dotSize={10}
    gap={15}
    baseColor="#5227FF"
    activeColor="#5227FF"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
</div>

        
        </main>
    );
}

