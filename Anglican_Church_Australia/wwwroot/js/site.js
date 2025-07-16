
body {
    font-family: Verdana, sans-serif;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100vw
}

html {
    scroll-behavior: smooth;
    overflow-y: scroll;
    overflow-x: hidden
}

.btn:focus, .btn:active:focus, .btn-link.nav-link:focus, .form-control:focus, .form-check-input:focus {
    box-shadow: 0 0 0 0.1rem white, 0 0 0 0.25rem #258cfb;
}

button#donate_button {
    width: 130px;
    height: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px
}

button#subscribe_button {
    width: 130px;
    height: 40px;
    display: block;
    margin-top: 20px;
    border-radius: 10px;
}

button#donate_button:hover {
    background-color: #9b08ed;
    border: 1px solid #9b08ed;
    color: white
}

#overlay-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
}

#myVideo {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}

.navigation {
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100vw;
    padding-top: 10px;
    z-index: 1;
}

.bottom {
    position: fixed;
    bottom: 30%;
    width: auto;
    padding: 20px;
    color: white;
}

h1 {
    font-size: 70px;
}

#hamburger {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url('../img/hamburger.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px;
}

#first {
    float: left;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
}

#second {
    float: left;
    width: 100vw;
    height: auto;
    background-color: #e5e3d9;
    padding-bottom: 70px;
}

#third {
    float: left;
    width: 100vw;
    height: 750px;
    background-color: rgba(54, 1, 63, 0.97);
    display: block;
}

#fourth {
    float: left;
    width: 100vw;
    height: 750px;
    background-color: #e5e3d9;
    height: auto;
    padding-bottom: 70px;
}

#fifth {
    float: left;
    width: 100vw;
    height: 100vh;
    background-color: #9b08ed;
    background-repeat: no-repeat;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
    align-items: center;
    background-size: cover;
}

#sixth {
    float: left;
    width: 100vw;
    height: auto;
    background-color: #9b08ed;
}

div#trinity {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 750px;
    background-color: rgba(54, 1, 63, 0.97);
    opacity: .99;
    overflow: auto;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
    align-items: center;
}

#clear {
    clear: both;
}

img#bannerLogo {
    width: 400px;
    height: 50px;
    display: block;
    margin: 0;
    padding-right: 100px;
}

img#bannerLogoFooter {
    width: 500px;
    height: 100px;
    display: block;
}



div.center_scroll_holder {
    position: fixed;
    bottom: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
}

div.center_scroll_holder_up {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 60px;
    width: 100vw
}

div#footer_container_first {
    float: left;
    width: 600px;
    height: 400px;
    padding-left: 20px;
    margin-top: 50px;
}

div.footer_container_second, div#footer_container_second_last {
    float: left;
    width: auto;
    margin-top: 50px;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
    display: block;
    color: white;
    margin-left: 80px;
}

div.services_slider_holder {
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
}

svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 10px;
}

a {
    color: white;
    text-decoration: none;
}

    a:hover {
        color: green;
    }


.form-control {
    width: 500px
}

p#scroll_message {
    font-size: 20px;
    position: fixed;
    bottom: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    color: white
}

img#scrolling_down {
    width: 40px;
    height: 40px;
}

img#scrolling_up {
    position: absolute;
    width: 70px;
    height: 70px;
    height: 70px;
    margin-top: 180px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1
}

div.slide {
    width: 400px;
    height: 400px;
    padding: 5px;
    border-radius: 20px;
    margin: 5px;
}

.text-block {
    background-color: black;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
}

h1#services {
    font-size: 50px;
    text-align: center;
    padding-top: 115px;
    color: #9b08ed;
    clear: left;
}


h1.title, h1.title_start {
    font-size: 50px;
    text-align: center;
    padding-top: 115px;
    color: #9b08ed;
    clear: left;
}

h1.title_start {
    text-align: left;
}

h1#donate {
    font-size: 40px;
    padding-top: 105px;
    color: #9b08ed
}

div#service_title_holder {
    float: left;
    width: 100vw;
    clear: left;
}

div#service_div_holder, div#discovery_div_holder {
    float: left;
    width: 100vw;
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

p#services_title {
    font-size: 20px;
    text-align: center;
    color: #9b08ed;
}

h5#services_title {
    font-size: 25px;
    margin-top: 60%;
    margin-left: 10px;
    width: 100vw;
    cursor: pointer;
}

div.service {
    float: left;
    margin: 5px;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    color: #ffff;
    background-size: cover;
}

