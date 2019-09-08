import React from 'react';
import { Player } from 'video-react';
import video from '../../assets/aboutUs.mp4';
import '../../../node_modules/video-react/dist/video-react.css';
import './about-us.styles.scss';


class AboutUs extends React.Component {

    componentDidUpdate(prevProps, prevState) {
        this.player.load();
    }

    render() {
        return (
            <div className='container'>
                <h2>לחוץ טילים? צוות eCademy מזמין אתכם לצפות בסרטון קצר</h2>
                <Player className='video' playsInline  fluid={false}
                        width={800}
                        height={500}
                        ref={player => {
                            this.player = player;
                        }}
                        videoId="video-1"
                >
                    <source src={video} type="video/mp4"/>
                </Player>

            </div>
        );
    }
}

export default AboutUs;