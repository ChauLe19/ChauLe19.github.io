import React from "react";
import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export class ParticlesContainer extends React.PureComponent{
  // this customizes the component tsParticles installation
  async customInit(engine){
    // this adds the preset to tsParticles, you can safely use the
    await loadStarsPreset(engine);
  }

  render() {
    const options = {
      preset: "stars",
      background: {
        color: {
            value: "#130027",
        },
      },
      particles: {
        number: {
          value: 200,
          density: {
            enable: true
          }
        }
      }
    };

    return <Particles options={options} init={this.customInit} />;
  }
}