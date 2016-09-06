/**
 * Created by Administrator on 2016/8/11.
 */
function setCookies(name,value,isDay) {
    var date=new Date();
    date.setDate(date.getDate()+isDay);
    document.cookie=name+"="+value+";expires="+date.toString();
}