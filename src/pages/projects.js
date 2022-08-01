import { Component } from "react"
import ProjectBox from "../components/project-box"
import AutoWatering from "../assets/AutoWateringSchem.jpg"
import Pokeball from "../assets/Pokeball.jpg"
import BookTrader from "../assets/BookTrader.png"
import CalCheck from "../assets/CalCheck.png"
import Chess from "../assets/chess.png"
import Depreak from "../assets/Depreak Gameplay.png"
import MIPS from "../assets/MIPS Simulator.png"
import PicFromTexts from "../assets/PicFromTexts.png"
import SmartHome from "../assets/SmartHome.png"
import Stackmat from "../assets/Stackmat.jpg"
import TetrisPuzzle from "../assets/TetrisPuzzle.png"
import TetroRhythm from "../assets/TetroRhythm.webp"
import TextTransformer from "../assets/TextTransformer.png"
import Xpira from "../assets/Xpira.png"
import LinkType from "../enums/link-type"

class Projects extends Component {
    programmingProjects = [
        {
            name: "TetroRhythm",
            links: [
                {
                    type: LinkType.Github,
                    href: "https://github.com/ChauLe19/TetroRhythm"
                },
                {
                    type: LinkType.Youtube,
                    href: "https://www.youtube.com/watch?v=EFS-EdkFegI"
                },
                {
                    type: LinkType.Other,
                    href: "https://github.com/ChauLe19/TetroRhythm/releases/tag/v0.1.0"
                }
            ],
            image: TetroRhythm,
            description: "A puzzle game that challenges you to place blocks to the beat"
        },
        {
            name: "CalCheck",
            links: [
                {
                    type: LinkType.Github,
                    href: "https://github.com/aditi977/CalCheck-2.0"
                }
            ],
            image: CalCheck,
            description: "A calorie tracking website"
        },
        {
            name: "Xpira",
            links: [
                {
                    type: LinkType.Github,
                    href: "https://github.com/daltarace/HackVioletProject"
                },
                {
                    type: LinkType.Youtube,
                    href: "https://www.youtube.com/watch?v=aUJ_0MKUKnY"
                },
                {
                    type: LinkType.Other,
                    href: "https://devpost.com/software/xpira"
                }
            ],
            image: Xpira,
            description: "An Android app for tracking expiration date of items"
        },
        {
            name: "Chess",
            links: [
                {
                    type: LinkType.Github,
                    href: "https://github.com/ChauLe19/Chess"
                }
            ],
            image: Chess,
            description: "A 2-player chess game"
        },
        {
            name: "BookTrader",
            links: [
                {
                    type: LinkType.Github,
                    href: "https://github.com/ChauLe19/Book_Exchange-2.0"
                }
            ],
            image: BookTrader,
            description: "A website for buying and selling books"
        },
        {
            name: "Pic Made From Unicode Texts",
            links: [
                {
                    type: LinkType.Github,
                    href: "https://github.com/ChauLe19/PicMadeFromTexts"
                },
                {
                    type: LinkType.Other,
                    href: "https://chaule19.github.io/PicMadeFromTexts/"
                }
            ],
            image: PicFromTexts,
            description: "Convert your picture to a Picture made from Unicode Texts"
        },
        {
            name: "Text Transformer",
            links: [
                {
                    type: LinkType.Other,
                    href: "/TextTransformer"
                }
            ],
            image: TextTransformer,
            description: "A customizable text transformer"
        },
        {
            name: "Depreak",
            links: [
            ],
            image: Depreak,
            description: "A remix of the Brick Breaker game",
            message: "I have no backup of this project :((("
        },
        {
            name: "MIPS Simulator",
            links: [
                {
                    type: LinkType.Github,
                    href: "https://github.com/ChauLe19/MIPS_Simulator"
                }
            ],
            image: MIPS,
            description: "A debugger for MIPS program",
            message: "(University project. Code cannot be public anytime soon.)"
        },
        {
            name: "TetrioStats2Csv",
            links: [
                {
                    type: LinkType.Github,
                    href: "https://github.com/ChauLe19/TetrioStats2Csv"
                }
            ],
            image: "https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg",
            description: "Get Tetr.io players' stats and output to .csv file"
        },
    ]
    
    otherProjects = [
        {
            name: "Smart Home Project",
            links: [
                {
                    type: LinkType.Github,
                    href: "https://github.com/ChauLe19/SmartHomeProject"
                },
                {
                    type: LinkType.Youtube,
                    href: "https://www.youtube.com/watch?v=EYejsoCmu1w"
                }
            ],
            image: SmartHome,
            description: "A home automation prototype controllable by a computer GUI application via Bluetooth",
            message: "(University project. Code cannot be public anytime soon.)"
        },
        {
            name: "Tetris Puzzle",
            links: [
                {
                    type: LinkType.Other,
                    href: "https://www.thingiverse.com/thing:4661066"
                }
            ],
            image: TetrisPuzzle,
            description: "A 3D model of a Tetris Puzzle"
        },
        {
            name: "Automatic Plant Watering System",
            links: [
                {
                    type: LinkType.Other,
                    href: "https://drive.google.com/file/d/1Ltds0gr_l8ZcJWsi4f2SzXRMSAluUd-O/view?usp=sharing"
                }
            ],
            image: AutoWatering,
            description: "Automatic system that waters plants based on soil moisture"
        },
        {
            name: "Stackmat",
            links: [
                {
                    type: LinkType.Github,
                    href: "https://drive.google.com/file/d/12SJhsdVNekENgSdLvOsQI23MkvlIu5VT/view"
                },
                {
                    type: LinkType.Youtube,
                    href: "https://drive.google.com/file/d/1lDcPcrXZjifQzWkgSoDj4jNCBydAqcox/view"
                },
                {
                    type: LinkType.Other,
                    href: "https://www.instructables.com/Arduino-Stack-Mat/"
                }
            ],
            image: Stackmat,
            description: "A low-cost stackmat for cubing and cub stacking"
        },
        {
            name: "Pokeball Wireless Earbuds Case",
            links: [
                {
                    type: LinkType.Other,
                    href: "https://www.thingiverse.com/thing:5443386"
                }
            ],
            image: Pokeball,
            description: "A 3D model of a wireless earbuds cases shaped like a Pokeball"
        },
    ]

    render() {
        return (
            <div className="page">
                <div className="title" style={{ textAlign: "center" }}>Programming Projects</div>
                <div className="projects-section">
                    {this.programmingProjects.map((project) => (
                        <ProjectBox name={project.name} links={project.links} description={project.description} image={project.image} message={project.message} key={project.name} />
                    ))}
                </div>
                <div className="title" style={{ textAlign: "center" }}>Other Projects</div>
                <div className="projects-section">
                    {this.otherProjects.map((project) => (
                        <ProjectBox name={project.name} links={project.links} description={project.description} image={project.image} message={project.message} key={project.name} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Projects;