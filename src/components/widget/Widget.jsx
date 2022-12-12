import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './Widget.css';
import { newMembers } from '../../datas';

const Widget = () => {
    return (
        <div className='widgetSm'>
            <span className="titleSm">New Join Members</span>
            <ul className="smList">
               {newMembers.map(user => (
                <li key={user.id} className="smListItem">
                    <img src={user.img} className='smImg'/>
                    <div className='smUser'>
                        <span className="smUserName">{user.username}</span>
                        <span className="smUserTitle">{user.title}</span>
                    </div>
                    <button className="smButton"><VisibilityIcon/></button>
                </li>
               ))}
            </ul>
        </div>
    );
}

export default Widget;
