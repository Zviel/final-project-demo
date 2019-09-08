import React from 'react';
import { Player } from 'video-react';
import video from '../../assets/queue.mp4';
import '../../../node_modules/video-react/dist/video-react.css';
import './queue-part-a.styles.scss';


class QueuePartA extends React.Component {

    componentDidUpdate(prevProps, prevState) {
        this.player.load();
    }

    render() {
        return (
            <div className='container'>
                <h2> חלק א' מבני נתונים - תור, שיעור מס' 1</h2>
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
                <p className="textArea"> בשיעור זה נכיר את מבנה הנתונים, תור, </p>
                <p className="textArea"> נלמד על שימושו ועל הפעולות אשר ניתן לבצע באמצעותו</p>

            </div>
        );
    }
}

export default QueuePartA;