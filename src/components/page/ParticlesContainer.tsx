import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesContainer = () => {
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
      <>
        { init && (<Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                particles: {
                    number: {
                        value: 5,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: "#ff0000",
                    },
                    opacity: {
                        value: 1,
                        random: true,
                    },
                    size: {
                        value: 80,
                        random: false,
                    },
                    move: {
                        enable: true,
                        speed: 100,
                        direction: "none",
                        random: true,
                        outMode: "out",
                    },
                },
            }}
        />)}
      </>
)
    ;
};

export default ParticlesContainer;