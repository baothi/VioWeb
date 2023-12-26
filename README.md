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


import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

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

    const particlesLoaded = (container: any) => {
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
                      speed: 1,
                      direction: "bottom",
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


import { useState, useEffect } from 'react';
import Vio_Logo from '../../assets/images/Vio Full Logo_2.svg';
import USA from '../../assets/images/USA.png';
import vietnam from '../../assets/images/VietNam.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Header = () => {
  // Retrieve the language from localStorage or default to USA
  const { t } = useTranslation();
  const initialLanguage = localStorage.getItem('language') || 'vi';
  // let initialLanguage = localStorage.getItem('language')
  // if (!initialLanguage) {
  //   initialLanguage = 'en';
  //   localStorage.setItem('language', initialLanguage);
  // }
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);
  const { i18n } = useTranslation();

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const changeLanguage = (languageImage: string) => {
    console.log("languageImage" +languageImage);
    const newLang = languageImage === `${USA}` ? 'en' : 'vi';
    console.log("newLang" + newLang);
    i18n.changeLanguage(newLang);
    setCurrentLanguage(newLang);
    setShowSubMenu(false);

    // Store the selected language in localStorage
    localStorage.setItem('language', newLang);
  };

  // This effect runs when the component mounts and updates the language
  // based on the stored value in localStorage.
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    console.log("storedLanguage: " , storedLanguage)
    if (storedLanguage) {
      const langCode = storedLanguage === `${USA}` ? 'en' : 'vi';
      console.log("langCode" + langCode);
      i18n.changeLanguage(langCode);
    }
  }, [i18n]);

  return (
    <>
      <header>
        <div className="grid-container">
          <div className="grid-100">
            <div className="nav">
              <Link to="/" className="logo"><img src={Vio_Logo} alt="" /></Link>
              <div className="nav_right">
                <ul className={showSubMenu ?"change_language expanded_menu" : "change_language"}>
                  <li onClick={toggleSubMenu}>
                    <img src={currentLanguage === 'vi' || undefined  ? vietnam : USA} alt="" />
                    {showSubMenu && (
                      <ul className="sub_menu">                     
                        {currentLanguage === 'en' ?
                        <li onClick={() => changeLanguage(vietnam)}>
                        <img src={vietnam} alt="Vietnam" />
                      </li>
                        :
                        <li onClick={() => changeLanguage(USA)}>
                        <img src={USA} alt="USA" />
                      </li> 
                        }
                      </ul>
                    )}
                  </li>
                </ul>
                <Link to="/business" className="button_link">
                <div dangerouslySetInnerHTML={{ __html: t("FOR BUSINESS") }} />
                  
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
