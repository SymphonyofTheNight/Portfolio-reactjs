import React, { useEffect, useRef } from 'react';

const RotatingTextCircle = ({ text, radius, speed }) => {
    const circleRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        let angle = 0;
        const animationId = setInterval(() => {
            angle += speed;
            circle.setAttribute(
                'transform',
                `rotate(${angle}, ${radius}, ${radius})`
            );
        }, 1000 / 60); // 60 FPS

        return () => {
            clearInterval(animationId);
        };
    }, [radius, speed]);

    return (
        <svg width={radius * 2} height={radius * 2}>
            <circle
                ref={circleRef}
                cx={radius}
                cy={radius}
                r={radius - 10}
                fill="transparent"
                stroke="black"
                strokeWidth=".5"
            />
            <text x={radius} y="10" textAnchor="middle" alignmentBaseline="middle">
                <textPath xlinkHref={`#${text}`}>
                    {text}
                </textPath>
            </text>
            <path id={text} d={`M ${radius},0 A ${radius},${radius} 0 1,1 0,${radius}`} fill="transparent" />
        </svg>
    );
};

export default RotatingTextCircle;
