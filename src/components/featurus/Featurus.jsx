import React from 'react';
import './Featurus.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Featurus() {
    return (
        <div className='featurus'>
            <div className="featurusItem">
                <span className="featurusTitle">Revanue</span>
                <div className="featurusContainer">
                    <span className='Money'>$ 2,415</span>
                    <span className='Rate'>-11.4 
                    <ArrowDownwardIcon className='featureIcon negative'/></span>
                </div>
                <span className='sub'>Compared to last month</span>
            </div>
            <div className="featurusItem">
                <span className="featurusTitle">Sales</span>
                <div className="featurusContainer">
                    <span className='Money'>$ 4,415</span>
                    <span className='Rate'>-1.4 
                    <ArrowDownwardIcon className='featureIcon negative'/></span>
                </div>
                <span className='sub'>Compared to last month</span>
            </div>
            <div className="featurusItem">
                <span className="featurusTitle">Cost</span>
                <div className="featurusContainer">
                    <span className='Money'>$ 2,225</span>
                    <span className='Rate'>+2.4 
                    <ArrowUpwardIcon className='featureIcon'/></span>
                </div>
                <span className='sub'>Compared to last month</span>
            </div>
        </div>
    );
}

export default Featurus;
