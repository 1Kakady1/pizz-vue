<template>
    <div :class="[classWrap, 'footer-socials']" v-if="social.length > 0">
        <ul class="socials-sh">
            <li v-for="item in social" :key="item.icon[1]">
                <a class="sh-socials-url " href="#"  target="_blank">
                    <font-awesome-icon :icon="[item.icon[0], item.icon[1]]" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import {fab,faTwitter,faFacebookF,faVk} from '@fortawesome/free-brands-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    library.add(faTwitter,faFacebookF,faVk,fab);
    Vue.component('font-awesome-icon', FontAwesomeIcon)

    export default {
        name: 'Social',
        props: {
            social:{
                type: Array,
                default: function () { return [] },
            },
            classWrap:{
                type: String,
                default: function () { return "" },
            }
        },
    }
</script>

<style>

.footer-socials ul.socials-sh {
    text-align: center;
    list-style: none;
    margin-bottom: 30px;
}
.footer-socials ul.socials-sh li {
    display: inline;
    margin: 0;
    padding: 0;
}
.footer-socials ul.socials-sh li a {
    color: #c6b08c;
	font-size: 20px;
	margin: 0 3px;
}
.footer-socials ul.socials-sh li a:hover {
    color: #fab940;
}

</style>