// ParticlesContainer.tsx
import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { options } from "./tsParticlesOptions"; // Import your options

interface ParticlesContainerProps {
  // Define any props here if needed
}

export class ParticlesContainer extends React.PureComponent<ParticlesContainerProps> {
  async customInit(engine: any): Promise<void> {
    await loadFull(engine);
  }

  render() {
    const particleStyles = {
      backgroundColor: "rgb(182, 25, 36)",
      backgroundImage: "url('')", // Set your image URL here
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%"
    };

    return <Particles id="particles-js" style={particleStyles} options={options} init={this.customInit} className="particles_ani"/>;
  }
}
