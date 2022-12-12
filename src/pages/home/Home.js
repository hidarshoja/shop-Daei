import React from 'react';
import Featurus from '../../components/featurus/Featurus';
import './Home.css';
import Chart from '../../components/chart/Chart';
import Widget from '../../components/widget/Widget';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { xAxisData } from '../../datas';


const Home = () => {
    return (
        <div className='home'>
            <Featurus />
            <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale"/>
            <div className='homeWidgets'>
               <Widget /> 
               <WidgetLg />
            </div>
        </div>
    );
}

export default Home;
