import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {Modal} from '@mui/material';

import {useAppDispatch, useAppSelector} from '../../../hooks';
import {trackActions} from '../../../store';
import css from './ModalImage.module.css';
import {urls} from "../../../constants";

const ModalImage: React.FC = () => {
    const {modelImage} = useAppSelector(state => state.trackState);
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const path = searchParams.get('path');

    useEffect(() => {
        if (path) {
            dispatch(trackActions.setModelImage(true));
        }
    }, [path, dispatch]);

    const handleClose = () => {
        dispatch(trackActions.setModelImage(false));
        searchParams.delete('path');
        setSearchParams(searchParams);
    };

    return (
        <Modal
            open={modelImage}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            className={css.modalContent}
        >
            <div className={css.modalContent}>
                <button className={css.closeButton} onClick={handleClose}>×</button>
                <img onClick={handleClose} className={css.img} src={urls.backdrop + path} alt="backdrop"/>
            </div>
        </Modal>
    );
};

export {ModalImage};