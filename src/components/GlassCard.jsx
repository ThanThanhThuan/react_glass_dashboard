import { useRef } from 'react';

const GlassCard = ({ children, className = '', tilt = false, ...props }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!tilt || !cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const handleMouseLeave = () => {
        if (!tilt || !cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    };

    return (
        <div
            ref={cardRef}
            className={`glass-card ${tilt ? 'glass-card-3d' : ''} ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </div>
    );
};

export default GlassCard;