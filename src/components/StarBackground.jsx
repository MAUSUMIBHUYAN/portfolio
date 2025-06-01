import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 5000
        );
        const newStars = [];
        const starColors = [
            '#ffffff', // white
            '#f8f8ff', // ghost white
            '#e6e6fa', // lavender
            '#b0e0e6', // powder blue
            '#add8e6', // light blue
            '#ffd700', // gold
            '#ffa500', // orange
            '#ff7f50', // coral
        ];
        
        for (let i = 0; i < numberOfStars; i++) {
            const color = starColors[Math.floor(Math.random() * starColors.length)];
            const size = Math.random() * 4 + 1;
            const opacity = Math.random() * 0.8 + 0.2;
            
            newStars.push({
                id: i,
                size: size,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: opacity,
                color: color,
                animationDuration: Math.random() * 3 + 2,
                animationDelay: Math.random() * 5,
                twinkleIntensity: Math.random() * 0.6 + 0.6,
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 2,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 3,
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        backgroundColor: star.color,
                        animationDuration: star.animationDuration + "s",
                        animationDelay: star.animationDelay + "s",
                        boxShadow: `0 0 ${star.size * 3}px ${star.size}px ${star.color}`,
                        filter: `brightness(${star.twinkleIntensity})`,
                    }}
                />
            ))}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor"
                    style={{
                        position: 'absolute',
                        width: meteor.size * 50 + "px", // Longer tail
                        height: meteor.size + "px", // Thinner line
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%)', // Sharper fade
                        borderRadius: meteor.size + "px",
                        filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))',
                        transform: 'rotate(215deg)',
                        transformOrigin: 'left center',
                        opacity: 0,
                        animation: `meteor ${meteor.animationDuration}s linear ${meteor.delay}s infinite`,
                        willChange: 'transform, opacity',
                    }}
                />
            ))}
        </div>
    );
};