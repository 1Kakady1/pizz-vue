<template>
  <div id="Menu">
      <vue-headful
        title="Pizza - Contact"
        description="Description from vue-headful"
      />
    <Header />

            <div class="container-wrapper">
            <div class="page-bg" style=" background-image: url(https://firebasestorage.googleapis.com/v0/b/pizza-vue-fb264.appspot.com/o/images%2Fdesign%2Fcontact.jpg?alt=media&token=6d338e40-0d8d-4913-896c-c2363b77d531); "></div>
            <div id="container" class="template-contact-container">
                <!-- start container -->
                <div class="page-title-wrapper">
                    <div class="page-title-outher">
                        <div class="page-title-inner">
                            <span class="page-title-icon flaticon-pizza-slice"></span>
                            <h1 class="page-title">Contact</h1>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="page-wrapper">
                    <div class="contact-maps">
                        <div id="map_canvas" class="mapStyleClass"></div>
                    </div>
                    <div class="contact-info-wrapper">
                        <div class="contact-details">
                            <div class="contact-detail contact-detail1">
                                <div class="contact-detail-title">Address</div>
                                <div class="contact-detail-content">
                                    <p>3021 Lady Bug Drive<br /> Brooklyn, NY 11230, USA</p>
                                </div>
                            </div>
                            <div class="contact-detail contact-detail2">
                                <div class="contact-detail-title">Call or write</div>
                                <div class="contact-detail-content">
                                    <p>
                                        <strong>Phone/ </strong>
                                        <a href="tel:+0038640868300">0038640868300</a>
                                            <br/>
                                        <strong>Email/ </strong>
                                        <a href="mailto:info@somedomain.com">info@somedomain.com</a>
                                        
                                    </p>
                                </div>
                            </div>
                            <div class="contact-detail contact-detail3">
                                <div class="contact-detail-title">Opening hours</div>
                                <div class="contact-detail-content">
                                    <p><strong>Mon – Fri/ </strong>8am – 11pm<br />
                                        <strong>Saturday/ </strong>8am – 1am<br />
                                        <strong>Sunday </strong>(closed)</p>
                                </div>
                            </div>
                        </div>
                        <div class="contact-form-wrapper">
                            <div role="form" class="wpcf7" id="wpcf7-f49-p15-o1" lang="en-US" dir="ltr">
                                <div class="screen-reader-response"></div>

                                <form id="contact-form" action="#">
                                    <div class="albertos-contact-form">

                                        <div class="contact-detail-title">Contact Form</div>

                                        <div class="app-name overflov_h">
                                            <span class="wpcf7-form-control-wrap name-input">
                                                <input name="name"  id="name" type="text" value="" size="40" 
                                                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" 
                                                aria-required="true" aria-invalid="false" placeholder="Name"
                                                @blur="$v.name.$touch()" 
                                                v-model="name"/>
                                            </span>
                                            <!-- <pre>
                                            {{
                                                $v.name
                                            }}
                                            </pre> -->
                                            <transition name="input-error-anim">
                                                <div class="error-container" v-if="$v.name.$error">
                                                    <div class="error" v-if="!$v.name.required">
                                                        This field is required for filling
                                                    </div>
                                                    <div class="error" v-if="!$v.name.minLength">
                                                        Min length {{$v.name.$params.minLength.min}}
                                                    </div>
                                                </div>
                                            </transition>

                                        </div>
                                        <div class="app-phone">
                                            <span class="wpcf7-form-control-wrap email-input">
                                                <input name="mail" id="mail" type="text"  value="" size="40" 
                                                class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" 
                                                aria-required="true" aria-invalid="false" placeholder="Email"
                                                @blur="$v.email.$touch()" 
                                                v-model="email"/>
                                            </span>
                                            <transition name="input-error-anim">
                                                <div class="error-container" v-if="$v.email.$error">
                                                    <div class="error" v-if="!$v.email.required">
                                                        This field is required for filling
                                                    </div>
                                                    <div class="error" v-if="!$v.email.email">
                                                        Please enter correct email
                                                    </div>
                                                </div>
                                            </transition>
                                        </div>
                                        <p>
                                            <span class="wpcf7-form-control-wrap appointment-message">
                                                <textarea name="comment" id="comment"  cols="40" rows="10" 
                                                class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" 
                                                aria-required="true" aria-invalid="false" placeholder="Message"
                                                @blur="$v.msg.$touch()"
                                                v-model="msg"></textarea>
                                            </span> 
                                            <transition name="input-error-anim">
                                                <div class="error-container" v-if="$v.msg.$error">
                                                    <div class="error" v-if="!$v.msg.required">
                                                        This field is required for filling
                                                    </div>
                                                    <div class="error" v-if="!$v.msg.minLength">
                                                        Min length {{$v.name.$params.minLength.min}}
                                                    </div>
                                                </div>
                                            </transition>
                                        </p>
                                        
                                        <div class="clear"></div>
                                        
                                        <div class="contact-submit">
                                            <transition name="input-error-anim">
                                                <input type="submit"  
                                                    v-if="!isLoad"
                                                    :value="notif.print" 
                                                    class="wpcf7-form-control wpcf7-submit"  
                                                    id="submit_contact"
                                                    :disabled="notif.active"
                                                    @click.prevent="submitForm" 
                                                />
                                            
                                                <div class="load" v-else>
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                                        <circle cx="84" cy="50" r="10" fill="#fab940">
                                                            <animate attributeName="r" repeatCount="indefinite" dur="1.1904761904761905s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
                                                            <animate attributeName="fill" repeatCount="indefinite" dur="4.761904761904762s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#fab940;#242424;#fab940;#242424;#fab940" begin="0s"></animate>
                                                        </circle><circle cx="16" cy="50" r="10" fill="#fab940">
                                                        <animate attributeName="r" repeatCount="indefinite" dur="4.761904761904762s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
                                                        <animate attributeName="cx" repeatCount="indefinite" dur="4.761904761904762s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
                                                        </circle><circle cx="50" cy="50" r="10" fill="#242424">
                                                        <animate attributeName="r" repeatCount="indefinite" dur="4.761904761904762s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.1904761904761905s"></animate>
                                                        <animate attributeName="cx" repeatCount="indefinite" dur="4.761904761904762s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.1904761904761905s"></animate>
                                                        </circle><circle cx="84" cy="50" r="10" fill="#fab940">
                                                        <animate attributeName="r" repeatCount="indefinite" dur="4.761904761904762s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-2.380952380952381s"></animate>
                                                        <animate attributeName="cx" repeatCount="indefinite" dur="4.761904761904762s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-2.380952380952381s"></animate>
                                                        </circle><circle cx="16" cy="50" r="10" fill="#242424">
                                                        <animate attributeName="r" repeatCount="indefinite" dur="4.761904761904762s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-3.571428571428571s"></animate>
                                                        <animate attributeName="cx" repeatCount="indefinite" dur="4.761904761904762s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-3.571428571428571s"></animate>
                                                        </circle>
                                                    </svg>
                                                </div>
                                            </transition>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <!-- end page wrapper -->
            </div>
            <!-- end container -->
            <div class="clear"></div>
        </div>
    
    <FooterMob />
  </div>
