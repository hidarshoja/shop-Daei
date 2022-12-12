import React from 'react';
import Chart from '../../components/chart/Chart';
import { xAxisData } from '../../datas';

const Tran = () => {
    return (
        <div style={{flex:'4'}}>
          <Chart  grid title="Sales of the years" data={xAxisData} dataKey="Sale" />  
        </div>
    );
}

export default Tran;
