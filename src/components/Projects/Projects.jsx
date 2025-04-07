import { Icon } from '@iconify/react/dist/iconify.js'
import './Projects.css'

export default function Projects() {
    return (
        <section className="projects">
            <header>
                <h1>Notable projects i have made:</h1>
                <h2>Most of my other projects are not notable and private.</h2>
            </header>
            <ul>
                <a href='#' target='_blank'>
                    <div className="avatar">
                        <Icon icon='solar:hiking-bold-duotone' />
                    </div>
                    <div className="description">
                        <h1>Landaria.Net</h1>
                        <h2>A multiplayer game platform for minecraft 1.21.4</h2>
                    </div>
                </a>
                
                <a href='https://github.com/sxbide/ak-injector' target='_blank'>
                    <div className="avatar">
                        <Icon icon='solar:pipette-bold-duotone' />
                    </div>
                    <div className="description">
                        <h1>Ak Injector</h1>
                        <h2>A dll injector written in rust to load a dll file into a running process to modify its behavior.</h2>
                    </div>
                </a>
                
            </ul>
        </section>
    )
}