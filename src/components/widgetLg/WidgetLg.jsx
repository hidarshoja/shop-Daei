import React from 'react';
import './WidgetLg.css';
import { newMembers } from '../../datas';
import { Members} from '../../datas';

const WidgetLg = () => {
    const Button = ({type}) => {
        return <button className={'lgButton ' + type}>{type}</button>
    }
    return (
        
            <div className="widgetLg">
                <h3 className="widgetTitle">latest transActions</h3>
                <table className="lgTable">
                    <tr className="lgTr">
                        <th className="lgTh"> Customer</th>
                        <th className="lgTh">Data</th>
                        <th className="lgTh">Amout</th>
                        <th className="lgTh">Status</th>
                    </tr>
                    {Members.map(user => (
                        
                    <tr className="lgTr" key={user.id}>
                        <td className="lgUser">
                            <img src={user.img} className='lgImg'/>
                            <span className='lgName'>{user.username}</span>
                        </td>
                        <td className="lgDate">
                            {user.data}
                        </td>
                        <td className='lgAmount'>
                            {user.price}
                        </td>
                        <td className="lgStatus">
                            <Button type={user.stutus}/>
                        </td>
                    </tr>
                    ))}
                </table>
            </div>
        
    );
}

export default WidgetLg;
