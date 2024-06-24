import {FC} from "react";
import {Rating} from "@mui/material";

import {IInfo} from "../../../models";
import css from "./MovieInfo.module.css";
import {useAppSelector} from "../../../hooks";
import {urls} from "../../../constants";
import {GenreBadge} from "../../GenreContainer";
import {Images} from "../Images/Images.tsx";
import {Videos} from "../Videos/Videos.tsx";
import {ImagesLogo} from "../ImagesLogo/ImagesLogo.tsx";
import {FavoriteMovie} from "../../UI";

interface IProps {
    movie: IInfo
}

const MovieInfo: FC<IProps> = ({movie}) => {
    const {
        id,
        backdrop_path,
        original_title,
        popularity,
        genres,
        budget,
        homepage,
        vote_average,
        vote_count,
        release_date,
        original_language,
        overview,
        revenue,
        images,
        videos
    } = movie;

    const {isDarkMode} = useAppSelector(state => state.trackState);
    const backdrop = urls.backdrop + backdrop_path;
    return (
        <div className={css.wrap}>
            {(backdrop_path && backdrop_path.length > 0) &&
                <img className={css.background_fon} src={backdrop} alt="font"/>
            }

            <div id={isDarkMode ? 'icon_color_dark' : 'icon_color_light'} className={css.container_title}>
                {original_title}
            </div>

            <div className={css.content_wrap}>

                <div className={css.log_and_content}>
                    {/*Images logo slider*/}
                    <div className={css.logo}>
                        {images.logos.length > 0 && <ImagesLogo images={images.logos}/>}
                    </div>

                    {/*Descriptions about movie*/}
                    <div className={css.movie_content}>
                        <div>
                            <a id={isDarkMode ? 'text_color_dark' : 'text_color_light'} href={homepage}> :Original
                                link</a>
                        </div>
                        <div className={css.wrap_badge}>
                            {genres.length > 0 && genres.map(badge => badge &&
                                <GenreBadge key={badge.id} badge={badge}/>)}
                        </div>
                        {/*Favorite icon*/}
                        <FavoriteMovie movie={movie}/>
                        <Rating sx={{marginLeft: 10}}
                                key={id}
                                name="half-rating-read"
                                defaultValue={Number(vote_average) / 2}
                                precision={0.5} readOnly
                                size="large"/>
                        <div id={isDarkMode ? 'text_color_dark' : 'text_color_light'}>
                            <h4>Popularity: {popularity}</h4>
                            <h4>Data release: {release_date}</h4>
                            <h5>Language: {original_language}</h5>
                            {budget > 0 && <h5>Budget: {budget}$</h5>}
                            {revenue > 0 && <h5>Revenue: {revenue}$</h5>}
                            <h5>Vote count: {vote_count}</h5>
                            <h5>Vote average: {vote_average}</h5>
                            <b>{overview}</b>
                        </div>
                    </div>
                </div>

                {/*Images slider*/}
                {images.backdrops.length > 0 &&
                    <div id={isDarkMode ? 'text_color_dark' : 'text_color_light'} className={css.other_content}>
                        <h4>Images slider:</h4>
                        {images.backdrops.length > 0 && <Images images={images.backdrops}/>}
                    </div>}

            </div>

            {/*Video carousel*/}
            {videos.results.length > 0 &&
                <div id={isDarkMode ? 'text_color_dark' : 'text_color_light'} className={css.video_content}>
                    <h4>YouTube Videos:</h4>
                    {videos.results.length > 0 && <Videos videos={videos.results}/>}
                </div>}
        </div>
    );
};

export {MovieInfo};