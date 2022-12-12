import React from 'react';
import {data} from '../../datas';
import Chart2 from '../../components/chart2/Chart2';

const Reports = () => {
    return (
        <div style={{flex:"4"}}>
            <Chart2  grid title="Month Sale" data={data} dataKey="Sale"/>
        </div>
    );
}

export default Reports;
