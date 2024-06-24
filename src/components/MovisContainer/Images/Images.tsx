import {FC} from "react";
import {ImageList, ImageListItem} from "@mui/material";

import {IImageInfo} from "../../../models";
import css from "./Images.module.css";
import {urls} from "../../../constants";
import {useAppDispatch} from "../../../hooks";
import {trackActions} from "../../../store";
import {useSearchParams} from "react-router-dom";

interface IProps {
    images: IImageInfo[];
}

const Images: FC<IProps> = ({images}) => {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <ImageList className={css.image_slider} cols={1}>
            {images.length > 0 && images.map((item) => (
                <ImageListItem key={item.file_path}>
                    {item.file_path.length > 0 && <img
                        onClick={() => {
                            searchParams.set('path', item.file_path);
                            setSearchParams(searchParams);
                            dispatch(trackActions.setModelImage(true));
                        }}
                        src={`${urls.image + item.file_path}?w=248&fit=crop&auto=format`}
                        srcSet={`${urls.image + item.file_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.file_path}
                        loading="lazy"
                    />}
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export {Images};