import { Icon } from '@iconify/react/dist/iconify.js'
import './Resources.css'

export default function Resources() {
    return (
        <section className="resources">
            <header>
                <h1>Some projects i also made but arent that notable:</h1>
                <h2>All sourcecodes are available by clicking them.</h2>
            </header>
            <ul>
                <a href='https://github.com/sxbide/XUIDConverter' target='_blank'>
                    <div className="content">
                        <div className="avatar">
                            <Icon icon='solar:tuning-bold-duotone' />
                        </div>
                        <div className="description">
                            <h1>Bedrock UUID Converter</h1>
                            <h2>A java 21 utility class to convert bedrock uuids to a username.</h2>
                        </div>
                    </div>

                    <div className="language">
                        <span className='icon-java'>Minecraft</span>
                        <span className='icon-java'>Java</span>
                    </div>
                </a>
                <a href='https://github.com/sxbide/Shop' target='_blank'>
                    <div className="content">
                        <div className="avatar">
                            <Icon icon='icon-park-twotone:shopping' />
                        </div>
                        <div className="description">
                            <h1>Minecraft Shop</h1>
                            <h2>A spigot plugin to buy and sell items from - to a npc.</h2>
                        </div>
                    </div>

                    <div className="language">
                        <span className='icon-java'>Minecraft</span>
                        <span className='icon-java'>Java</span>
                        <span className='icon-java'>MongoDB</span>
                    </div>
                </a>

            </ul>
        </section>
    )
}