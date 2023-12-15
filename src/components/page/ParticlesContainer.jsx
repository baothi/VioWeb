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
                      fpsLimit: 120,
                      interactivity: {
                          events: {
                              onClick: {
                                  enable: true,
                                  mode: "push",
                              },
                              onHover: {
                                  enable: true,
                                  mode: "repulse",
                              },
                              resize: true,
                          },
                          modes: {
                              push: {
                                  quantity: 4,
                              },
                              repulse: {
                                  distance: 200,
                                  duration: 0.4,
                              },
                          },
                      },
                      particles: {
                          color: {
                              value: "#ffffff",
                          },
                          links: {
                              enable: false,
                          },
                          move: {
                              direction: "bottom",
                              enable: true,
                              outModes: {
                                  bottom: "out",
                              },
                              speed: 2,
                          },
                          number: {
                              density: {
                                  enable: true,
                                  area: 800,
                              },
                              value: 200,
                          },
                          opacity: {
                              value: 0.5,
                          },
                          shape: {
                              type: "circle",
                          },
                          size: {
                              value: { min: 1, max: 4 },
                          },
                      },
                      detectRetina: true,
                    }}
                />
            )}
        </>
    );
};

export default ParticlesContainer;