div.discover {
    float: left;
    margin: 5px;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    color: #ffff;
    background-repeat: no-repeat;
    background-size: cover;
}


div.statement_container {
    width: 600px;
    height: 500px;
}

ul.splide_list {
    margin: 0;
    padding: 0;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
    align-items: center;
}

ul {
    margin-bottom: 20px
}

li {
    float: left;
}

/* Next & previous buttons */
.prev, .next {
    cursor: pointer;
    position: relative;
    color: white;
    width: auto;
    padding: 10px;
    font-weight: bold;
    font-size: 30px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
    align-items: center;
}

.prevServices, .nextServices, .prevDiscover, .nextDiscover {
    cursor: pointer;
    position: relative;
    color: black;
    width: auto;
    padding: 10px;
    font-weight: bold;
    font-size: 30px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
    align-items: center;
}

/* Next & previous buttons */
.prevServices, .nextServices, .prevDiscover, .nextDiscover {
    visibility: hidden
}


    .prev:hover, .next:hover, .prevServices:hover, .nextServices:hover, .prevDiscover:hover, .nextDiscover:hover {
        background-color: rgba(0,0,0,0.8);
    }

.slider_title {
    display: block;
    color: white;
    min-width: 100vw;
    padding-left: 20px;
    margin-top: 50%;
    font-size: 25px;
}

.slider_time {
    cursor: pointer;
    color: white;
    padding-left: 20px;
}

.dropdown {
    position: absolute;
    left: 0;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    width: 100vw;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        display: block;
    }

.nav_img_title {
    text-align: center;
    font-size: 18px;
    display: none;
    padding-top: 200px;
    cursor: pointer;
    height: 400px
}

.nav-item:hover .dropdown-content {
    display: block;
}

.about {
    float: left;
    width: 300px;
    height: 400px;
    margin: 4px;
    background-repeat: no-repeat;
    background-size: cover;
}

.nav-link {
    height: 60px;
}

.drop-down-container-a {
    width: 40%;
    height: auto;
    float: left;
}

.drop-down-container-b {
    width: 60%;
    height: auto;
    float: left;
    background-color: lightgrey;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
    padding-top: 15px;
}

.about:hover .nav_img_title {
    display: block;
    background-color: rgba(0,0,0,0.8);
}

.about-links {
    margin-left: 40%
}

    .about-links:hover {
        color: #555555
    }



@media only screen and (max-width: 1050px) {
    div#footer_container_second, div#footer_container_second_last {
        float: left;
        width: auto;
        height: 300px;
        display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
        display: -ms-flexbox; /* TWEENER - IE 10 */
        display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
        display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
        justify-content: center;
        display: block;
        color: white;
        margin-left: 40px;
    }
}

@media only screen and (min-width: 1333px) and (max-width: 2000px) {
    #slide2, #slide_title2, #slide_time2, #slide1, #slide_title1, #slide_time1 {
        display: block
    }
}


@media only screen and (min-width: 1110px) and (max-width: 1332px) {
    .drop-down-container-a {
        width: 30%;
        height: auto;
        float: left;
    }

    .drop-down-container-b {
        width: 70%;
        height: auto;
        float: left;
        background-color: lightgrey;
        display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
        display: -ms-flexbox; /* TWEENER - IE 10 */
        display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
        display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
        justify-content: center;
        align-items: center;
        padding-bottom: 15px;
        padding-top: 15px;
    }

    .about-links {
        margin-left: 10%
    }

    #slide2, #slide_title2, #slide_time2 {
        display: none
    }

    div#service_div_holder, div#discovery_div_holder {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
    }

    div#service_one, div#service_two, div#service_three {
        width: 350px;
        height: 400px
    }

    div#discover_one, div#discover_two, div#discover_three {
        height: 400px
    }

    img#bannerLogo {
        width: 200px;
        height: 45px;
    }

    img#bannerLogoFooter {
        width: 300px;
        height: 70px;
    }

    div#footer_container_second, div#footer_container_second_last {
        width: 100vw;
        margin-left: 20px;
    }
}

