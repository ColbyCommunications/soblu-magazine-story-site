import React from 'react';
import Nav from './Nav';

const LoadingTakeover = () => (
    <>
        <Nav />
        <div className="d-flex justify-content-center mt-6">
            <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    </>
);

export default LoadingTakeover;
