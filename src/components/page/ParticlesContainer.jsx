import { useEffect, useState, FC } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// interface ParticlesContainerProps {
//     // Define any props here if needed
// }

const ParticlesContainer = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container) => {
        console.log(container);
    };

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        particles: {
                            number: {
                                value: 200,
                                density: {
                                    enable: true,
                                    area: 800
                                }
                            },
                            color: {
                                value: "#00bfff",
                            },
                            opacity: {
                                value: 0.7,
                            },
                            size: {
                                value: 10,
                            },
                            move: {
                                enable: true,
                                speed: 1,
                                direction: "bottom",
                                outModes: {
                                    default: "out"
                                },
                            },
                        },
                    }}
                />
            )}
        </>
    );
};

export default ParticlesContainer;
