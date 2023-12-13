# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

// snow 
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
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 4,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}}

// start
options={{
    particles: {
        number: {
            value: 100,
        },
        color: {
            value: "#ffffff",
        },
        opacity: {
            value: 0.7,
            random: true,
        },
        size: {
            value: 3,
            random: true,
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            outMode: "out",
        },
    },
}}

//Lửa (Fire)

options={{
    particles: {
        number: {
            value: 50,
        },
        color: {
            value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 4,
            random: true,
        },
        move: {
            enable: true,
            speed: 6,
            direction: "top",
            outMode: "out",
        },
    },
}}

<!-- Nước (Water) -->
options={{
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00bfff",
        },
        opacity: {
            value: 0.7,
            random: false,
        },
        size: {
            value: 10,
            random: true,
        },
        move: {
            enable: true,
            speed: 8,
            direction: "bottom",
            outMode: "out",
        },
    },
}}

<!-- Bong Bóng (Bubbles) -->
options={{
    particles: {
        number: {
            value: 80,
        },
        color: {
            value: "#ff0000",
        },
        opacity: {
            value: 0.8,
            random: true,
        },
        size: {
            value: 40,
            random: true,
        },
        move: {
            enable: true,
            speed: 5,
            direction: "top",
            outMode: "out",
        },
    },
}}

<!-- Cánh Hoa (Flowers) -->
options={{
    particles: {
        number: {
            value: 60,
        },
        color: {
            value: "#ff77ff",
        },
        opacity: {
            value: 0.6,
            random: false,
        },
        size: {
            value: 10,
            random: true,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            outMode: "out",
        },
    },
}}

<!-- Tia Sáng (Light Rays) -->

options={{
    particles: {
        number: {
            value: 50,
        },
        color: {
            value: "#ffffff",
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 3,
            random: true,
        },
        move: {
            enable: true,
            speed: 10,
            direction: "none",
            outMode: "out",
        },
    },
}}

<!-- Hình Học (Geometric Shapes) -->

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