</template>

<script>

import Header from "../components/header/Header.vue"
import FooterMob from "../components/FooterMobail"
const { required, minLength,email } = require('vuelidate/lib/validators')

import vueHeadful from 'vue-headful';


export default {
  name: 'Home',
  components: {
    Header,
    FooterMob,
    vueHeadful
  },
  data(){
    return{
        //contactForm:{
        name: '',
        email: '',
        msg: '',
        //},
        formInputSettig:{

        },
        inputKey:['name','email','msg'],
        isLoad: false,
        notif:{
            def:"Send message",
            error: "Error!",
            success:"Message send ok !",
            active: false,
            print: "Send message"
        }
    }
  },
  methods:{

      submitForm(){

         // this.isLoad = !this.isLoad;
          //let errorFlag = true;
          this.inputKey.forEach((item)=>{
                console.log("submitForm-------->",this.$v[item],item);
                // if(this.$v[item].$anyDirty === false){
                //     this.$v[item].$error = true;
                // } else {
                    // if(this.$v[item].$error === true){

                    // }
               // }
          })
          
      }

  },
//   computed: {
//     notifMessage: function (key='def') {
//       return this.notif[key]
//     }
//   },
  validations: {
   // contactForm:{
        name: {
            required,
            minLength: minLength(4),
        },
        email: {
            required,
            email
        },
        msg: {
            required,
            minLength: minLength(5)
        }
    //}
  }
}
</script>

