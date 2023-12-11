// tsParticlesOptions.ts
interface TsParticlesOptions {
    particles: {
      number: {
        value: number;
        density: {
          enable: boolean;
          value_area: number;
        };
      };
      // Continue defining the structure...
    };
    interactivity: {
      detect_on: string;
      events: {
        onhover: {
          enable: boolean;
          mode: string;
        };
        onclick: {
          enable: boolean;
          mode: string;
        };
        resize: boolean;
      };
      modes: {
        grab: {
          distance: number;
          line_linked: {
            opacity: number;
          };
        };
        // Continue defining the structure...
      };
    };
    retina_detect: boolean;
  }
  
  export const options: TsParticlesOptions = {
    // Your options object as defined earlier
  };
  