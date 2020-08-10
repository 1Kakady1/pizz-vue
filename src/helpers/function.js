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

/* eslint-disable */
export const bodyFixPosition = (callback = null) => {
    setTimeout(function() {
        /* Ставим необходимую задержку, чтобы не было «конфликта» в случае, если функция фиксации вызывается сразу после расфиксации (расфиксация отменяет действия расфиксации из-за одновременного действия) */

        if (!document.body.hasAttribute("data-body-scroll-fix")) {
            // Получаем позицию прокрутки
            let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            // Ставим нужные стили
            document.body.setAttribute("data-body-scroll-fix", scrollPosition); // Cтавим атрибут со значением прокрутки
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.top = "-" + scrollPosition + "px";
            document.body.style.left = "0";
            document.body.style.width = "100%";
            //document.body.style.paddingRight = scroll_width+'px';

            console.log("callback", callback);

            if (callback !== null) {
                callback();
            }
        }
    }, 15); /* Задержка */
};

/* eslint-disable */
export const bodyUnfixPosition = (callback = null, obj) => {
    const { scrollTo = false } = obj === undefined ? {} : obj;
    //console.log()
    if (document.body.hasAttribute("data-body-scroll-fix")) {
        // Получаем позицию прокрутки из атрибута
        let scrollPosition = document.body.getAttribute("data-body-scroll-fix");

        // Удаляем атрибут
        document.body.removeAttribute("data-body-scroll-fix");

        // Удаляем ненужные стили
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.width = "";
        // document.body.style.paddingRight = '';

        if (callback !== null) {
            callback();
        }

        if (scrollTo === false) {
            // Прокручиваем страницу на полученное из атрибута значение
            window.scroll(0, scrollPosition);
        }
    }
};

/* eslint-disable */
export const scrollWidth = () => {
    let inner = document.createElement("p");
    inner.style.width = "100%";
    inner.style.height = "200px";

    let outer = document.createElement("div");
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);

    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = "scroll";
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return w1 - w2;
};

/* eslint-disable */
export const lockScroll = (elem = "body") => {
    const elem_dom = document.querySelector(elem);
    if (elem_dom.addEventListener) {
        elem_dom.addEventListener(
            "DOMMouseScroll",
            (elem_dom.onmousewheel = function(e) {
                e.preventDefault();
            }),
            { passive: false }
        );
    } else {
        elem_dom.onmousewheel = function(e) {
            window.event.returnValue = false;
        };
    }
};

/* eslint-disable */
export const unlockScroll = (elem = "body") => {
    const elem_dom = document.querySelector(elem);
    if (elem_dom.removeEventListener) {
        elem_dom.removeEventListener("DOMMouseScroll", elem_dom.onmousewheel, { passive: false });
        elem_dom.onmousewheel = null;
    } else {
        elem_dom.onmousewheel = null;
    }
};
