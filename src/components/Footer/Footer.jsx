import { Icon } from '@iconify/react/dist/iconify.js';
import './Footer.css'

export default function Footer() {
    return (
        <section className="footer">
            <header>
                <h1>You can also contact me here:</h1>
            </header>
            <ul>
                <a href='https://github.com/sxbide' target='_blank'>
                    <div className="avatar">
                        <Icon icon='mdi:github' />
                    </div>
                    <div className="description">
                        <h1>Github</h1>
                    </div>
                </a>
                <a href='#' onClick={() => {alert('You can find me on discord as: 75dm')}}                >
                    <div className="avatar">
                        <Icon icon='ic:baseline-discord' target='_blank' />
                    </div>
                    <div className="description">
                        <h1>Discord</h1>
                    </div>
                </a>
            </ul>
        </section>
    );
}