@media only screen and (min-width: 963px) and (max-width: 1109px) {

    .drop-down-container-a {
        width: 30%;
        height: auto;
        float: left;
    }

    .drop-down-container-b {
        width: 70%;
        height: auto;
        float: left;
        background-color: lightgrey;
        display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
        display: -ms-flexbox; /* TWEENER - IE 10 */
        display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
        display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
        justify-content: center;
        align-items: center;
        padding-bottom: 15px;
        padding-top: 15px;
    }

    .about-links {
        margin-left: 10%
    }

    #slide2, #slide_title2, #slide_time2 {
        display: none
    }

    div#service_div_holder, div#discovery_div_holder {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
    }

    div#service_one, div#service_two, div#service_three {
        width: 300px;
        height: 400px
    }

    div#discover_one, div#discover_two, div#discover_three {
        width: 300px;
        height: 400px
    }

    img#bannerLogo {
        width: 200px;
        height: 45px;
    }

    img#bannerLogoFooter {
        width: 300px;
        height: 70px;
    }

    div#footer_container_first {
        display: none
    }
}

@media only screen and (min-width: 885px) and (max-width: 962px) {
    #slide2, #slide_title2, #slide_time2, #slide1, #slide_title1, #slide_time1 {
        display: none
    }

    div.slide {
        width: 600px;
        height: 450px;
        border-radius: 20px;
        margin: 5px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    div#service_div_holder, div#discovery_div_holder {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
    }

    div#service_one, div#service_two, div#service_three, div#discover_one, div#discover_two, div#discover_three {
        width: 600px;
        height: 450px
    }

    img#bannerLogo {
        width: 200px;
        height: 45px;
    }

    img#bannerLogoFooter {
        width: 300px;
        height: 70px;
    }

    .slider_title {
        display: block;
        color: white;
        min-width: 100vw;
        padding-left: 20px;
        margin-top: 50%;
        font-size: 25px;
    }

    .slider_time {
        cursor: pointer;
        color: white;
        padding-left: 20px;
    }

    div#footer_container_first {
        display: none
    }
}

@media only screen and (min-width: 552px) and (max-width: 700px) {
    .drop-down-container-a {
        display: none;
    }

    .drop-down-container-b {
        display: none;
    }
}

@media only screen and (min-width: 550px) and (max-width: 884px) {

    #parish {
        font-size: 50px;
    }

    img#scrolling_down {
        width: 40px;
        height: 40px;
    }

    p#scroll_message {
        font-size: 20px;
        bottom: 4%;
    }

    #slide2, #slide_title2, #slide_time2, #slide1, #slide_title1, #slide_time1 {
        display: none
    }

    div#service_div_holder, div#discovery_div_holder {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
    }

    div.slide {
        width: 600px;
        height: 450px;
        border-radius: 20px;
        margin: 5px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    div#service_one, div#service_two, div#service_three, div#discover_one, div#discover_two, div#discover_three {
        width: 600px;
        height: 450px
    }

    img#bannerLogo {
        width: 200px;
        height: 45px;
    }

    img#bannerLogoFooter {
        width: 300px;
        height: 70px;
    }

    .slider_title {
        display: block;
        color: white;
        min-width: 100vw;
        padding-left: 20px;
        margin-top: 50%;
        font-size: 25px;
    }

    .slider_time {
        cursor: pointer;
        color: white;
        padding-left: 20px;
    }

    div#footer_container_first {
        display: none
    }
}

@media only screen and (min-width: 300px) and (max-width: 549px) {

    .drop-down-container-a {
        display: none
    }

    .drop-down-container-b {
        display: none;
    }

    #slide2, #slide_title2, #slide_time2, #slide1, #slide_title1, #slide_time1 {
        display: none
    }

    div#service_div_holder, div#discovery_div_holder {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
    }

    div.slide {
        width: 300px;
        height: 300px;
        border-radius: 20px;
        margin: 5px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    div#service_one, div#service_two, div#service_three, div#discover_one, div#discover_two, div#discover_three {
        width: 300px;
        height: 300px
    }

    img#bannerLogo {
        width: 100px;
        height: 45px;
    }

    img#bannerLogoFooter {
        width: 100px;
        height: 70px;
    }

    .slider_title {
        display: block;
        color: white;
        min-width: 100vw;
        padding-left: 20px;
        margin-top: 50%;
        font-size: 25px;
    }

    .slider_time {
        cursor: pointer;
        color: white;
        padding-left: 20px;
    }

    #footer_container_first {
        display: none
    }

    div#footer_container_second {
        width: 100vw;
        margin-left: 10px;
    }

    div.statement_container {
        overflow: hidden;
        padding: 5px
    }

    div.external {
        display: none
    }

    div#footer_container_second_last {
        display: none
    }

    #parish {
        font-size: 25px
    }

    p#scroll_message {
        font-size: 20px;
        margin: 0px;
        position: fixed;
        bottom: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img#scrolling_down {
        width: 30px;
        height: 30px;
    }

    div.center_scroll_holder {
        position: fixed;
        bottom: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }
}
