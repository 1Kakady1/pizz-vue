export const isset = (variable) =>{
	if(typeof(variable) != "undefined" && variable !== null){
		return true
	}
	return false
}

export const getDate = () =>{
	let dateNow = new Date();

	const date        =   dateNow.getDate() > 9 ? dateNow.getDate() : "0" + dateNow.getDate();
	const month       =   dateNow.getMonth() + 1 > 9 ? dateNow.getMonth() + 1 : "0" + (dateNow.getMonth() + 1);
	const year        =   dateNow.getFullYear();
	const hours       =   dateNow.getHours() > 9 ? dateNow.getHours() : "0" + dateNow.getHours();
	const minutes     =   dateNow.getMinutes() > 9 ? dateNow.getMinutes() : "0" + dateNow.getMinutes();
	const fullDate    =   date + "/" + month + "/" + year + " " + hours + ":" + minutes;

	return {
		date: date,
		month: month,
		year: year,
		hours: hours,
		minutes: minutes,
		fullDate: fullDate
	}
}
/* eslint-disable */
export function set_cookie(cookie_name, cookie_val, expires_hours){
	if(typeof expires_hours === 'undefined'){
		expires_hours = -1;
	}
	var expires;
	var path;
	path = '; path=/';
	if(expires_hours !== -1){
		var d = new Date();
		d.setTime(d.getTime() + (expires_hours * 60 * 60 * 1000));
		expires = "; expires="+d.toUTCString();
	}else{
		expires = ";";
	}
	document.cookie = cookie_name+"="+cookie_val+path+expires;
}
/* eslint-disable */
export function getCookie(name) {
	var matches = document.cookie.match(
        /* eslint-disable */
		new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
}