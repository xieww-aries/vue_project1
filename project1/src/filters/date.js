import {fillzero} from './fillzero';

export const date=(input)=>{
    let d=new Date();
    d.setTime(input);
    return `${d.getFullYear()}年${fillzero(d.getMonth()+1)}月${fillzero(d.getDate())}日 ${fillzero(d.getHours())}:${fillzero(d.getMinutes())}:${fillzero(d.getSeconds())}`;

};