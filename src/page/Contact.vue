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
                                                aria-required="true" aria-invalid="false" placeholder="Name" v-model="$v.name.$model"/>
                                            </span>

                                            <transition name="input-error-anim">
                                                <div class="error" v-if="!$v.name.required">
                                                    This field is required for filling
                                                </div>
                                            </transition>

                                        </div>
                                        <div class="app-phone">
                                            <span class="wpcf7-form-control-wrap email-input">
                                                <input name="mail" id="mail" type="text"  value="" size="40" 
                                                class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" 
                                                aria-required="true" aria-invalid="false" placeholder="Email" v-model="$v.email.$model"/>
                                            </span>
                                        </div>
                                        <p>
                                            <span class="wpcf7-form-control-wrap appointment-message">
                                                <textarea name="comment" id="comment"  cols="40" rows="10" 
                                                class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" 
                                                aria-required="true" aria-invalid="false" placeholder="Message" v-model="$v.msg.$model"></textarea>
                                            </span> 
                                        </p>
                                        
                                        <div class="clear"></div>
                                        
                                        <div class="contact-submit">
                                            <input type="submit" 
                                                value="Send message" 
                                                class="wpcf7-form-control wpcf7-submit"  
                                                id="submit_contact"
                                                @click.prevent="submitForm" 
                                            />
                                            <div id="msg" class="message"></div>
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
        inputKey:['name','email','msg']
    }
  },
  methods:{

      submitForm(){
         // this.inputKey.forEach((item,index)=>{
                // console.log("submitForm-------->",!this.$v.$anyDirty);
                // console.log("submitForm-------->",this.$v.$anyError);
                console.log("submitForm-------->",this.$v);
               
         // })
          
      }

  },
  validations: {
   // contactForm:{
        name: {
            required,
            minLength: minLength(4)
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

