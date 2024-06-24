import {FC} from 'react';
import {ImageList, ImageListItem} from "@mui/material";
import {useSearchParams} from "react-router-dom";

import css from './ImagesLogo.module.css';
import {urls} from "../../../constants";
import {IImageInfo} from "../../../models";
import {useAppDispatch} from "../../../hooks";
import {trackActions} from "../../../store";


interface IProps {
    images: IImageInfo[];
}

const ImagesLogo: FC<IProps> = ({images}) => {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <ImageList className={css.image_slider} cols={1}>
            {images.map((item) => (
                <ImageListItem key={urls.image + item.file_path}>
                    <img
                        onClick={() => {
                            searchParams.set('path', item.file_path);
                            setSearchParams(searchParams);
                            dispatch(trackActions.setModelImage(true));
                        }}
                        src={`${urls.image + item.file_path}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${urls.image + item.file_path}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={urls.image + item.file_path}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export {ImagesLogo};