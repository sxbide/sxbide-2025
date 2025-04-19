import { Icon } from '@iconify/react/dist/iconify.js'
import Footer from '../../components/Footer/Footer'
import Projects from '../../components/Projects/Projects'
import './HomePage.css'

export default function HomePage() {
    return (
        <>

            <section className="home">

                <div className="about-me">
                    <div className="text">
                        <h2><span style={{ borderBottom: '1.5px solid rgb(98, 57, 211)' }}>self-taught developer</span> creating</h2>
                        <h2>add-ons for various videogames.</h2>
                    </div>
                    {/* 
                    <div className="avatar">
                        <img src="https://avatars.githubusercontent.com/u/113130117?v=4" alt="" />
                    </div> */}
                </div>

                <div className="about-me-description">
                    <h2>Hey<span>👋</span> I'm Sebastian, a 19 year old, austria-based developer with over four years of experience, mainly focused on building scalable & object-oriented backends in java. <div className='vertical-center'>I’m a big fan of MongoDB <Icon icon='skill-icons:mongodb'/> — it’s the core of my stack.</div>Since months now, web development caught my primary attention — it's exciting to bring creative ideas to life trough visual and interactive experiences. I've been experimenting with frontend tools like React — this webpage is actually one of the things I built!</h2>
                    {/* <break></break> */}
                </div>

                <div className="devider"></div>

                <Projects />

                <Footer />

            </section>
        </>
    )
}