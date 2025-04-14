import { Icon } from '@iconify/react/dist/iconify.js';
import './Footer.css'

export default function Footer() {
    return (
        <section className="footer">
            <header>
                <h1>Social platforms I use:</h1>
                <h2>Feel free to contact me there — I'll get back to you.</h2>
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
                <a href='https://instagram.com/sebvstianf' target='_blank'>
                    <div className="avatar">
                        <Icon icon='mdi:instagram'/>
                    </div>
                    <div className="description">
                        <h1>Instagram</h1>
                    </div>
                </a>
            </ul>
        </section>
    );
}