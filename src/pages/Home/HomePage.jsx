import Footer from '../../components/Footer/Footer'
import Projects from '../../components/Projects/Projects'
import './HomePage.css'

export default function HomePage() {
    return (
        <>

            <section className="home">

                <div className="about-me">
                    <h2><span style={{ borderBottom: '1px solid rgb(98, 57, 211)'}}>Java Developer</span> creating</h2>
                    <h2>add-ons for various videogames.</h2>
                </div>

                <div className="about-me-description">
                    <h2>Hey👋 I'm Sebastian, a 19 year old, austria-based developer with over four years of experience. I specialize in building object-oriented backends in java.</h2>
                    <break></break>
                    <h2>I'm currently working on a multiplayer game platform called landaria.net, where I focus on developing with the latest version and leveraging the newest features and opportunities it offers. We launch our open beta in summer 2025.</h2>
                </div>

                <div className="devider"></div>

                <Projects />
                
                <Footer />

            </section>
        </>
    )
}