<style scoped>
.contact-submit{
    overflow: hidden;
    position: relative;
    width: 100%;
    min-height: 64px;
}
.load {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.load svg{
    width: 120px;
    height: 64px;
}

#container {
    width: 100%;
}

.input-error-anim-leave-active,
.input-error-anim-enter-active {
  transition: 1s;
}
.input-error-anim-enter {
  transform: translate(100%, 0);
}
.input-error-anim-leave-to {
  transform: translate(-100%, 0);
}

.overflov_h{
    overflow: hidden;
}

.contact-maps {
    margin-left: -50px;
    margin-right: -50px;
    margin-top: -50px;
    margin-bottom: 30px;
}

.contact-details { display: inline-block; width: 50%; float: left; padding-right: 30px;}
.contact-form-wrapper {  width: 50%; float: left;}

.contact-detail {margin-bottom: 30px}

.contact-detail-title {
    font-family: 'Patua One', cursive;
    font-size: 20px;
    margin-bottom: 10px;
    line-height: 1;
    text-transform: uppercase;
}

.contact-middle {
    float: left;
	margin: 0 40px 0 40px
}

.contact-middle span:before {
    color: #fab940;
    font-size: 100px;
	line-height: 1;
}

.albertos-contact-form {
	float: left;
	width: 100%;
}
.albertos-contact-form input,
.albertos-contact-form textarea {
	padding: 25px 30px;
    color: #c6b08c;
	font-size: 14px;
	text-transform: none;
	outline: none;
	width: 100%;
	margin-bottom: 8px; 
	-webkit-appearance: none;
    background: #242424;
    border: none;
    font-family: 'Merriweather', serif;
}

.albertos-contact-form input::-webkit-input-placeholder,
.albertos-contact-form textarea::-webkit-input-placeholder {
    color: #c6b08c;
	font-size: 14px;
}

.albertos-contact-form textarea {
	max-height: 200px;
	resize: none;
}

[placeholder]:focus::-webkit-input-placeholder {
    transition: text-indent 0.5s 0.5s ease;
    text-indent: -100%;
    opacity: 1;
}

.albertos-contact-form input.wpcf7-submit {
	color: #242424;
	font-size: 14px;
	text-transform: uppercase;
	background: #fab940;
	padding: 16px 44px;
	-webkit-appearance: none;
	width: auto;
	display: block;
	text-align: center;
	margin: 0 auto;
	margin-top: 12px;
	font-family: 'Patua One', cursive;
}
.albertos-contact-form input.wpcf7-submit:hover {
	background: #242424;
	color: #fff;
	cursor: pointer;
}

@media only screen and (min-width: 996px) {
    #container {
        width: 750px;
        float: left;
        margin-top: 100px;
        z-index: 2;
        position: relative;
    }

}
@media only screen and (max-width: 650px) {

    .contact-maps {
        margin-left: -20px;
        margin-right: -20px;
        margin-top: -20px;
    }
    .contact-details {
        display: inline-block;
        width: 100%;
        float: left;
        text-align: center;
        padding-right: 0;
    }
    
    
    .contact-form-wrapper {
        width: 100%;
        text-align: center;
    }
}

</style>

