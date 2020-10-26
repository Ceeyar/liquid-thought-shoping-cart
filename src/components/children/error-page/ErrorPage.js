import React from 'react';
import './ErrorPage.scss';
import Helmet from 'react-helmet';

const noMatch = ({title }) => {
    var temTitlle = 'Oooopsie';

    return (
        <div className='no-match'>
            <Helmet>
                <title>{title ? title : temTitlle}</title>
            </Helmet>
            <p className='p-content h1'>Oooopsie, It's either you're lost or we are still under construction 
            <br />
            How about you try the <strong>home page</strong>?</p>
        </div>
    )};

export default noMatch;