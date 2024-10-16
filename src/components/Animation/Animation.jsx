import React, { useEffect, useState } from 'react';
import "./Animation.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Animation() {
    const [svgDimensions, setSvgDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        rectX: (window.innerWidth - 250) / 2,
        rectY: (window.innerHeight - 400) / 2,
    });

    useEffect(() => {
        const handleResize = () => {
            setSvgDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
                rectX: (window.innerWidth - 250) / 2,
                rectY: (window.innerHeight - 400) / 2,
            });
        };

        window.addEventListener('resize', handleResize);
        
        const pinAnimation = gsap.to(".mainAnimationImagesContainer", {
            scrollTrigger: {
                trigger: ".mainAnimationContainer",
                scroller: "body",
                start: "top top",
                end: "top -400%",
                pin: true
            }
        });

        const opacityAnimation = gsap.to(".stripImages", {
            opacity: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: ".mainAnimationImagesContainer",
                scroller: "body",
                start: "top top",
                end: "top -25%",
                scrub: 1
            }
        });

        const maskAnimation=gsap.to(".svgMaskElement",{
            x:svgDimensions.rectX,
            y:svgDimensions.rectY,
            width:250,
            height:400,
            rx:20,
            scrollTrigger:{
                trigger:".svgDimensions.rectX",
                scroller:"body",
                start:"top -120%",
                end:"top -170%",
                scrub:1
            }
        })

        return () => {
            pinAnimation.kill();
            opacityAnimation.kill();
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="mainAnimationContainer">
            <div className="mainAnimationImagesContainer">
                <img className="stripImages" src="/assets/strips/strip1.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip2.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip3.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip4.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip5.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip6.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip7.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip8.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip9.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip10.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip11.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip12.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip13.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip14.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip15.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip16.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip17.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip18.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip19.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip20.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip21.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip22.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip23.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip24.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip25.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip26.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip27.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip28.png" alt="strip" />
                <img className="stripImages" src="/assets/strips/strip29.png" alt="strip" />

                <svg className="mask" viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`} xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <mask id="cardMask">
                            <rect width="100%" height="100%" fill="white" />
                            <rect  className="svgMaskElement" x="0" y="0" width={svgDimensions.width} height={svgDimensions.height}  fill="black" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="white" mask="url(#cardMask)" />
                </svg>
            </div>
        </div>
    );
}

export default Animation;
