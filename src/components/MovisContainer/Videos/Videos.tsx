import {FC} from "react";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import YouTube from "react-youtube";

import {IVideoInfo} from "../../../models";
import css from "./Videos.module.css";

interface IProps {
    videos: IVideoInfo[]
}

const Videos: FC<IProps> = ({videos}) => {
    const opts = {
        playerVars: {
            autoplay: 0,
            origin: ''
        },
    };

    return (
        <div className={css.wrap}>
            <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                useKeyboardArrows={true}>
                {videos.slice(0, 5).map((video) => (
                    <div className={css.carousel} key={video.id}>
                        <div className={css.video_container}>
                            <YouTube opts={opts} videoId={video.key} className={css.youtube}/>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export {Videos};