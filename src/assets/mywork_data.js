
// import NHK from '../assets/NHK (1).jpg'
// import WEBZING from '../assets/WEBZING.jpg'
// import BCM from '../assets/BCM.jpg'
// import AJ from '../assets/AJ PAinting.jpg'
// import broadway from '../assets/broadway.jpg'
// import indplants from '../assets/indore Plants.jpg'
// import ecom from '../assets/ecom.jpg'
// import alsaudia from '../assets/Al Saudia.jpg'
// import northState from '../assets/northstate.jpg'
// import netflix from '../assets/netflix.jpg'


// const mywork_data = [
//     {
//         w_no: 1,
//         w_name: "Web Zing at ESP INSPIRE",
//         w_img: WEBZING,
//         htmlcode: `<!doctype html>
// <html lang="en">

// <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Bootstrap demo</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
//         integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
//         rel="stylesheet">
//     <link rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
//     <link rel="stylesheet" href="style .css">
// </head>

// <body>
//     <div class="wrapper">

//         <!-- header section -->
//         <header>
//             <div class="topbar">
//                 <div class="container">
//                     <div class="weblogos">
//                         <a href="#"> <img src="./images/toplogo1.png" alt=""></a>
//                         <a href="#"> <img src="./images/toplogo2.png" alt=""></a>
//                         <a href="#"> <img src="./images/toplogo3.png" alt=""></a>
//                     </div>
//                     <div>
//                         <button type="button" class="btn btn-primary" style="background-color: #00a2ec;"><i
//                                 class="fa-solid fa-right-to-bracket signupicon m-1 d-xs-block d-md-none"></i>
//                             <span class="d-none d-sm-inline">Sign Up</span></button>
//                         <button type="button" class="btn text-white" style="background-color: #0e38b1;"><i
//                                 class="icon-LOCK-copy m-1"></i> <span class="d-none d-sm-inline">Login</span></button>
//                     </div>
//                 </div>
//             </div>
//             <div class="container px-2 py-2">
//                 <nav class="navbar navbar-expand-lg p-0">
//                     <div class="container">
//                         <a href=""><img src="./images/logo.png" alt=""></a>
//                         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//                             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                             <span class="navbar-toggler-icon"></span>
//                         </button>
//                         <div class="collapse navbar-collapse" id="navbarNav">
//                             <button class="close-btn" aria-label="Close">&times;</button>
//                             <h4 class="drawer-heading">Menu</h4>
//                             <ul class="navbar-nav mx-auto">
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="#">Why us</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="#">How it works</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="#">Designs</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="#">Features</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="#">FAQs</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link active" aria-current="page" href="#">Pricing</a>
//                                 </li>
//                             </ul>
//                             <a href="tel:2094630707" class="tele"><i class="icon-phonefooter-copy"></i>(510) 526-2592</a>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//         <!-- end header section -->

//         <!-- start main section -->
//         <main>

//             <!-- banner section -->
//             <section class="bannerblock">
//                 <div class="container align-items-center">
//                     <div class="col-sm-6">
//                         <h1>912+ AWESOME, PIXEL PERFECT</h1>
//                         <H2>Stunning & fully
//                             customized websites
//                             in lowest monthly fee</H2>
//                         <a href="#">REQUES A QUOTE</a>
//                     </div>
//                     <div class="col-sm-6">
//                         <img src="./images/bannerimg.png" alt="">
//                     </div>
//                 </div>
//             </section>
//             <!-- end banner section -->

//             <!-- why us section -->
//             <section class="block whyusblock">
//                 <div class="container">
//                     <h2>Why Us</h2>
//                     <h3>Limitless possibilities. What will you create?</h3>
//                     <div class="row">
//                         <div class="col-lg-5">
//                             <a href="#"><img src="./images/whyusimage.png" class="img-fluid" alt=""></a>
//                         </div>
//                         <div class="col-sm-7 whyuscontent px-3">
//                             <div class="service-row">
//                                 <div class="icon-column">
//                                     <img src="./images/whyus1.png" class="img-fluid" alt="">
//                                 </div>
//                                 <div class="text-column">
//                                     <h3>A Service, not a tool</h3>
//                                     <p class="">Fully functional website delivered in 36 to 48 hours! We make
//                                         it simple for you
//                                         to launch a new website. You just need to provide some basic info, the logo, and
//                                         images that you want.</p>
//                                 </div>
//                             </div>

//                             <div class="service-row">
//                                 <div class="icon-column">
//                                     <img src="./images/whyus2.png" class="img-fluid" alt="">
//                                 </div>
//                                 <div class="text-column">
//                                     <h3>Modern, Fully customized & Responsive designs</h3>
//                                     <p>Designed by pros to keep you looking fresh! All of our plans include modern
//                                         designs and responsive layouts, that means your visitors will see a beautiful
//                                         website in all devices!</p>
//                                 </div>
//                             </div>

//                             <div class="service-row">
//                                 <div class="icon-column">
//                                     <img src="./images/whyus3.png" class="img-fluid" alt="">
//                                 </div>
//                                 <div class="text-column">
//                                     <h3>Affordable</h3>
//                                     <p>We exist to bring affordable web design to those on a budget. We love coming
//                                         alongside our clients and helping them chose a website that’s representative of
//                                         who they are and what they do because we believe that it doesn’t have to cost a
//                                         fortune to achieve.</p>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//             <!-- end whyusblock section -->

//             <!-- How it works section -->
//             <section class="block workblock">
//                 <div class="container">
//                     <h2 class="text-white">How does it work?</h2>
//                     <h3>Smart. Simple. Effective.</h3>
//                     <div class="workcont">
//                         <div class="row workrow justify-content-center">
//                             <div class="col-lg-3 col-md-4 col-sm-6 cont">
//                                 <img src="./images/pickaplan.png" alt="">
//                                 <h3 class="text-white">1. Pick your plan</h3>
//                                 <p>We make it easy for you to pick a <br> plan that works for you!</p>
//                             </div>
//                             <div class="col-lg-3 col-md-4 col-sm-6 cont">
//                                 <img src="./images/selectwebsite.png" alt="">
//                                 <h3 class="text-white">2. Select your website</h3>
//                                 <p>Choose a website from our vast range <br> of modern designs</p>
//                             </div>
//                             <div class="col-lg-3 col-md-4 col-sm-6 cont">
//                                 <img src="./images/info.png" alt="">
//                                 <h3 class="text-white">3. Send us your info</h3>
//                                 <p>Provide your contact and your <br>
//                                     business information</p>
//                             </div>
//                             <div class="col-lg-3 col-md-4 col-sm-6 cont">
//                                 <img src="./images/helloworldicon.png" alt="">
//                                 <h3 class="text-white">4. Hello World!</h3>
//                                 <p>All you need to market yourself and <br> announce your existence to the <br>
//                                     world!</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <!-- end how it works section -->

//             <!-- design section -->
//             <section id="designs" class="block designblock pb-5">
//                 <div class="container">
//                     <h2>Designs</h2>
//                     <h3>A huge range of stunning and fully customized websites</h3>


//                     <div class="owl-carousel owl-theme pt-5">
//                         <div class="item">
//                             <img src="./images/des1.png" alt="">
//                             <div class="carouselcontent">
//                                 <div class="activecarouseldiv">
//                                     <h3>Emila Flow</h3>
//                                     <span>Responsive Wordpress theme</span>
//                                     <div class="buttons">
//                                         <a href="#" class="view">View Details</a>
//                                         <a href="#" class="live">Live Preview</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="item">
//                             <img src="./images/des2.png" alt="">
//                             <div class="carouselcontent">
//                                 <div class="activecarouseldiv">
//                                     <h3>Emila Flowe</h3>
//                                     <span>Responsive Wordpress theme</span>
//                                     <div class="buttons">
//                                         <a href="#" class="view">View Details</a>
//                                         <a href="#" class="live">Live Preview</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="item active">
//                             <img src="./images/des3.png" alt="">
//                             <div class="carouselcontent">
//                                 <div class="activecarouseldiv">
//                                     <h3>Emila Flower</h3>
//                                     <span>Responsive Wordpress theme</span>
//                                     <div class="buttons">
//                                         <a href="#" class="view">View Details</a>
//                                         <a href="#" class="live">Live Preview</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <!-- end design section -->

//             <!-- services section -->
//             <section class="block servicesblock">
//                 <div class="container-fluid ">
//                     <div class="row">
//                         <div class="col-lg-6 d-flex justify-content-end align-items-center order-lg-1 order-2">
//                             <div class="inner">
//                                 <div class="services-row">
//                                     <div class="icon-head">
//                                         <img src="./images/sericon1.png" alt="">
//                                     </div>
//                                     <div class="title">
//                                         <h2>Reach and grow your audience </h2>
//                                         <span>We get it, not everybody has the ability<br>
//                                             pay thousands for a website,
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <p>With our monthly website plans you can have a high-quality website at a low-cost to
//                                     you.
//                                     We can help keep your overhead low during those crucial, penny pinching times. Now
//                                     you
//                                     don't have to learn some 'free' tool that takes time and energy to master. We
//                                     deliver a
//                                     high-quality, modern website within 5 business days.</p>
//                                 <a href="#">SIGNUP NOW</a>
//                             </div>
//                         </div>
//                         <div class="col-lg-6 order-1">
//                             <img src="./images/ser1.png" class="w-100" alt="">
//                         </div>
//                     </div>

//                     <div class="row">
//                         <div class="col-lg-6">
//                             <img src="./images/ser2.png" class="w-100">
//                         </div>
//                         <div class="col-lg-6 d-flex justify-content-start">
//                             <div class="inner2">
//                                 <div class="services-row">
//                                     <div class="icon-head">
//                                         <img src="./images/sericon2.png" alt="">
//                                     </div>
//                                     <div class="title">
//                                         <h2>Budget friendly solutions </h2>
//                                         <span>We get it, not everybody has the ability <br>
//                                             thousands for a website,

//                                         </span>
//                                     </div>
//                                 </div>
//                                 <p>WWith our monthly website plans you can have a high-quality website at a low-cost to
//                                     you.
//                                     We can help keep your overhead low during those crucial, penny pinching times. Now
//                                     you
//                                     don't have to learn some 'free' tool that takes time and energy to master. We
//                                     deliver a
//                                     high-quality, modern website within 5 business days.</p>
//                                 <a href="#">SIGNUP NOW</a>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="row">
//                         <div class="col-lg-6 d-flex justify-content-end align-items-center order-lg-1 order-2">
//                             <div class="inner">
//                                 <div class="services-row">
//                                     <div class="icon-head">
//                                         <img src="./images/sericon3.png" alt="">
//                                     </div>
//                                     <div class="title">
//                                         <h2>Need a CMS? No Problem! </h2>
//                                         <span>We get it, not everybody has the ability <br>
//                                             pay thousands for a website,
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <p>With our monthly website plans you can have a high-quality website at a low-cost to
//                                     you.
//                                     We can help keep your overhead low during those crucial, penny pinching times. Now
//                                     you
//                                     don't have to learn some 'free' tool that takes time and energy to master. We
//                                     deliver a
//                                     high-quality, modern website within 5 business days.</p>
//                                 <a href="#">SIGNUP NOW</a>
//                             </div>
//                         </div>
//                         <div class="col-lg-6 order-1">
//                             <img src="./images/ser3.png" class="w-100 lastimage" alt="">
//                         </div>
//                     </div>
//                 </div>

//             </section>
//             <!-- end services section -->

//             <!-- faq section -->
//             <section class="block faqblock">
//                 <div class="container">
//                     <h2 class="text-white mb-5">FAQs</h2>
//                     <div class="accordion" id="accordionExample">
//                         <div class="accordion-item">
//                             <h3 class="accordion-header">
//                                 <button class="accordion-button" type="button" data-bs-toggle="collapse"
//                                     data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                     Q: What if I Need Changes?
//                                 </button>
//                             </h3>
//                             <div id="collapseOne" class="accordion-collapse collapse show"
//                                 data-bs-parent="#accordionExample">
//                                 <div class="accordion-body bg-white">
//                                     <p>We make that simple! With our 'Starter' plan you can have 2 change requests per
//                                         month (max of 30 minutes per change). Our entrepreneur plans includes 5 monthly
//                                         changes (max of 30 minutes per change). If you need large changes that will take
//                                         more than 30 minutes, we will bill you at our agency hourly rate. Submitting
//                                         changes is simple, just email</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="accordion-item">
//                             <h3 class="accordion-header">
//                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                     data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                     Q: What's the Catch?
//                                 </button>
//                             </h3>
//                             <div id="collapseTwo" class="accordion-collapse collapse"
//                                 data-bs-parent="#accordionExample">
//                                 <div class="accordion-body bg-white">
//                                     <p>We make that simple! With our 'Starter' plan you can have 2 change requests per
//                                         month (max of 30 minutes per change). Our entrepreneur plans includes 5 monthly
//                                         changes (max of 30 minutes per change). If you need large changes that will take
//                                         more than 30 minutes, we will bill you at our agency hourly rate. Submitting
//                                         changes is simple, just email</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="accordion-item">
//                             <h3 class="accordion-header">
//                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                     data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                                     Q: How Long Will it Take For my Changes to be Made?
//                                 </button>
//                             </h3>
//                             <div id="collapseThree" class="accordion-collapse collapse"
//                                 data-bs-parent="#accordionExample">
//                                 <div class="accordion-body bg-white">
//                                     <p>We make that simple! With our 'Starter' plan you can have 2 change requests per
//                                         month (max of 30 minutes per change). Our entrepreneur plans includes 5 monthly
//                                         changes (max of 30 minutes per change). If you need large changes that will take
//                                         more than 30 minutes, we will bill you at our agency hourly rate. Submitting
//                                         changes is simple, just email</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="accordion-item">
//                             <h3 class="accordion-header">
//                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                     data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
//                                     Q: 5 Business Days is Fast. Will it Be Reliable?
//                                 </button>
//                             </h3>
//                             <div id="collapsefour" class="accordion-collapse collapse"
//                                 data-bs-parent="#accordionExample">
//                                 <div class="accordion-body bg-white">
//                                     <p>We make that simple! With our 'Starter' plan you can have 2 change requests per
//                                         month (max of 30 minutes per change). Our entrepreneur plans includes 5 monthly
//                                         changes (max of 30 minutes per change). If you need large changes that will take
//                                         more than 30 minutes, we will bill you at our agency hourly rate. Submitting
//                                         changes is simple, just email</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="accordion-item">
//                             <h3 class="accordion-header">
//                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                     data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
//                                     Q: Do I Have to Sign Up for a Long Commitment?
//                                 </button>
//                             </h3>
//                             <div id="collapsefive" class="accordion-collapse collapse"
//                                 data-bs-parent="#accordionExample">
//                                 <div class="accordion-body bg-white">
//                                     <p>We make that simple! With our 'Starter' plan you can have 2 change requests per
//                                         month (max of 30 minutes per change). Our entrepreneur plans includes 5 monthly
//                                         changes (max of 30 minutes per change). If you need large changes that will take
//                                         more than 30 minutes, we will bill you at our agency hourly rate. Submitting
//                                         changes is simple, just email</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="accordion-item">
//                             <h3 class="accordion-header">
//                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                     data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
//                                     Q: Are There Any Setup Fees / Costs?
//                                 </button>
//                             </h3>
//                             <div id="collapsesix" class="accordion-collapse collapse"
//                                 data-bs-parent="#accordionExample">
//                                 <div class="accordion-body bg-white">
//                                     <p>We make that simple! With our 'Starter' plan you can have 2 change requests per
//                                         month (max of 30 minutes per change). Our entrepreneur plans includes 5 monthly
//                                         changes (max of 30 minutes per change). If you need large changes that will take
//                                         more than 30 minutes, we will bill you at our agency hourly rate. Submitting
//                                         changes is simple, just email</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <!-- pricing section -->
//             <section class="block pricingblock">
//                 <div class="container pricingcontainer">
//                     <h2>Pricing</h2>
//                     <h3>What plans are available</h3>
//                     <div class="row pricing"> <!-- Added .row here -->
//                         <div class="plan col-lg-4 col-md-6 col-sm-12">
//                             <div>
//                                 <h4 class="personal pricetag">Personal</h4>
//                                 <div class="price">$249</div>
//                                 <p>PER MONTH</p>
//                                 <ul class="features">
//                                     <li> $200 setup fee</li>
//                                     <li> A beautiful simple website</li>
//                                     <li> Custom Domain</li>
//                                     <li> Responsive Design</li>
//                                     <li> Current Website Backup at Launch</li>
//                                     <li> Hosting included</li>
//                                     <li>Contact Form</li>
//                                     <li> 99.9% uptime guaranteed</li>
//                                     <li> Monthly data & files backup</li>
//                                     <li> Social Media</li>
//                                     <li> SEO (additional $250 / m)</li>
//                                 </ul>
//                             </div>
//                             <button class="personalbutton">SIGN UP TODAY!</button>
//                         </div>

//                         <div class="plan col-lg-4 col-md-6 col-sm-12">
//                             <div>
//                                 <h4 class="business pricetag">Business</h4>
//                                 <div class="price">$349</div>
//                                 <p>PER MONTH</p>
//                                 <ul class="features">
//                                     <li> No Setup Fee</li>
//                                     <li> Content Management System </li>
//                                     <li> Custom Domain</li>
//                                     <li> Unlimited Bandwidth and Storage</li>
//                                     <li> Unlimited Pages</li>
//                                     <li> Responsive Design</li>
//                                     <li> Current Website Backup at Launch</li>
//                                     <li> Hosting included</li>
//                                     <li> Contact Form</li>
//                                     <li> 99.9% uptime guaranteed</li>
//                                     <li> Monthly data & files backup</li>
//                                     <li> Social Media</li>
//                                     <li> SEO (additional $250 / m)</li>
//                                 </ul>
//                             </div>
//                             <button class="businessbutton">SIGN UP TODAY!</button>
//                         </div>

//                         <div class="plan col-lg-4 col-md-6 col-sm-12">
//                             <div>
//                                 <h4 class="corporate pricetag">Corporate</h4>
//                                 <div class="price">$449</div>
//                                 <p>PER MONTH</p>
//                                 <ul class="features">
//                                     <li> No Setup Fee</li>
//                                     <li> Content Management System</li>
//                                     <li> Products / Categories Management</li>
//                                     <li> Shopping Cart / Orders management system</li>
//                                     <li> Custom Domain</li>
//                                     <li> Unlimited Bandwidth & Storage</li>
//                                     <li> Unlimited Pages</li>
//                                     <li> Responsive Design</li>
//                                     <li> Current Website Backup at Launch</li>
//                                     <li> Hosting included</li>
//                                     <li> Contact Form</li>
//                                     <li> 99.9% uptime guaranteed</li>
//                                     <li> Monthly data & files backup</li>
//                                     <li> Social Media</li>
//                                     <li> SEO (additional $250 / m)</li>
//                                 </ul>
//                             </div>
//                             <button class="corporatebutton">SIGN UP TODAY!</button>
//                         </div>
//                     </div>

//                     <div class="container customrequest pt-5 pb-5">
//                         <div class="content">
//                             <span>Not sure what you need?</span>
//                             <p>Our Custom Plan is tailored to your needs.</p>
//                         </div>
//                         <a href="#">REQUEST A QUOTE</a>
//                     </div>
//                 </div>
//             </section>

//             <!-- end pricing section -->

//             <!-- footer -->
//             <section id="footer">
//                 <div class="containr footercont">
//                     <h2 class="text-white">Get A Quote</h2>
//                     <h3>Contact us now to discuss your project!</h3>
//                     <div class="container contact-form-container">
//                         <form class="contact-form">
//                             <div class="form-row">
//                                 <div class="col-lg-4 p-1">
//                                     <div class="form-group">
//                                         <i class="icon-person-copy" style="color: #10b6d7;"></i>
//                                         <input type="text" id="name" placeholder="Name">
//                                     </div>
//                                     <div class="form-group">
//                                         <i class="icon-mailfooter-copy" style="color: #10b6d7;"></i>
//                                         <input type="email" id="email" placeholder="Email">
//                                     </div>
//                                     <div class="form-group">
//                                         <i class="icon-phonefooter-copy" style="color: #10b6d7;"></i>
//                                         <input type="text" id="phone" placeholder="Phone">
//                                     </div>
//                                     <div class="form-group">
//                                         <i class="icon-world" style="color: #10b6d7;"></i>
//                                         <input type="text" id="subject" placeholder="Company Name">
//                                     </div>
//                                 </div>

//                                 <div class="col-lg-8 p-1">
//                                     <div class="form-group2">
//                                         <textarea id="comments" class="mb-2" rows="5" placeholder="Details"></textarea>
//                                     </div>
//                                     <div class=" formbutton d-flex justify-content-between align-items-center">
//                                         <a href="#"><img src="./images/recaptcha.jpg" alt="Captcha"
//                                                 class="img-fluid"></a>
//                                         <div class="form-group2">
//                                             <button type="submit" class="submit-btn">
//                                                 Send <i class="fa-solid fa-arrow-right-long"></i>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </section>

//         </main>
//         <!-- end main section -->

//         <!--  footer section -->
//         <footer class="container lastlinecont py-3">
//             <div class="d-flex flex-column flex-md-row justify-content-between align-items-start w-100">
//                 <div class="d-flex flex-column align-items-start">
//                     <ul class="links d-flex gap-3 list-unstyled mb-2">
//                         <li><a href="#">WHY US</a></li>
//                         <li><a href="#">HOW IT WORKS</a></li>
//                         <li><a href="#">DESIGNS</a></li>
//                         <li><a href="#">FEATURES</a></li>
//                         <li><a href="#">FAQs</a></li>
//                         <li><a href="#" class="active">PRICING</a></li>
//                     </ul>
//                     <div class="copyright d-flex flex-wrap align-items-center gap-3">
//                         <p class="mb-0">© 2019 ESPWEBZING.com. All Rights Reserved</p>
//                         <p class="mb-0">
//                             <a href="#">Privacy Policy</a> |
//                             <a href="#">Refund Policy</a> |
//                             <a href="#">Terms</a>
//                         </p>
//                     </div>
//                 </div>

//                 <!-- Social Icons -->
//                 <div class="social-icons d-flex gap-3 mt-3 ">
//                     <a href="#"><i class="icon-facebok" style="color: #0e38b1; font-size: 28px;"></i></a>
//                     <a href="#"><i class="icon-google" style="color: red; font-size: 28px;"></i></a>
//                     <a href="#"><i class="icon-twittter" style="color: #74C0FC; font-size: 28px;"></i></a>
//                 </div>
//             </div>
//         </footer>

//         <!-- end footer section -->

//     </div>

//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
//         integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
//         crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
//         integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
//         crossorigin="anonymous"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
//         integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
//         crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
//         integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
//         crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//     <script src="index.js"></script>
// </body>

// </html>`,
//         csscode: `
// body {
//     margin: 0;
//     padding: 0;
//     font-family: "Poppins", sans-serif;
// }


// .block {
//     padding: 30px 0;
// }

// .block h2 {
//     font-size: 46px;
//     color: #1f4b74;
//     font-weight: 500;
// }

// .block h3 {
//     font-size: 24px;
// }

// .container {
//     max-width: 1164px;
// }

// /* header section */
// .topbar {
//     background: #15181c;
// }

// .topbar .container {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding-left: 7px;
//     padding-bottom: 7px;
// }

// .topbar .container .weblogos a img {
//     margin-right: 40px;
// }

// .topbar .container .btn {
//     margin-right: 4px;
//     padding: 8px 30px;
//     font-size: 16px;
//     font-weight: bold;
// }

// .topbar .container .btn i {
//     padding-right: 3px;
// }

// /* navbar */
// .navbar-nav li a {
//     margin-right: 20px;
//     font-size: 17px;
// }

// .close-btn,
// .drawer-heading {
//     display: none; 
// }

// .navbar-nav .nav-link:hover {
//     color: #2db3ef;
// }

// .navbar-nav .nav-link.active {
//     color: #2db3ef;
// }

// .tele {
//     text-decoration: none;
//     color: #2db3ef;
//     font-size: 23px;
//     font-weight: 500;
// }

// .tele:hover {
//     color: #003a85;
//     transition: all .5s ease;
// }

// .tele i {
//     margin-right: 10px;
// }

// /* banner section */
// .bannerblock {
//     background: #e0e7ef;
//     height: auto;
//     display: flex;
//     align-items: center;
// }

// .bannerblock .container {
//     width: 100%;
//     display: flex;
//     justify-content: center;
// }

// .bannerblock .container h1 {
//     padding-bottom: 20px;
//     font-size: 14px;
//     color: #2db3ef;
// }

// .bannerblock .container h2 {
//     font-size: 42px;
//     color: #1f4b74;
//     margin-bottom: 40px;
// }

// .bannerblock .container a {
//     background-color: #2db3ef;
//     color: white;
//     padding: 10px 40px;
//     text-decoration: none;
//     border-radius: 5px;
//     margin-top: 30px;
// }

// .bannerblock .container a:hover {
//     color: #2db3ef;
//     background-color: white;
//     border: 1px solid #2db3ef;
//     border-radius: 7px;
//     transition: all 0.5s ease;
// }

// .bannerblock .container img {
//     padding: 70px 0;
//     width: 100%;
//     height: auto;
//     object-fit: cover;
// }

// /* why us section */
// .whyusblock {
//     padding-top: 80px;
//     padding-bottom: 70px;
//     text-align: center;
// }

// whyusblock .container {
//     max-width: 1270px;
//     display: flex;
// }


// .whyusblock .container h3 {
//     font-size: 20px;
//     color: #1f4b74;
//     font-weight: 300;

// }

// .whyusblock .container .row a img {
//     width: 560px;
//     height: auto;
//     object-fit: cover;
//     padding-top: 35px;
//     max-width: inherit;
// }

// .service-row {
//     padding: 35px 0 7px 70px;
//     display: flex;
//     align-items: flex-start;
// }

// .icon-column img {
//     max-width: 65px;
//     color: #2db3ef;
//     margin-right: 15px;
// }

// .icon-column {
//     margin-right: 15px;
//     margin-left: 15px;
// }

// .text-column {
//     flex-direction: column;
// }

// .service-row .text-column h3 {
//     font-weight: 500;
//     text-align: left;
//     font-size: 18px;
//     margin: 0;
//     line-height: 1.5;
// }

// .service-row .text-column p {
//     font-weight: 300;
//     text-align: left;
//     font-size: 14px;
//     line-height: 1.4;
//     margin: 0;
//     padding: 0;
// }


// /* howitworks block section */
// .workblock {
//     padding-top: 95px;
//     padding-bottom: 60px;
//     background: #006fe0;
//     text-align: center;
// }

// .workblock .container h3 {
//     font-weight: 300;
//     margin-bottom: 60px;
//     color: white;
// }

// .workrow {
//     background-image: url(./images/howbg.png);
//     padding-right: 10px;
//     background-repeat: no-repeat;
//     object-fit: cover;
// }

// .workcont .row .cont {
//     padding: 26px 0 0 0px;
// }

// .workcont .row .cont img {
//     width: auto;
//     height: 68px;
// }

// .workcont .row .cont h3 {
//     padding-top: 60px;
//     font-size: 18px;
// }

// .workcont .row .cont p {
//     padding-top: 30px;
//     font-weight: 300;
//     font-size: 14px;
//     color: #fff;
// }


// /* Design section */
// .designblock {
//     text-align: center;
//     background: #f4f7f8;
//     padding-top: 60px;
//     padding-bottom: 60px;
// }

// .designblock .container h2 {
//     font-weight: 300;
//     line-height: 1.4;
// }

// .designblock .container h3 {
//     font-size: 20px;
//     font-weight: 300;
// }

// .owl-carousel .item img {
//     width: 100%;
// }

// .item {
//     position: relative;
//     margin-bottom: 60px;
// }

// .carouselcontent {
//     display: none;
//     width: 100%;
//     padding: 0;
//     text-align: center;
//     background: white;
// }

// .item.active .carouselcontent {
//     display: block;
// }

// .activecarouseldiv {
//     padding: 25px;
//     text-align: left;
// }

// .activecarouseldiv h3 {
//     font-size: 18px !important;
//     font-weight: 500 !important;
//     line-height: 1 !important;
//     color: black !important;
// }

// .activecarouseldiv span {
//     font-weight: 300 !important;
//     font-size: 13px !important;
//     color: black !important;
//     padding-bottom: 10px;
// }

// .activecarouseldiv .buttons {
//     padding-top: 10px;
//     padding-bottom: 10px;
//     display: flex;
//     justify-content: start;
//     gap: 10px;
// }

// .activecarouseldiv .view,
// .activecarouseldiv .live {
//     text-decoration: none;
//     padding: 5px 15px;
//     color: white;
//     font-size: 16px;
//     border-radius: 4px;
// }

// .activecarouseldiv .view {
//     background: #ff5512;
// }

// .activecarouseldiv .view:hover {
//     color: #ff5512;
//     background-color: #fff;
//     border: 1px solid #ff5512;
//     transition: all 0.5s ease;
// }

// .activecarouseldiv .live {
//     background: #006fe0;
// }

// .activecarouseldiv .live:hover {
//     color: #006fe0;
//     background-color: #fff;
//     border: 1px solid #006fe0;
//     transition: all 0.5s ease;
// }



// /* services section */
// .servicesblock {
//     padding-top: 90px;
//     background: #ffffff;
// }

// .servicesblock .row {
//     padding-bottom: 50px;
// }

// .inner {
//     position: relative;
//     z-index: 99;
//     margin-right: 10px;
//     width: 700px;
//     height: auto;
//     background: #fff;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//     border-radius: 0;
//     padding: 35px;
//     margin: 0 -90px 0 0;
// }

// .inner2 {
//     position: relative;
//     z-index: 99;
//     margin-right: 10px;
//     width: 700px;
//     height: auto;
//     background: #fff;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//     border-radius: 0;
//     padding: 20px;
//     margin: 30px 0 30px -70px;
// }

// .services-row {
//     padding: 20px;
//     display: flex;
//     align-items: flex-start;
// }

// .icon-head img {
//     font-size: 50px;
//     color: #2db3ef;
//     margin-right: 15px;
// }

// .icon-head {
//     padding-top: 10px;
//     margin-right: 15px;
//     margin-left: 15px;
// }

// .title {
//     flex-direction: column;
// }

// .services-row .title h2 {
//     font-weight: 300;
//     font-size: 28px;
//     margin: 0;
//     line-height: 1.5;
// }

// .services-row .title span {
//     font-weight: 300;
//     text-align: left;
//     font-size: 15px;
//     line-height: 1.4;
//     margin: 0;
//     padding: 0;
// }

// .inner p {
//     padding: 25px 50px;
//     font-size: 13px;
// }

// .inner a {
//     text-decoration: none;
//     color: #00a2ec;
//     margin-left: 40px;
//     padding: 5PX 15PX;
//     background-color: #fff;
//     border: 2px solid #00a2ec;
//     border-radius: 5px;
//     font-size: 14px;
// }

// .inner a:hover {
//     background-color: #00a2ec;
//     color: #fff;
//     transition: all 0.4s ease;
//     border-radius: 5px;
// }

// .inner2 p {
//     padding: 25px 50px;
//     font-size: 13px;
// }

// .inner2 a {
//     text-decoration: none;
//     margin-left: 40px;
//     padding: 5PX 15PX;
//     color: #00a2ec;
//     background-color: #fff;
//     border: 2px solid #00a2ec;
//     border-radius: 5px;
//     font-size: 14px;
// }

// .inner2 a:hover {
//     background-color: #00a2ec;
//     color: #fff;
//     transition: all 0.4s ease;
//     border-radius: 5px;
// }

// /* FAQ section */
// .faqblock {
//     padding: 70px 0;
//     background: #003a85;
//     text-align: center;
// }

// .accordion-button::before {
//     content: "2212";
//     margin-right: 34px;
//     transition: transform 0.3s ease;
//     color: #fff;
//     width: 25px;
//     height: 25px;
//     border-radius: 50%;
//     font-size: 20px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #2db3ef;
//     transition: background-color 0.5s, color 0.3s;
// }

// .accordion-item:first-of-type>.accordion-header .accordion-button {
//     border-radius: 0;
// }

// .accordion-button:focus {
//     outline: none;
//     box-shadow: none;
// }

// .accordion-button {
//     color: white;
//     transition: color 0.3s ease;
// }

// .accordion-button:not(.collapsed) {
//     box-shadow: none;
// }

// .accordion-collapse.show+.accordion-header .accordion-button {
//     color: red !important;
// }

// .accordion-button:not(.collapsed) {
//     color: #2db3ef;
// }

// .accordion-button:not(.collapsed) {
//     background-color: white;
// }

// .accordion-button {
//     background: transparent;
//     border: 0;
// }

// .accordion-body {
//     padding: 0 34px 15px 73px;
//     margin-bottom: 20px;
//     text-align: left;
// }

// .accordion-button::after {
//     display: none;
// }

// .accordion-item {
//     background: transparent;
//     border: 0;
// }

// .accordion-button.collapsed::before {
//     content: "002B";
//     color: black;
//     width: 25px;
//     height: 25px;
//     border-radius: 50%;
//     font-size: 20px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: white;
//     transition: background-color 0.5s, color 0.3s;
// }

// /* pricing section */
// .pricingblock {
//     color: #f7f9fb;
//     text-align: center;
//     padding-top: 70px;
//     background-color: #eee;
//     padding-bottom: 60px;
//     overflow: hidden;
//     position: relative;
// }

// .pricingblock .container {
//     position: relative;
//     z-index: 2;
// }

// .block.pricingblock::after {
//     position: absolute;
//     left: -30px;
//     right: -20px;
//     top: -83px;
//     height: 450px;
//     content: '';
//     background: #fff;
//     pointer-events: none;
//     rotate: -5deg;
// }

// .pricingblock .container h2 {
//     font-weight: 300;
// }

// .pricingblock .container h3 {
//     font-size: 24px;
//     padding-left: 20px;
//     color: #1f4b74;
//     font-weight: 300;
// }


// .personal {
//     background-color: #4843d2;
// }

// .business {
//     background-color: #26c05f;
// }

// .corporate {
//     background-color: #fd5635;
// }

// .business,
// .personal,
// .corporate {
//     text-align: center;
//     font-size: 18px;
//     padding: 8px 35px;
//     display: inline-block;
//     position: relative;
// }

// .pricetag {
//     text-align: center;
//     font-size: 18px;
//     padding: 8px 35px;
//     display: inline-block;
//     position: relative;
//     margin-bottom: 25px;
// }

// .pricetag::before {
//     content: '';
//     background: #fff;
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     position: absolute;
//     top: -1px;
//     left: -27px;
// }

// .pricetag::after {
//     content: '';
//     background: #fff;
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     position: absolute;
//     top: -1px;
//     right: -27px;
// }

// .personalbutton,
// .businessbutton,
// .corporatebutton {
//     color: white;
//     padding: 10px 30px;
//     font-size: 18px;
//     border: 0;
//     display: inline-block;
// }


// .personalbutton {
//     background-color: #4843d2;
// }

// .personalbutton:hover {
//     background-color: #fff;
//     color: #4843d2;
//     transition: all 0.4s ease;
//     border: 1px solid #4843d2;
//     border-radius: 5px;
// }

// .businessbutton {
//     background-color: #26c05f;
// }

// .businessbutton:hover {
//     background-color: #fff;
//     color: #26c05f;
//     transition: all 0.4s ease;
//     border: 1px solid #26c05f;
//     border-radius: 5px;
// }

// .corporatebutton {
//     background-color: #fd5635;
// }

// .corporatebutton:hover {
//     color: #fd5635;
//     background-color: #fff;
//     transition: all 0.4s ease;
//     border: 1px solid #fd5635;
//     border-radius: 5px;
// }

// .fa-check {
//     margin-right: 10px;
// }

// .pricing {
//     padding-top: 30px;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
// }

// .pricing .plan {
//     background-color: #fff;
//     padding: 2.5rem;
//     margin: 20px auto 20px auto;
//     border-radius: 5px;
//     text-align: center;
//     transition: 0.3s;
//     width: 30%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// }

// .pricing .plan .price {
//     color: #1f4b74;
//     font-size: 50px;
//     line-height: 1;
// }

// .pricing .plan p {
//     color: grey;
//     font-size: 14px;
// }

// .pricing .plan ul.features {
//     padding: 15px 0;
//     list-style-type: none;
//     color: black;
//     text-align: left;
// }

// .pricing .plan ul.features li {
//     font-size: 14PX;
//     position: relative;
//     margin: 8px;
//     padding-left: 30px;
// }

// .pricing .plan ul.features li::before {
//     content: '\f00c';
//     color: #00a2ec;
//     font-family: 'fontawesome';
//     position: absolute;
//     left: 0;
// }

// .pricing .plan.popular {
//     position: relative;
// }

// .pricing .plan.popular span {
//     position: absolute;
//     top: -20px;
//     left: 50%;
//     transform: translateX(-50%);
//     background-color: #6ab04c;
//     color: #fff;
//     padding: 4px 20px;
//     font-size: 18px;
//     border-radius: 5px;
// }

// .plan {
//     box-shadow: 5px 7px 67px -28px rgba(0, 0, 0, 0.37);
// }

// .customrequest {
//     background-image: url('./images/customreqbgor.png');
//     background-repeat: no-repeat;
//     background-size: cover;
//     border-radius: 5px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     position: relative;
// }

// .customrequest::after {
//     content: '';
//     position: absolute;
//     top: 10px;
//     right: 10px;
//     bottom: 10px;
//     left: 10px;
//     border: 1px solid #fff;
//     border-radius: 5px;
//     pointer-events: none;
// }

// .customrequest .content {
//     padding: 0 30px;
//     display: flex;
//     flex-direction: column;
// }

// .customrequest .content span {
//     font-size: 28Px;
//     line-height: 1;
// }

// .customrequest .content p {
//     font-size: 16px;
// }

// .customrequest a {

//     text-decoration: none;
//     color: white;
//     border: 1px solid #fff;
//     padding: 5px 10px;
//     border-radius: 5px;
// }

// .customrequest a:hover {
//     background-color: #2db3ef;
//     color: #000;
//     transition: all 0.5s ease-out;

// }


// /* footer section */
// #footer {
//     padding-top: 80px;
//     padding-bottom: 50px;
//     text-align: center;
//     background-image: url(./images/footer-bg.png);
// }

// .footercont h2 {
//     font-weight: 300;
//     font-size: 50px;
//     line-height: 1;
//     color: white;
// }

// .footercont h3 {
//     font-size: 18px;
//     color: white;

// }

// .contact-form-container {
//     margin: 10px auto;
//     padding: 20px;
//     background-color: transparent
// }

// .contact-form {
//     display: flex;
//     flex-direction: column;
// }

// .form-row {
//     display: flex;
//     justify-content: space-between;
//     gap: 0;
// }

// .form-group input,
// .form-group2 textarea {
//     width: 100%;
//     padding: 14px 10px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     background-color: #fff;
//     box-sizing: border-box;
//     font-size: 16px;
// }

// .form-group2 textarea {
//     padding: 10px 10px;
// }

// .form-group {
//     text-align: right;
//     margin-bottom: 5px;
//     position: relative;
// }

// .form-group input {
//     width: 100%;
//     padding-left: 30px;
// }

// .form-group i {
//     position: absolute;
//     left: 10px;
//     top: 50%;
//     transform: translateY(-50%);
//     color: #999;
//     pointer-events: none;
//     font-size: 14px;
//     margin-right: 5px;
// }

// .captcha {
//     margin-right: auto;
// }

// .captcha img {
//     width: 100%;
// }

// .form-group2 {
//     display: flex;
//     justify-content: flex-end;
// }

// .submit-btn {
//     margin-top: 10px;
//     margin-bottom: 37px;
//     padding: 10px 20px;
//     background-color: #ff5512;
//     color: #fff;
//     border: 0;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 14px;
//     margin-left: 5px;
// }

// .submit-btn:hover {
//     color: #ff5512;
//     background-color: #fff;
//     transition: all 0.5s ease;
// }

// .form-group2 .submit-btn i {
//     margin-left: 35px;
// }

// /* lastline */
// .links a,
// .copyright a {
//     font-size: 16px;
//     text-decoration: none;
//     color: #1f4b74;
// }

// .links a:hover,
// .copyright a:hover,
// .social-icons a:hover {
//     color: #2db3ef;
// }

// .links a.active {
//     color: #2db3ef;
// }

// .social-icons a {
//     text-decoration: none;
// }

// /* media queries section */
// @media (max-width: 1200px) {

//     .workblock {
//         padding-top: 50px;
//         background: #006fe0;
//         text-align: center;
//     }

//     .workblock .container h2 {
//         font-weight: 300;
//         font-size: 35px;
//         color: white;
//     }

//     .workblock .container h3 {
//         font-weight: 300;
//         margin-bottom: 10px;
//         font-size: 14px;
//         color: white;
//     }

//     .workrow {
//         background: transparent;

//     }

//     .workcont .row .cont {
//         padding: 10px 0 0 0px;
//     }

//     .workcont .row .cont img {
//         width: auto;
//         height: 58px;
//     }

//     .workcont .row .cont h3 {
//         padding-top: 20px !important;
//         font-size: 16px;
//     }

//     .workcont .row .cont p {
//         padding-top: 10px;
//         font-weight: 300;
//         font-size: 13px;
//     }

// }

// @media (max-width: 1100px) {

//     /* topbar */

//     .bannerblock .container {
//         padding-left: 20px;
//         padding-top: 50px;
//     }

//     /* navbar */
//     .navbar-nav {
//         justify-content: center;
//         align-self: center;
//         text-align: center;
//     }

//     .navbar-nav li a {
//         text-align: center;
//         margin-right: 10px;
//         font-size: 13px;
//     }

//     .navbar-nav a {
//         text-align: center;
//         margin-right: 10px;
//         font-size: 13px;
//     }

//     .links {
//         display: none !important;
//     }

//     .copyright {
//         flex-direction: row;
//         justify-content: center;
//     }

//     .social-icons {
//         justify-content: center;
//     }

//     .pricing .plan {
//         width: 35%;
//     }

//     .whyusblock .container .row {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//     }

//     .whyusblock .container h2 {
//         font-size: 35px;
//     }

//     .whyusblock .container h3 {
//         font-size: 13px;
//     }

//     .text-center {
//         text-align: center;
//     }

//     .service-row {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         padding: 15px 0;
//         text-align: center;
//     }

//     .icon-column,
//     .text-column {
//         margin: 0 auto;
//         text-align: center;
//     }

//     .icon-column img {
//         max-width: 65px;

//     }

//     .service-row .text-column h3 {
//         font-size: 18px;
//     }

//     .service-row .text-column h3,
//     .service-row .text-column p {
//         text-align: center;
//     }

//     .whyusblock .container h3 {
//         font-size: 20px;
//         padding-bottom: 25px;
//     }

//     .whyusblock .container .row a img {
//         width: 100%;
//         max-width: 560px;
//         height: auto;
//         object-fit: cover;
//         padding-top: 25px;
//     }

//     .lastlinecont {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         text-align: center;
//     }

//     .lastlinecont .d-flex {
//         display: flex;
//         align-items: center;
//         width: 100%;
//         max-width: 100%;
//     }

//     .lastlinecont .d-flex.flex-md-row {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         width: 100%;
//     }

//     .social-icons {
//         display: flex;
//         justify-content: center;
//         gap: 10px;
//         margin-top: 1rem;
//         width: 100%;
//     }

//     .copyright {
//         margin-top: 1rem;
//         width: 100%;
//     }

//     .copyright p {
//         margin: 0;
//     }

// }

// @media (max-width: 992px) {


//     /* collapse right drawer */

//     .navbar-collapse {
//         position: fixed;
//         top: 0;
//         left: 0;
//         height: 100vh;
//         width: 100%;
//         max-width: 400px;
//         /* width: 600px;
//         max-width: 100%; */
//         background-color: #003366;
//         transform: translateX(-100%);
//         transition: transform 0.5s ease;
//         z-index: 1050;
//         padding-top: 20px;
//     }

//     .navbar-collapse.show {
//         transform: translateX(0);
//     }
//     .navbar-collapse.show .close-btn,
//     .navbar-collapse.show .drawer-heading {
//         display: block;
//     }

//     .close-btn {
//         position: absolute;
//         top: 10px;
//         right: 10px;
//         font-size: 24px;
//         background: none;
//         border: none;
//         cursor: pointer;
//         color: white;
//     }

//     .drawer-heading {
//         margin: 0;
//         color: #fff;
//         padding: 15px 0; 
//         text-align: center; 
//         font-weight: bold;
//     }

//     .navbar-nav .nav-item {
//         border-bottom: 2px solid #2db3ef;
//         padding: 0 10px;
//     }

//     .navbar-nav .nav-link {
//         padding: 10px 25px;
//         text-align: left;
//         color: #fff;
//     }

//     .navbar-toggler {
//         border: none;
//     }

//     .navbar-toggler-icon {
//         background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.7)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
//     }



//     .tele {
//         display: none;
//     }

//     /* banner */
//     .bannerblock .container {
//         padding-left: 20px;
//         padding-top: 50px;
//     }

//     .bannerblock .container h1 {
//         padding-bottom: 30px;
//         font-size: 13px;
//         color: #2db3ef;
//     }

//     .bannerblock .container h2 {
//         font-size: 25px;
//         color: #1f4b74;
//         margin-bottom: 35px;
//     }

//     .bannerblock .container a {
//         background-color: #2db3ef;
//         color: white;
//         padding: 10px 30px;
//         text-decoration: none;
//         border-radius: 10px;
//         margin-top: 20px;
//     }

//     .bannerblock .container img {
//         width: 90%;
//         height: auto;
//         object-fit: cover;
//     }

//     .form-group2 .submit-btn i {
//         display: none;
//     }

//     .workcont .row .cont h2 {
//         padding-top: 20px;
//         font-size: 18px;
//     }

//     .workcont .row .cont h3 {
//         padding-top: 5px;
//         font-weight: 300;
//         font-size: 14px;
//     }

//     /* services block */
//     .servicesblock {
//         padding-top: 40px;
//         background: #ffffff;
//     }

//     .servicesblock .row {
//         padding-bottom: 0;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         text-align: center;
//     }

//     .inner,
//     .inner2 {
//         position: relative;
//         justify-content: center;
//         z-index: 99;
//         width: 700px;
//         height: auto;
//         background: #fff;
//         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//         border-radius: 0;
//         padding: 20px 10px;
//         margin: 35px auto 40px auto;
//     }

//     .inner2 {
//         margin: 40px auto 0 auto;
//     }

//     .services-row {
//         padding: 20px 0;
//         display: flex;
//         align-items: flex-start;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//     }

//     .icon-head img {
//         font-size: 50px;
//         color: #2db3ef;
//         margin-right: 15px;
//     }

//     .icon-head {
//         padding-top: 10px;
//         margin-right: 15px;
//     }

//     .title {
//         flex-direction: column;
//     }

//     .services-row .title h2 {
//         font-weight: 300;
//         font-size: 22px;
//         margin: 0;
//         line-height: 1.5;
//     }

//     .services-row .title span {
//         font-weight: 300;
//         font-size: 13px;
//         line-height: 1;
//         margin: 0;
//         padding: 0;
//     }

//     .inner p {
//         padding: 5px 0;
//         font-size: 13px;

//     }

//     .inner a {
//         text-decoration: none;
//         margin-right: 45px;
//         padding: 5px 15px;
//         background-color: #fff;
//         border: 1px solid #006fe0;
//         border-radius: 5px;
//         font-size: 14px;
//     }

//     .inner2 p {
//         padding: 5px 0;
//         font-size: 13px;
//     }

//     .inner2 a {
//         text-decoration: none;
//         padding: 10px 15px;
//         margin-right: 45px;
//         background-color: #fff;
//         border: 1px solid #006fe0;
//         border-radius: 5px;
//         font-size: 14px;
//     }

//     .form-row .col-lg-4,
//     .form-row .col-lg-8 {
//         width: 100%;
//         padding: 0;
//     }

//     .lastimage {
//         padding-top: 40px;
//     }

//     /* Pricing */
//     .pricing .plan {
//         width: calc(100% - 30px)
//     }

// }

// @media (max-width: 750px) {

//     /* topbar */
//     .topbar {
//         background: #15181c;
//     }

//     .topbar .container {
//         padding: 10px 5px;
//         display: flex;
//         justify-content: space-between;
//         align-items: end;
//     }

//     .topbar .container .weblogos img {
//         margin-right: 10px !important;
//         width: 50px;
//     }

//     .topbar .container .btn {
//         font-size: 13px;
//         padding: 5px 15px;
//     }

//     /* banner */
//     .bannerblock .container {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         text-align: center;
//     }

//     .bannerblock .container .contentbanner {
//         padding-top: 30px;
//         text-align: center;
//         width: 100%;
//     }

//     .bannerblock .container .imgcontent img {
//         padding-top: 50px;
//         width: 90%;
//         height: auto;
//         object-fit: cover;
//         margin: 0 auto;
//     }


//     .form-row {
//         flex-direction: column;
//     }

//     .form-group textarea {
//         margin-top: -8px;
//     }

//     .footercont h2 {
//         font-weight: 300;
//         font-size: 35px;
//         line-height: 1;
//         color: white;
//     }

//     .footercont h3 {
//         font-size: 14px;
//         color: white;

//     }

//     .contact-form-container .form-row .form-group .submit-btn {
//         text-align: left;
//         margin-left: 0;
//         display: block;
//         width: auto;
//     }

//     .form-group2 textarea {
//         margin-top: -8px;
//     }

//     .form-group2 .submit-btn i {
//         display: inline-block;
//     }

//     .customrequest {
//         flex-direction: column;
//         justify-content: center;
//     }

//     .customrequest .content span {
//         font-size: 18px;
//     }

//     .customrequest .content p {
//         font-size: 14px;
//     }

//     .designblock .container h2 {
//         font-size: 35px;
//     }

//     .designblock .container h3 {
//         font-size: 14px;
//     }

//     .accordion-body {
//         font-size: 13 px;
//     }


// }

// @media (max-width: 520px) {
//     .formbutton {
//         flex-direction: column;
//         /* Stack captcha and button */
//         align-items: flex-start;
//         /* Align items to the left */
//     }
// }`,
//         jscode: `
// $(document).ready(function () {
//   var owl = $(".owl-carousel").owlCarousel({
//     loop: true,
//     margin: 1,
//     nav: false,
//     dots:false,
//     center: true,
//     responsive: {
//       0: {
//         items: 1
//       },
//       600: {
//         items: 2
//       },
//       1000: {
//         items: 3
//       }
//     },
//     onInitialized: updateActiveClass,
//     onTranslated: updateActiveClass
//   });

//   function updateActiveClass() {
//     $(".owl-carousel .item").removeClass("active");
//     var centerItem = $(".owl-carousel .owl-item.active.center");
//     centerItem.find('.item').addClass("active");
//   }
// });


// document.addEventListener('DOMContentLoaded', function () {
//   const toggler = document.querySelector('.navbar-toggler');
//   const collapse = document.querySelector('.navbar-collapse');

//   toggler.addEventListener('click', function () {
//       collapse.classList.toggle('show');
//   });
// });


// document.addEventListener('DOMContentLoaded', function () {
//   const toggler = document.querySelector('.navbar-toggler');
//   const collapse = document.querySelector('.navbar-collapse');
//   const closeBtn = document.querySelector('.close-btn');

//   // Toggle drawer open/close
//   toggler.addEventListener('click', function () {
//       collapse.classList.toggle('show');
//   });

//   // Close the drawer when the close button is clicked
//   closeBtn.addEventListener('click', function () {
//       collapse.classList.remove('show');
//   });
// });



// `
//     },
//     {
//         w_no: 2,
//         w_name: "BCM Services & Engineering at ESP INSPIRE",
//         w_img: BCM,
//         htmlcode: `<!doctype html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <title>Website</title>
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
//   <link rel="preconnect" href="https://fonts.googleapis.com">
//   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//   <link
//     href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
//     rel="stylesheet">
//   <link rel="stylesheet" href="style.css">
// </head>
// <body>
//   <div class="wrapper">

//     <!-- headernavbr -->
//     <header id="header" class="position-sticky">
//       <div class="topbar">
//         <div class="container d-flex justify-content-end">
//           <div class="siteinfo d-flex text-start">
//             <address class="m-0 address"><i class="fa-solid fa-location-pin icon-spacing text-start"></i>1418 Mariani
//               Ct. Suite 160 Tracy, Ca
//               95376</address>
//             <a href="tel:2094630707" class="tele"> <i class="fa-solid fa-phone text-white icon-spacing"></i>(209)
//               463-0707</a>
//             <a href="mailto:bcmbob1@aol.com" class="mess"> <i
//                 class="fa-solid fa-message icon-spacing"></i>bcmbob1@aol.com</a>
//           </div>
//         </div>
//       </div>
//       <nav class="navbar navbar-expand-xl bg-body-tertiary" data-spy="affix" data-offset-top="197">
//         <div class="container navbarcontainer" data-spy="affix" data-offset-top="197">
//           <a class="navbar-brand" href="#">
//             <img src="./images/logo.png" class="ms-auto img-fluid mainlogo" alt="Logo">
//           </a>
//           <button class=" navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
//             aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse pb-3 " id="navbarSupportedContent">
//             <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a class="nav-link active text-uppercase" aria-current="page" href="#">Home</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-uppercase" href="#">About Us</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-uppercase" href="#">Services</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-uppercase" href="#">Our Teams</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-uppercase" href="#">Career</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-uppercase" href="#">Projects</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-uppercase" href="#">Client</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-uppercase" href="#">Contact Us</a>
//               </li>
//             </ul>
//           </div>
//           <div class="sticky-button-container">
//             <button type="button" class="stickybutton rounded-pill border-0">GET QUOTE</button>
//           </div>
//         </div>
//       </nav>
//     </header>

//     <!-- bannner section -->
//     <section class="banner mb-2">
//       <div class="overlay">
//         <img src="./images/banner.jpg" alt="Banner Image" class="banner-image">
//       </div>
//       <div class="banner-text container">
//         <div class="row">
//           <div class="col-12 col-md-8 col-lg-6">
//             <h1 class="text-white text-uppercase">General Engineering</h1>
//             <div class="subtext">CONTRACTOR</div>
//             <p>
//               BCM was founded in 1981 in Fremont CA and has continued to grow over the past 30+ years.
//             </p>
//             <button type="button" class="btn btn-danger rounded-pill px-5 py-2 mt-4">Contact Us <i
//                 class="fa-solid fa-arrow-right .iconbanner"></i></button>
//           </div>
//         </div>
//       </div>
//     </section>

//     <!-- intosection services -->

//     <section id="introsection" class="mt-5 mb-5 pt-4">
//       <div class="container pb-4">
//         <h6 class="text-center wel-int">WELCOME TO</h6>
//         <h2 class="text-center custom-blue">BCM SERVICES & Engineering</h2>
//         <p class="p-intro text-center mt-4">BCM Service & Engineering specializes in the installation, repair and
//           maintenance of industrial process equipment.</p>
//         <p class="p-intro2 text-center mt-4">
//           BCM was founded in 1981 in Fremont CA. and has continued to grow over the past 30 + years. BCM Service &
//           Engineering expanded into
//           the Central Valley in 2008. BCM now handles all of Northern California and travels for select customers across
//           the country.
//         </p>
//       </div>
//       <div id="carouselExampleIndicators" class="carousel mt-5">
//         <div class="carousel-inner">
//           <!-- Slide 1 -->
//           <div class="carousel-item active mb-5">
//             <div class="container">
//               <div class="row">
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/1.png" class="d-block w-100" alt="Image 9">
//                       <div class="overlay1"></div>
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2>MECHANICAL <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>

//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/2.png" class="d-block w-100" alt="Image 9">
//                       <div class="overlay1"></div>
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2>ELECTRICAL <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>

//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/3.png" class="d-block w-100" alt="Image 9">
//                       <div class="overlay1"></div>
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2> COMPRESSED AIR SYSTEM <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>

//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/img4.jpg" class="d-block w-100" alt="Image 9">
//                       <div class="overlay1"></div>
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2>WELDING <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>

//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/5.png" class="d-block w-100" alt="Image 9">
//                       <div class="overlay1"></div>
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2>ENGINEERING <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>

//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/6.png" class="d-block w-100" alt="Image 9">
//                       <div class="overlay1"></div>
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2>CONSTRUCTION SERVICES <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>

//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/7.png" class="d-block w-100" alt="Image 9">
//                       <div class="overlay1"></div>
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2>PIPING <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>

//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/8.png" class="d-block w-100" alt="Image 9">
//                       <div class="overlay1"></div>
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2>CRANES & HOISTS <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <!-- Slide 2 -->
//           <div class="carousel-item mb-5">
//             <div class="container">
//               <div class="row">
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/1.png" class="d-block w-100" alt="Image 9">
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h4 class="d-none">MECHANICAL <i class="fa-solid fa-arrow-right"></i></h4>
//                         <h2>MECHANICAL <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/2.png" class="d-block w-100" alt="Image 9">
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2>ELECTRICAL <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/3.png" class="d-block w-100" alt="Image 9">
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2> COMPRESSED AIR SYSTEM <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/img4.jpg" class="d-block w-100" alt="Image 9">
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2>WELDING <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/5.png" class="d-block w-100" alt="Image 9">
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2>ENGINEERING <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/6.png" class="d-block w-100" alt="Image 9">
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2>CONSTRUCTION SERVICES <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/7.png" class="d-block w-100" alt="Image 9">
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2>PIPING <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
//                   <a href="">
//                     <div class="image-container">
//                       <img src="./images/8.png" class="d-block w-100" alt="Image 9">
//                       <div class="hovereffect">
//                         <i class="fa-solid fa-gear"></i>
//                         <h2>CRANES & HOISTS <i class="fa-solid fa-arrow-right"></i></h2>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <!-- Add more slides here -->
//         </div>
//         <div class="carousel-indicators">
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
//             aria-current="true" aria-label="Slide 1"></button>
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
//             aria-label="Slide 2"></button>
//         </div>
//       </div>
//     </section>

//     <!-- second banner section as herosection -->
//     <section class="custom-two-column-section secondban">
//       <div class="container">
//         <div class="row">
//           <!-- First Column -->
//           <div class="col-6 col-md-6 col-sm-6 first-column">
//             <img src="./images/vidbannerpic.png" alt="Image 1" class="img-fluid" data-bs-toggle="modal"
//               data-bs-target="#exampleModal">
//             <button type="button" class="buttonhero" data-bs-toggle="modal" data-bs-target="#staticBackdrop">GET QUOTE
//               <i class="fa-solid fa-arrow-right iconhero"></i></button>
//           </div>
//           <!-- Second Column -->
//           <div class="col-6 col-md-6 col-sm-6 second-column">
//             <div class="imgtext30">
//               <div class="image-wrapper">
//                 <img src="./images/text.png" alt="Image 3" class="img-fluid centered">
//               </div>
//               <p class="centered-text">BCM was founded in 1981 in Fremont CA. and has <br> continued to grow over the
//                 past 30 + years..</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- butttonmodal -->
//       <!-- Modal -->
//       <!-- Modal Structure -->
//       <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
//         aria-labelledby="staticBackdropLabel" aria-hidden="true">
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="staticBackdropLabel">Video Content</h1>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//               <video controls>
//                 <source src="./images/hero.mp4" type="video/mp4">
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" class="btn btn-primary">Understood</button>
//             </div>
//           </div>
//         </div>
//       </div>





//       <!-- modal -->
//       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//               ...
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" class="btn btn-primary">Save changes</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     <!-- testimonials section -->
//     <section id="testimonials" class="mt-5 mb-5 pb-5">
//       <div class="container testimonial">
//         <strong class="text-center testi ">TESTIMONIALS</strong>
//         <h2 class="testsub text-center">A FEW WORDS FOR OUR HAPPY CLIENTS</h2>
//         <img src="./images/comms.png" class="comimage" alt="">
//         <blockquote>I have personnally Worked With Bob McMahan and his company, BCM services and Engineering.since
//           1985.in the past 25 years we have partnered on projects ....</blockquote>
//       </div>
//     </section>

//     <!-- grid section for projects -->
//     <section id="grid" class="bg-color grid-section pt-5">
//       <div class="container text-center gridcont gridproj">
//         <strong class="text-center stronggrid">FOUNDED IN MAY OF 1981</strong>
//         <h2 class="text-center">OUR PROJECTS</h2>
//         <div class="row pt-5">
//           <div class="col-xl-6 col-lg-12 col-12">
//             <a href="">
//               <div class="image-containergrid">
//                 <img src="./images/g6.png" class="d-block w-100" alt="Image 9">
//                 <div class="overlay1"></div>
//                 <div class="gridhovereffect">
//                   <h3>BUILDING CONSTRUCTION & DESIGN<i class="fa-solid fa-arrow-right icon-spacinggrid"></i></h3>
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div class="col-xl-3 col-lg-12 col-12">
//             <a href="">
//               <div class="image-containergrid">
//                 <img src="./images/grid2.png" class="d-block w-100" alt="Image 9">
//                 <div class="overlay1"></div>
//                 <div class="gridhovereffect">
//                   <h3>CONSTRUCTION&nbsp;&nbsp;<i class="fa-solid fa-arrow-right icon"></i></h3>
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div class="col-xl-3 col-lg-12 col-12">
//             <a href="">
//               <div class="image-containergrid">
//                 <img src="./images/g3.png" class="d-block w-100" alt="Image 9">
//                 <div class="overlay1"></div>
//                 <div class="gridhovereffect">
//                   <h3>CONSTRUCTION&nbsp;&nbsp;<i class="fa-solid fa-arrow-right icon"></i></h3>
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div class="col-xl-3 col-lg-12 col-12">
//             <a href="">
//               <div class="image-containergrid">
//                 <img src="./images/g4.png" class="d-block w-100" alt="Image 9">
//                 <div class="overlay1"></div>
//                 <div class="gridhovereffect">
//                   <h3>CONSTRUCTION&nbsp;&nbsp;<i class="fa-solid fa-arrow-right icon"></i></h3>
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div class="col-xl-3 col-lg-12 col-12">
//             <a href="">
//               <div class="image-containergrid">
//                 <img src="./images/g5.png" class="d-block w-100" alt="Image 9">
//                 <div class="overlay1"></div>
//                 <div class="gridhovereffect">
//                   <h3>CONSTRUCTION&nbsp;&nbsp;<i class="fa-solid fa-arrow-right icon"></i></h3>
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div class="col-xl-6 col-lg-12 col-12">
//             <a href="">
//               <div class="image-containergrid">
//                 <img src="./images/g6.png" class="d-block w-100" alt="Image 9">
//                 <div class="overlay1"></div>
//                 <div class="gridhovereffect">
//                   <h3>BUILDING CONSTRUCTION & DESIGN<i class="fa-solid fa-arrow-right icon-spacinggrid"></i></h3>
//                 </div>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>

//     <!-- map-frame section -->

//     <div class=" map-container">
//       <!-- Google Maps Embed -->
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.9735616024955!2d-121.41494638763012!3d37.74376447187638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80903d11cec8f759%3A0xb1032b79c3bfec9a!2s1418%20Mariani%20Ct%20STE%20160%2C%20Tracy%2C%20CA%2095376%2C%20USA!5e0!3m2!1sen!2s!4v1723467164851!5m2!1sen!2s"
//         width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy"
//         referrerpolicy="no-referrer-when-downgrade"></iframe>
//     </div>
//     <!-- footer section -->
//     <!-- Footer -->
//     <footer class="text-center text-white footersection">
//       <!-- Grid container -->
//       <div class="container">
//         <!-- Grid row-->
//         <ul class="footermenu pt-5">
//           <li><a class="footmenu" href="#">HOME</a></li>
//           <li><a class="footmenu" href="#">ABOUT US</a></li>
//           <li><a class="footmenu" href="#">SERVICES</a></li>
//           <li><a class="footmenu" href="#">PROJECTS</a></li>
//           <li><a class="footmenu" href="#">CLIENTS</a></li>
//           <li><a class="footmenu" href="#">CAREERS</a></li>
//           <li><a class="footmenu" href="#">CONTACT</a></li>
//         </ul>
//         <div class="row d-flex justify-content-center mb-3">
//           <div class="col-lg-8 footermenu1">
//             <address class="m-0 address"><i class="fa-solid fa-location-pin"></i> 1418 Mariani Ct. Suite 160 Tracy,
//               Ca 95376</address>
//             <a href="tel:2094630707" class="tele"><i class="fa-solid fa-phone text-white"></i> (209) 463-0707</a>
//             <a href="mailto:bcmbob1@aol.com" class="mess"><i class="fa-solid fa-message"></i> bcmbob1@aol.com</a>
//           </div>
//         </div>
//         <div class="text-center mb-1">
//           <a href="" class="text-white me-4">
//             <i class="fab fa-facebook-f iconfooter"></i>
//           </a>
//           <a href="" class="text-white me-4">
//             <i class="fab fa-twitter iconfooter"></i>
//           </a>
//           <a href="" class="text-white me-4">
//             <i class="fab fa-youtube iconfooter"></i>
//           </a>
//         </div>
//       </div>
//       <!-- Copyright -->
//       <div class="text-center pb-4 pt-3">
//         © 2018 BCM Services & Engineering. All rights reserved
//         <!-- <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a> -->
//       </div>
//       <!-- Copyright -->
//     </footer>
//     <!-- Footer -->

//   </div>
//   <!-- End of .container -->
//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
//     integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
//     crossorigin="anonymous"></script>
// </body>

// </html>`,
//         csscode: `@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&family=Lexend+Deca:wght@100;200;300;400;500;600;700&family=Montserrat:wght@400;700&family=Mulish:wght@300&family=Poppins:wght@300;400;600&family=Urbanist:wght@300;400;600;700;800;900&display=swap');

// html {
//     font-size: 100%;
// }

// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: "Oswald", sans-serif;
// }

// :root {
//     --bs-dark-color: #1a1d20;
// }

// p {
//     margin: 0;
//     font-weight: 400;
//     font-size: 1rem;
//     color: var(--bs-dark-color);
//     letter-spacing: 0.07rem;
//     line-height: 1.55rem;
//     font-synthesis: none;
//     text-rendering: optimizeLegibility;
// }

// a {
//     text-decoration: none;
// }

// button,
// a {
//     font-size: 1.15rem;
//     letter-spacing: 0.03rem;
//     word-spacing: .1rem;
// }

// .container {
//     max-width: 1164px;
// }

// /* styling section */

// /* topbar */

// .strip {
//     display: flex;
//     width: 100%;
//     height: 40px;
// }

// .white-section {
//     width: 30%;
//     background-color: white;
//     clip-path: polygon(0 0, 100% 0, 0 100%);
// }

// .blue-section {
//     width: 70%;
//     background-color: #154c79;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     padding-left: 10px;
// }

// #header {
//     background-image: url(images/bg-header.png);
//     position: sticky;
//     z-index: 1000;
//     overflow: hidden;
// }


// .siteinfo {
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     justify-content: start;
//     background: #1a6280;
//     gap: 52px;
//     padding: 5px 0;
//     padding-left: 190px;
//     padding-right: 9999px;
//     margin-right: -9999px;
//     position: relative;
// }

// .siteinfo:before {
//     position: absolute;
//     right: 100%;
//     top: 0;
//     background: url(images/diagonal.png) no-repeat 100% 0;
//     width: 40px;
//     height: 100%;
//     content: '';
// }

// .address {
//     text-align: start;
//     color: white;
//     font-family: "Oswald", sans-serif;
//     font-size: 14px;
//     margin-right: 10px;
// }

// .tele {
//     text-align: start;
//     color: white;
//     font-family: "Oswald", sans-serif;
//     font-size: 14px;
// }

// .mess {
//     text-align: start;
//     color: white;
//     font-family: "Oswald", sans-serif;
//     font-size: 14px;

// }

// .icon-spacing {
//     margin-right: 10px;
// }

// /* navbar styling  */

// .mainlogo {
//     width: 250px;
// }

// .navbar {
//     position: sticky;
//     z-index: 1000;
//     background-image: url(images/bg-header.png);
// }

// .navbar-nav .nav-link {
//     color: #1a6280;
//     font-size: 16px;
//     padding-bottom: 52px;
//     margin-bottom: -52px;
// }

// .navbar-nav .nav-link.active {
//     color: #e51313;
// }

// .button-spacing {
//     margin-right: 50px;
// }

// .nav-link {
//     position: relative;
// }

// .navbarcontainer {
//     padding: 0;
// }

// .navbar-nav .nav-link.active:after {
//     content: '';
//     position: absolute;
//     left: 50%;
//     bottom: 0;
//     transition: all 0.2s ease;
//     pointer-events: none;
//     transform: translateX(-50%);
//     border: 8px solid transparent;
//     border-bottom-color: white;
// }

// .navbar-nav .nav-link:hover {
//     color: #e51313;
// }

// .nav-link:hover::after {
//     opacity: 1;
// }

// .stickybutton {
//     padding: 7px 30px;
//     background-color: #e51313;
//     color: #fff;
//     font-size: 1rem;
// }

// /* banner styling */

// .banner {
//     position: relative;
//     width: 100%;
//     height: 700px;
//     overflow: hidden;
// }

// .banner-image {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     top: 0;
//     left: 0;
// }

// .overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     z-index: 1;
//     bottom: 0;
//     right: 0;
// }

// .banner-text {
//     position: absolute;
//     z-index: 2;
//     top: 50%;
//     transform: translateY(-50%);
//     padding: 1.4rem;
//     box-sizing: border-box;
//     color: white;
//     left: 0;
//     right: 0;
// }

// .banner-text h1 {
//     font-size: 3.5rem;
//     font-weight: 900;
//     margin: 0;
// }

// .banner-text .subtext {
//     font-size: 6.6rem;
//     line-height: 1;
//     margin: 0.6rem 0;
// }

// .banner-text p {
//     line-height: 1.5;
//     font-size: 1.2rem;
//     max-width: 560px;
//     margin: 0;
//     color: white;
// }

// .iconbanner {
//     vertical-align: middle;
//     background: white;
//     color: red;
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     margin-left: 5px;
// }

// /* services section styling */

// .carousel-inner {
//     padding: 80px 0;
//     margin: -80px 0;
// }

// .carousel-item img {}

// .carousel-control-prev-icon,
// .carousel-control-next-icon {
//     background-color: rgba(0, 0, 0, 0.5);
//     border-radius: 50%;
// }

// .custom-blue {
//     color: #4273a7;
//     font-size: 50px;
// }

// .p-intro {
//     font-size: 22px;
//     color: #1a6280;
// }

// .wel-int {
//     color: #4bbed1;
// }

// .p-intro2 {
//     font-size: 16px;
// }

// .bg-color {
//     background-color: #081f29;
// }

// .hero-video--section {
//     width: 100%;
//     max-width: 50rem;
// }

// .carosel {
//     justify-content: center;
// }

// .image-container {
//     position: relative;
// }

// .hovereffect {
//     position: absolute;
//     background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 99%, rgba(0, 0, 0, 0.65) 100%);
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     display: flex;
//     justify-content: end;
//     align-items: center;
//     flex-direction: column;
//     padding-bottom: 20px;
// }

// .hovereffect:hover {
//     padding-bottom: 50px;
//     background-image: -moz-linear-gradient(-150deg, rgba(229, 19, 19, 0.8) 0%, rgba(248, 89, 89, 0.8) 100%);
//     background-image: -webkit-linear-gradient(-150deg, rgba(229, 19, 19, 0.8) 0%, rgba(248, 89, 89, 0.8) 100%);
//     background-image: -ms-linear-gradient(-150deg, rgba(229, 19, 19, 0.8) 0%, rgba(248, 89, 89, 0.8) 100%);
//     box-shadow: -9.456px 7.388px 21px 0px rgba(0, 0, 0, 0.3);
//     transition: 0.5s;
// }

// .hovereffect>i {
//     font-size: 100px;
//     color: #fff;
//     margin-bottom: 10px;
//     display: none;
// }

// .hovereffect:hover>i {
//     display: block;
// }

// .hovereffect h2 {
//     font-size: 20px;
//     line-height: 1.4;
//     color: #fff;
// }

// .image-container h4 {
//     font-size: 20px;
//     line-height: 1.4;
//     color: #fff;
//     display: none;
// }

// /* video section styling */

// .first-column {
//     display: flex;
//     position: relative;
//     z-index: 2;
//     align-items: center;
//     flex-direction: column;
//     justify-content: center;
// }

// .secondban {
//     background-color: #e5ebed;
//     padding-top: 6.5rem;
//     padding-bottom: 6.5rem;
// }

// .second-column .image-wrapper {
//     position: relative;
// }

// .left-aligned {
//     position: relative;
//     top: 40%;
//     left: -14%;
//     z-index: 1;
// }

// .centered {
//     position: relative;
//     left: -125px;
// }

// .centered-text {
//     padding-left: 10rem;
// }

// .wrapper {
//     position: relative;
//     overflow-y: hidden;
// }

// .buttonhero {
//     display: flex;
//     align-items: center;
//     position: absolute;
//     right: -60px;
//     bottom: 10px;
//     background-color: #fff;
//     border: 1px solid #154c79;
//     color: #1a6280;
//     padding: 20px 22px;
//     text-align: center;
//     text-decoration: none;
//     font-size: 16px;
// }

// .buttonhero:hover {
//     transform: scale(1.1);
// }

// .iconhero {
//     background: #154c79;
//     color: #fff;
//     width: 20px;
//     height: 20px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 50%;
//     margin-left: 10px;
// }

// .modal-body video {
//     width: 100%;
//     height: auto;
// }

// .modal-body {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .first-column::after {
//     content: '';
//     position: absolute;
//     background-image: url("images/car.png");
//     background-position: center;
//     top: 50px;
//     right: -220px;
//     width: 235px;
//     height: 125px;
// }

// .innerarea img {
//     position: absolute;
//     top: 50%;
//     left: 30%;
//     transform: translate(-50%, -50%);
//     width: 500px;
//     height: auto;
//     font-size: 8rem;
//     z-index: 2;
// }

// .innerarea .imgcar {
//     position: absolute;
//     top: 45%;
//     left: 53%;
//     width: 200px;
//     z-index: 1;
// }

// .innerarea .sidetext {
//     position: absolute;
//     top: 45%;
//     left: 70%;
//     width: 250px;
//     z-index: 1;
// }

// .innerarea p {
//     max-width: 380px;
//     position: absolute;
//     top: 70%;
//     left: 55%;
// }

// .imgtext30 .image-wrapper {
//     text-align: center;
//     position: relative;
// }

// .imgtext30 .image-wrapper img {
//     display: inline-block;
//     left: 100px;
//     margin-top: -30px;
// }

// /* testimonials styling */

// .testi {
//     font-size: 21px;
//     color: #4273a7;
// }

// .testim {
//     padding-top: 20%;
// }

// .testsub {
//     font-size: 42px;
//     color: #154c79;
// }

// .testimonial {
//     position: relative;
//     text-align: center;
//     padding-top: 2%;
// }

// .testimonial img {
//     display: inline-block;
//     margin: 0 auto;
//     padding-top: 20px;
//     padding-bottom: 20px;
// }

// .testimonial p {
//     font-size: 17px;
//     color: #8b8b8b;
//     font-style: italic;

// }

// /* projects section styling  */

// .image-containergrid {
//     position: relative;

// }

// .gridhovereffect {
//     position: absolute;
//     background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 99%, rgba(0, 0, 0, 0.65) 100%);
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     display: flex;
//     justify-content: end;
//     align-items: center;
//     flex-direction: column;
//     padding-bottom: 20px;
// }

// .image-containergrid:hover .gridhovereffect {
//     padding-bottom: 10px;
//     background-image: -moz-linear-gradient(-150deg, rgba(229, 19, 19, 0.8) 0%, rgba(248, 89, 89, 0.8) 100%);
//     background-image: -webkit-linear-gradient(-150deg, rgba(229, 19, 19, 0.8) 0%, rgba(248, 89, 89, 0.8) 100%);
//     background-image: -ms-linear-gradient(-150deg, rgba(229, 19, 19, 0.8) 0%, rgba(248, 89, 89, 0.8) 100%);
//     box-shadow: -9.456px 7.388px 21px 0px rgba(0, 0, 0, 0.3);
//     transition: 0.5s;
// }

// .gridhovereffect>h3 {
//     font-size: 26px;
//     color: white;
//     display: none;
//     display: flex;
//     align-items: center;
//     line-height: 1.4;
//     color: #fff;
//     white-space: nowrap;
// }

// .gridhovereffect:hover>h3 {
//     display: flex;
// }

// .gridhovereffect h3 {
//     display: flex;
//     font-size: 26px;
//     display: none;
//     line-height: 1.4;
//     color: #fff;
// }

// .icon-spacinggrid {
//     margin-left: 220px;
//     background: #fff;
//     color: red;
//     line-height: normal;
//     width: 40px;
//     height: 40px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 50%;
// }

// .gridcontainer {
//     padding-bottom: 30px;
//     margin-bottom: 30px;
// }

// .containgrid {
//     padding-bottom: 30px;
// }

// .icon {
//     background: #fff;
//     color: red;
//     line-height: normal;
//     width: 40px;
//     height: 40px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 50%;
//     margin-right: 10px;
// }

// .stronggrid {
//     font-size: 21px;
//     color: #4bbed1;
//     padding-top: 70px;
// }

// .gridproj h2 {
//     font-size: 60px;
//     color: #4bbed1;
//     padding-top: 13px;
//     padding-bottom: 30px;
// }

// .grid-section {
//     padding-bottom: 80px;
// }

// .grid-section .container {
//     max-width: 1375px;
// }

// .gridcont {
//     max-width: 1375px;
//     padding: 20px 15px;
// }

// .gridcont .row {
//     margin: 0 -5px;
// }

// .gridcont .col-12 {
//     padding: 0 5px !important;
// }

// .gridcont .image-containergrid {
//     margin-bottom: 10px;
// }

// .overlay1 {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.3);
//     z-index: 1;
// }

// /* map section styling  */

// .img-fluid {
//     max-width: 100%;
//     padding-top: 20px;
//     height: auto;
// }


// .map-container {
//     height: 350px;

// }

// .map-container iframe {
//     width: 100%;
//     height: 100%;
//     border: 0;
// }

// /* footer section styling */

// .footersection {
//     background-image: -moz-linear-gradient(167deg, rgb(75, 190, 209) 0%, rgb(0, 81, 111) 100%);
//     background-image: -webkit-linear-gradient(167deg, rgb(75, 190, 209) 0%, rgb(0, 81, 111) 100%);
//     background-image: -ms-linear-gradient(167deg, rgb(75, 190, 209) 0%, rgb(0, 81, 111) 100%);
//     background-image: linear-gradient(167deg, rgb(75, 190, 209) 0%, rgb(0, 81, 111) 100%);
//     position: relative;
//     width: 100%;
//     z-index: 106;
// }

// .footermenu {
//     list-style: none;
//     display: flex;
//     height: 100%;
//     width: 100%;
//     justify-content: center;
//     gap: 22px;
//     padding: .5rem 0;
// }

// .footmenu {
//     padding: 20px 0;
//     font-size: 1.1rem;
//     color: #fff;
//     text-decoration: none;
//     text-transform: uppercase;
//     transition: color 0.3s ease;
// }

// .footmenu:hover {
//     color: #ddd;
// }

// .footermenu1 {
//     list-style: none;
//     display: flex;
//     height: 100%;
//     width: 100%;
//     justify-content: center;
//     gap: 22px;
//     padding: .5rem 0;
// }


// .iconfooter {
//     background: #fff;
//     color: #1a6280;
//     line-height: 40px;
//     width: 40px;
//     height: 40px;
//     text-align: center;
//     border-radius: 50%;
//     font-size: 20px;
//     display: inline-block;
//     vertical-align: middle;
// }

// /* media queries section styling */

// @media (min-width: 1300px) {

//     .overlay1 {
//         display: none;
//     }

// }


// @media (max-width: 1300px) {

//     .gridhovereffect {
//         position: absolute;
//         background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 99%, rgba(0, 0, 0, 0.65) 100%);
//         left: 0;
//         right: 0;
//         top: 0;
//         bottom: 0;
//         display: flex;
//         justify-content: end;
//         align-items: center;
//         flex-direction: column;
//         padding-bottom: 20px;
//     }

//     .image-containergrid:hover .gridhovereffect {
//         padding-bottom: 10px;
//         background-image: -moz-linear-gradient(-150deg, rgba(229, 19, 19, 0.8) 0%, rgba(248, 89, 89, 0.8) 100%);
//         background-image: -webkit-linear-gradient(-150deg, rgba(229, 19, 19, 0.8) 0%, rgba(248, 89, 89, 0.8) 100%);
//         background-image: -ms-linear-gradient(-150deg, rgba(229, 19, 19, 0.8) 0%, rgba(248, 89, 89, 0.8) 100%);
//         box-shadow: -9.456px 7.388px 21px 0px rgba(0, 0, 0, 0.3);
//         transition: 0.5s;
//     }

//     .gridhovereffect>h3 {
//         font-size: 16px;
//         color: white;
//         display: flex;
//         align-items: center;
//         line-height: 1.4;
//         color: #fff;
//         white-space: nowrap;
//     }

//     .gridhovereffect:hover>h3 {
//         display: flex;
//     }

//     .gridhovereffect h3 {
//         display: flex;
//         font-size: 1.4rem;
//         line-height: 1.4;
//         color: #fff;
//     }

//     .image-containergrid {
//         position: relative;
//     }

//     .icon-spacinggrid {
//         display: none;
//     }

//     .icon {
//         display: none;
//     }

//     /* carousel grid */


//     .hovereffect {
//         position: absolute;
//         background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 99%, rgba(0, 0, 0, 0.65) 100%);
//         left: 0;
//         right: 0;
//         top: 0;
//         bottom: 0;
//         display: flex;
//         justify-content: end;
//         align-items: center;
//         flex-direction: column;
//         padding-bottom: 20px;

//     }

//     image-container:hover .hovereffect {
//         padding-bottom: 10px;
//         background-image: -moz-linear-gradient(-150deg, rgba(229, 19, 19, 0.8) 0%, rgba(248, 89, 89, 0.8) 100%);
//         background-image: -webkit-linear-gradient(-150deg, rgba(229, 19, 19, 0.8) 0%, rgba(248, 89, 89, 0.8) 100%);
//         background-image: -ms-linear-gradient(-150deg, rgba(229, 19, 19, 0.8) 0%, rgba(248, 89, 89, 0.8) 100%);
//         box-shadow: -9.456px 7.388px 21px 0px rgba(0, 0, 0, 0.3);
//         transition: 0.5s;
//     }

//     .hovereffect i {
//         display: none;
//     }

//     .hovereffect>h2 {
//         font-size: 26px;
//         color: white;
//         display: flex;
//         align-items: center;
//         line-height: 1.4;
//         color: #fff;
//         white-space: nowrap;
//     }

//     .hovereffect:hover>h2 {
//         display: flex;
//     }

//     .hovereffect h2 {
//         display: flex;
//         font-size: 1.4rem;
//         line-height: 1.4;
//         color: #fff;
//     }

//     .image-container {
//         position: relative;
//     }

// }




// @media (max-width: 1199px) {

//     .gridhovereffect:hover {
//         display: none;
//     }

//     .gridcont .image-container img {
//         height: 280px;
//         width: 100%;
//         object-fit: cover;
//     }

//     .hovereffect:hover {
//         display: none;
//     }

//     .navbar-nav .nav-link.active:after {
//         display: none;
//     }

//     .navbarcontainer {
//         background-image: url('images/bg-header.png');
//     }

//     .navbar-collapse {
//         background-color: #fff;
//     }

//     .navbar-nav {
//         flex-direction: column;
//         align-items: center;
//     }

//     .first-column::after {
//         display: none;
//     }

//     #header {
//         background-image: url(images/bg-header.png);
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100%;
//         z-index: 1000;
//     }

//     .sticky-button-container {
//         position: fixed;
//         bottom: 0;
//         left: 0;
//         width: 100%;
//         padding: 10px 0;
//         display: flex !important;
//         justify-content: center;
//         align-items: center;
//         z-index: 1000;
//         background: #e51313;
//     }

//     .stickybutton {
//         background-color: #e51313;
//         color: white;
//         border: none;
//         padding: 15px 30px;
//         font-size: 16px;
//         border-radius: 50px;
//         cursor: pointer;
//         width: 100%;
//         max-width: 300px;
//         text-align: center;
//         box-sizing: border-box;
//     }

//     .footersection {
//         padding-bottom: 80px;
//     }




// }


// /* Responsive adjustments */
// @media (max-width: 992px) {
//     .banner-text {
//         left: 8%;
//         /* Adjusted for tablets */
//         padding: 1rem;
//     }

//     .banner-text h1 {
//         font-size: 3rem;
//     }

//     .banner-text .subtext {
//         font-size: 4rem;
//     }

//     .banner-text p {
//         font-size: 1em;
//     }

//     .banner {
//         height: 600px;
//     }

//     .topbar {
//         display: none;
//     }

//     .left-aligned {
//         display: none;
//     }

//     .centered-text {
//         text-align: center;
//         width: fit-content;
//         position: relative;
//         transform: translateX(-20%);
//     }

//     .custom-blue {
//         color: #4273a7;
//         font-size: 30px;
//     }



//     /* for grid */





//     .secondban {
//         padding-top: 3rem;
//         padding-bottom: 3rem;
//     }

//     .first-column,
//     .second-column {
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         width: 100%;
//         text-align: center;
//     }

//     .first-column img,
//     .centered-text {
//         margin: 0 auto;
//     }

//     .imgtext30 .image-wrapper img {
//         display: inline-block;
//         left: 100px;
//         margin: 0 auto;
//         margin-top: -30px;
//     }

//     .first-column {
//         margin-bottom: 2rem;
//     }

//     .buttonhero {
//         position: static;
//         margin-top: 1rem;
//         right: 0;
//         left: 0;
//     }

//     .centered {
//         position: static;
//         left: 0;
//     }

//     .centered-text {
//         padding-top: 1rem;
//     }





// }


// @media (max-width: 768px) {
//     .banner-text {
//         left: 5%;

//     }

//     .banner-text h1 {
//         font-size: 2.5rem;
//     }

//     .banner-text .subtext {
//         font-size: 3rem;
//     }

//     .banner-text p {
//         font-size: 0.9em;
//     }

//     .banner {
//         height: 500px;
//     }


//     .footmenu {
//         display: none;
//     }

//     .footermenu {
//         display: none;
//     }

//     .footersection {
//         padding-top: 5px;
//     }

//     .navbar-nav .nav-link.active:after {
//         display: none;
//     }
// }

// @media (max-width: 576px) {
//     .banner-text {
//         left: 2%;
//     }

//     .banner-text h1 {
//         font-size: 2rem;
//     }

//     .banner-text .subtext {
//         font-size: 2.5rem;
//     }

//     .banner-text p {
//         font-size: 0.9em;
//     }

//     .banner {
//         height: 400px;
//     }
// }

// .carousel-indicators {
//     bottom: 80px;
// }

// .carousel-indicators [data-bs-target] {
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     background: #154c79;
//     padding: 0;
//     line-height: 10px;
//     border: 0;
// }

// .carousel-indicators .active {
//     background: #e51313;
// }`,
//         jscode: ``

//     },
//     {
//         w_no: 3,
//         w_name: "AJ Painting at ESP at INSPIRE",
//         w_img: AJ,
//         htmlcode: `<!doctype html>
// <html lang="en">

// <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Bootstrap demo</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
//         integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
//         rel="stylesheet">
//     <link rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />

//     <link rel="stylesheet" href="./assets/css/all.css">
// </head>

// <body>

//     <div class="wrapper ">

//         <header id="header">
//             <div class="topbar pb-3 pt-2 d-flex justify-content-end align-content-center bg-transparent">
//                 <div class="container d-flex justify-content-end">
//                     <a href="tel:510-914-3929" class="tele">
//                         <i class="icon-phonetop icon-spacing"></i><span
//                             class="d-none d-sm-inline">510-914-3929</span>
//                     </a>
//                     <a href="mailto:ajpaintinginc@gmail.com " class="mess">
//                         <i class="icon-mailtop icon-spacing"></i><span
//                             class="d-none d-sm-inline">ajpaintinginc@gmail.com</span>
//                     </a>
//                     <a href="#">
//                         <i class="fa-brands fa-facebook faceicon" style="color: #0f3857;"></i>
//                     </a>
//                     <a href="#">
//                         <i class="fa-brands fa-yelp twiticon"></i>
//                     </a>
//                 </div>
//             </div>
//             <div class="container">
//                 <nav class="navbar navbar-expand-xl">
//                     <a href="#" class="navbar-brand">
//                         <img src="./assets/images/logo.jpg" class="logo" alt="Logo">
//                     </a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//                         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarNav">
//                         <ul class="navbar-nav mx-auto">
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">About US</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Services</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Our Team</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Testimonials</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Contact Us</a>
//                             </li>
//                             <div class="lisence d-flex align-content-center">
//                                 <i class="icon-lisence"></i>
//                                 <div class="text-container">
//                                     <span>License # 759175</span>
//                                     <span>Lead Certified Since 2002</span>
//                                 </div>
//                             </div>
//                         </ul>
//                     </div>
//                 </nav>
//             </div>
//         </header>

//         <div class="banner">
//             <div class="bannerblock">
//                 <div class="swiper-container">
//                     <div class="swiper-wrapper">
//                         <!-- Slide 1 -->
//                         <div class="swiper-slide">
//                             <img src="./assets/images/banner1.jpg" alt="Banner 1" />
//                             <div class="slide-text">
//                                 <h1>Its All In The</h1>
//                                 <h2>preparation</h2>
//                                 <span>We offer one of the best warranties on all <br>
//                                     original work done by A&J Painting. </span>
//                                 <button class="d-block">Get a Free Quote</button>
//                             </div>
//                         </div>
//                         <!-- Slide 2 -->
//                         <div class="swiper-slide">
//                             <img src="./assets/images/banner1.jpg" alt="Banner 2" />
//                             <div class="slide-text">
//                                 <h1>Its All In The</h1>
//                                 <h2>preparation</h2>
//                                 <span>We offer one of the best warranties on all <br>
//                                     original work done by A&J Painting. </span>
//                                 <butaton class="d-block">Get a Free Quote</butaton>
//                             </div>
//                         </div>
//                         <!-- Slide 3 -->
//                         <div class="swiper-slide">
//                             <img src="./assets/images/banner1.jpg" alt="Banner 3" />
//                             <div class="slide-text">
//                                 <h1>Its All In The</h1>
//                                 <h2>preparation</h2>
//                                 <span>We offer one of the best warranties on all <br>
//                                     original work done by A&J Painting. </span>
//                                 <button class="d-block">Get a Free Quote</button>
//                             </div>
//                         </div>
//                         <!-- Slide 4 -->
//                         <div class="swiper-slide">
//                             <img src="./assets/images/banner1.jpg" alt="Banner 4" />
//                             <div class="slide-text">
//                                 <h2>Its All In The</h2>
//                                 <p>preparation</p>
//                                 <span>We offer one of the best warranties on all <br>
//                                     original work done by A&J Painting. </span>
//                                 <button class="d-block">Get a Free Quote</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="swiper-pagination"></div>
//                 </div>
//             </div>
//         </div>

//         <main>

//             <!-- About US -->
//             <section class="block aboutblock">
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-lg-6">
//                             <h2 class="abouth26">26+</h2>
//                             <h3>YEARS</h3>
//                             <span>Delivering Quality Since 1988</span>
//                             <strong class="d-block">We offer one of the best warranties <br>
//                                 on all original work done <br>
//                                 by A&J Painting. </strong>
//                             <p>We have over 26 years of experience tending to your every painting need. Alan, the
//                                 owner/operator
//                                 first started out in the industry in 1988 working for a production painting
//                                 company. Seven years later, he decided to lay the ground work to open his own company.
//                                 Then
//                                 he
//                                 worked for a few custom home painting companies to gain experience in the custom
//                                 painting
//                                 industry. In 1999, Alan passed the state
//                                 contractor’s license exam. This was the milestone for what
//                                 is now A&J Painting Inc.</p>

//                             <button>READ MORE</button>
//                         </div>
//                         <div class="col-lg-6">
//                             <div class="aboutImage">
//                                 <img src="./assets/images/aboutpic.png" alt="">
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-lg-12 pt-3">
//                         <div class="mission">
//                             <h4>Our Mission</h4>
//                             <p>Although we are a small business, we take great pride in the fact that we work at a
//                                 production pace while still
//                                 maintaining the personalized, quality, style, and cleanliness of a custom paint job. You
//                                 can feel comfort in the
//                                 fact that we are licensed, bonded and insured for your protection. Our company is built
//                                 on
//                                 teamwork and attention to detail. We are family owned and operated which allows us to
//                                 maintain the quality customer service that you need.</p>
//                             <button>READ MORE</button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <!-- services -->
//             <section class="block servicesblock">
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-lg-4">
//                             <div class="d-block flex-column g-3 headingservices">
//                                 <span class="servicesubtitle">It’s all in the preparation!</span>
//                                 <h2>Services</h2>
//                             </div>
//                         </div>
//                         <div class="col-lg-8 d-flex align-items-center m-0">
//                             <p>We offer one of the best warranties on all original work done by A&J Painting. We
//                                 acknowledge
//                                 that we are not the most economical painting company in the industry. </p>
//                         </div>
//                     </div>
//                     <div class="col-lg-12">
//                         <div class="row gridrowimages mt-5">
//                             <div class="col-lg-4 col-md-6 image-container">
//                                 <div class="image-wrapper">
//                                     <img src="./assets/images/serv6.png" class="img-fluid" alt="Image 1">
//                                     <div class="image-text">
//                                         <span>Residential and Commercial</span>
//                                         <div class="description">High-quality services for homes and businesses
//                                             High-quality services for homes and businesses</div>
//                                         <a href="#" class="text-decoration-none"><i
//                                                 class="fa-solid fa-chevron-right icon mt-3 mb-2 nexticon"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-lg-4 col-md-6 image-container">
//                                 <div class="image-wrapper">
//                                     <img src="./assets/images/serv1.png" class="img-fluid" alt="Image 2">
//                                     <div class="image-text">
//                                         <span>Deck and Shingle Rejuvenation</span>
//                                         <div class="description">Renew your deck and shingles with our expertise
//                                             High-quality services for homes and businesses</div>
//                                         <a href="#" class="text-decoration-none"><i
//                                                 class="fa-solid fa-chevron-right icon mt-3 mb-2 nexticon"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-lg-4 col-md-6 image-container">
//                                 <div class="image-wrapper">
//                                     <img src="./assets/images/serv2.png" class="img-fluid" alt="Image 2">
//                                     <div class="image-text">
//                                         <span>Deck and Shingle Rejuvenation</span>
//                                         <div class="description">Renew your deck and shingles with our expertise
//                                             High-quality services for homes and businesses</div>
//                                         <a href="#" class="text-decoration-none"><i
//                                                 class="fa-solid fa-chevron-right icon mt-3 mb-2 nexticon"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-lg-4 col-md-6 image-container">
//                                 <div class="image-wrapper">
//                                     <img src="./assets/images/serv3.png" class="img-fluid" alt="Image 2">
//                                     <div class="image-text">
//                                         <span>Deck and Shingle Rejuvenation</span>
//                                         <div class="description">Renew your deck and shingles with our expertise
//                                             High-quality services for homes and businesses</div>
//                                         <a href="#" class="text-decoration-none"><i
//                                                 class="fa-solid fa-chevron-right icon mt-3 mb-2 nexticon"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-lg-4 col-md-6 image-container">
//                                 <div class="image-wrapper">
//                                     <img src="./assets/images/serv4.png" class="img-fluid" alt="Image 2">
//                                     <div class="image-text">
//                                         <span>Deck and Shingle Rejuvenation</span>
//                                         <div class="description">Renew your deck and shingles with our expertise
//                                             High-quality services for homes and businesses</div>
//                                         <a href="#" class="text-decoration-none"><i
//                                                 class="fa-solid fa-chevron-right icon mt-3 mb-2 nexticon"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-lg-4 col-md-6 image-container">
//                                 <div class="image-wrapper">
//                                     <img src="./assets/images/serv5.png" class="img-fluid" alt="Image 2">
//                                     <div class="image-text">
//                                         <span>Deck and Shingle Rejuvenation</span>
//                                         <div class="description">Renew your deck and shingles with our expertise
//                                             High-quality services for homes and businesses</div>
//                                         <a href="#" class="text-decoration-none"><i
//                                                 class="fa-solid fa-chevron-right icon mt-3 mb-2 nexticon"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <!-- what we do -->
//             <section class="block whatblock">
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-lg-6"></div>
//                         <div class="col-lg-6">
//                             <h2>What We Do</h2>
//                             <p>We offer one of the best warranties on all original work done by A&J Painting. We
//                                 acknowledge that we are not the most economical painting company in the industry.
//                                 However, we will not sacrifice the attention to detail and unwillingness to cut corners
//                                 in the painting process.</p>
//                             <div class="row">
//                                 <div class="col-lg-6 mb-4">
//                                     <div class="inner d-flex justify-content-start align-content-center">
//                                         <span><i class="icon-house" style="color: #80c0d1;  font-size: 70px;"></i></span>
//                                         <h3 class="text-center">Interior & Exterior <br> Painting</h3>
//                                     </div>
//                                 </div>
//                                 <div class="col-lg-6 mb-4">
//                                     <div class="inner d-flex justify-content-start align-content-center">
//                                         <span><img src="./assets/images/icon1.png" alt=""></span>
//                                         <h3 class="text-center">Interior & Exterior <br> Painting</h3>
//                                     </div>
//                                 </div>
//                                 <div class="col-lg-6 mb-4">
//                                     <div class="inner d-flex justify-content-start align-content-center">
//                                         <span><i class="icon-wall" style="font-size: 60px; color: #80c0d1;"></i></span>
//                                         <h3 class="text-center">Interior & Exterior <br> Painting</h3>
//                                     </div>
//                                 </div>
//                                 <div class="col-lg-6 mb-4">
//                                     <div class="inner d-flex justify-content-start align-content-center">
//                                         <span><i class="icon-floor" style="font-size: 60px; color: #80c0d1;"></i></span>
//                                         <h3 class="text-center">Interior & Exterior <br> Painting</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <!-- testimonials -->
//             <section class="block testimonialsblock">
//                 <div class="container d-flex flex-column justify-content-center align-items-center text-center">
//                     <p>What People Are Saying</p>
//                     <h2>Testimonials</h2>
//                     <i class="fa-solid fa-quote-left doublequote"></i>
//                     <div class="owl-carousel owl-theme pt-3">
//                         <div class="item">
//                             <p>As a general contractor, I have used a lot of subcontractors. I have to say that I am
//                                 impressed by Alan and his crew at A&J Painting. He is beyond knowledgeable when it comes
//                                 to the painting/finishing world. He not only does an amazing job with finishing my
//                                 projects on time and on budget but he manages to make them look perfect. This is an
//                                 amazing quality in a painter! Alan is an artist and he and his crew are a pleasure to
//                                 work with.</p>
//                             <strong>WillIe</strong>
//                         </div>
//                         <div class="item">
//                             <p>As a general contractor, I have used a lot of subcontractors. I have to say that I am
//                                 impressed by Alan and his crew at A&J Painting. He is beyond knowledgeable when it comes
//                                 to the painting/finishing world. He not only does an amazing job with finishing my
//                                 projects on time and on budget but he manages to make them look perfect. This is an
//                                 amazing quality in a painter! Alan is an artist and he and his crew are a pleasure to
//                                 work with.</p>
//                             <strong>WillIe</strong>
//                         </div>
//                         <div class="item">
//                             <p>As a general contractor, I have used a lot of subcontractors. I have to say that I am
//                                 impressed by Alan and his crew at A&J Painting. He is beyond knowledgeable when it comes
//                                 to the painting/finishing world. He not only does an amazing job with finishing my
//                                 projects on time and on budget but he manages to make them look perfect. This is an
//                                 amazing quality in a painter! Alan is an artist and he and his crew are a pleasure to
//                                 work with.</p>
//                             <strong>WillIe</strong>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <!-- formsection -->
//             <section class="block formblock">
//                 <div class="container">
//                     <div class="col-lg-12">
//                         <div class="form ">
//                             <div class="col-lg-8">
//                                 <span>We seek to create long-term relationships built on results.</span>
//                                 <h2>Ready to Work with Us?</h2>
//                                 <div class="form-container">
//                                     <form>
//                                         <div class="row g-3">
//                                             <div class="col-md-6">
//                                                 <input type="email" id="Phone" name="Phone" class="form-control"
//                                                     placeholder="Phone">
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <input type="email" id="Email" name="Email" class="form-control"
//                                                     placeholder="Email">
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <input type="text" id="Phone" name="Phone" class="form-control"
//                                                     placeholder="Phone">
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <input type="text" id="Company" name="Company" class="form-control"
//                                                     placeholder="Company">
//                                             </div>
//                                             <div class="col-12">
//                                                 <textarea id="comments" name="comments" class="form-control"
//                                                     placeholder="Message" rows="4"></textarea>
//                                             </div>
//                                             <div>
//                                                 <button class="formbutton">SUBMIT <i
//                                                         class="icon-submit"></i></button>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                             <div class="col-lg-4">
//                                 <div class="d-flex flex-column gap-4 socialdata">
//                                     <div class="formcontacts d-flex align-content-center">
//                                         <p><i class="icon-location" style="font-size: 35px; color: #fbb030;"></i></p>
//                                         <div class="text-container">
//                                             <strong class="mb-2">Find Us</strong>
//                                             <span>5 Virginia Gardens <br>
//                                                 Berkeley, CA 94702</span>
//                                         </div>
//                                     </div>
//                                     <div class="formcontacts d-flex align-content-center">
//                                         <p><i class="icon-phonecall" style="font-size: 35px; color: #fbb030;"></i></p>
//                                         <div class="text-container">
//                                             <strong class="mb-2">Call Us</strong>
//                                             <span>PHONE: 510-914-3929</span>
//                                         </div>
//                                     </div>
//                                     <div class="formcontacts d-flex align-content-center">
//                                         <p><i class="icon-mail" style="font-size: 22px; color: #fbb030;"></i></p>
//                                         <div class="text-container">
//                                             <strong class="mb-2">Mail At</strong>
//                                             <span>Email: ajpaintinginc@gmail.com </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <!-- map -->
//             <div class=" map-container">
//                 <!-- Google Maps Embed -->
//                 <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1617398.7735461807!2d-124.85532574375!3d37.64962770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f79a4d017c8f5%3A0xe42a3cffd9fed413!2sBroadway%20Sheet%20Metal%20%26%20Manufacturing!5e0!3m2!1sen!2s!4v1725277481403!5m2!1sen!2s"
//                     width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"></iframe>
//             </div>

//         </main>

//         <!--  footer section -->
//         <div class="footerblock">
//             <footer class="container  lastlinecont py-3">
//                 <div
//                     class=" footerlastline d-flex flex-column flex-md-row justify-content-between align-items-start w-100">
//                     <div class="d-flex flex-column align-items-start">
//                         <ul class="links d-flex gap-3 list-unstyled mb-2">
//                             <li><a href="#">Home</a></li>
//                             <li><a href="#">About Us</a></li>
//                             <li><a href="#">Services</a></li>
//                             <li><a href="#">Our Team</a></li>
//                             <li><a href="#">Testimonials</a></li>
//                             <li><a href="#" class="active">Contact Us</a></li>
//                         </ul>
//                         <div class="copyright d-flex flex-wrap align-items-center gap-3">
//                             <p class="mb-0 text-white">© 2019 A&J Painting Inc. All Rights Reserved.</p>
//                         </div>
//                     </div>

//                     <!-- Social Icons -->
//                     <div class="social-icons d-flex flex-column gap-1">
//                         <div class="d-flex justify-content-end gap-3">
//                             <a href="#"><i class="fa-brands fa-facebook faceicon" style="color: lightblue;"></i></a>
//                             <a href="#"> <i class="fa-brands fa-yelp twiticon"><span class="d-none">yelp</span></i></a>
//                         </div>
//                         <span class="text-white">Designed By: ESPInspire</span>
//                     </div>
//                 </div>
//             </footer>
//         </div>

//     </div>




//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
//         integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
//         crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
//         integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
//         crossorigin="anonymous"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
//         integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
//         crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//     <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
//         integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
//         crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//     <script src="./assets/js/main.js"></script>
// </body>

// </html>`,
//         csscode: `@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');

// @import url("../css/style.css");

// body {
//     margin: 0;
//     padding: 0;
//     font-family: "Poppins", sans-serif;
//     background-image: url("../images/body-bg.png");
//     background-repeat: no-repeat;
//     background-size: cover;
// }

// .wrapper {
//     position: relative;
//     overflow: hidden;
// }

// .block {
//     padding: 30px 0;
// }

// .container {
//     max-width: 1164px;
//     margin: 0 auto;
// }

// .wrapper {
//     position: relative;
// }


// h2 {
//     font-size: 40px;
//     font-weight: bold;
// }

// /* Topbar styling */
// .topbar {
//     padding: 10px 0;
//     position: relative;
//     z-index: 20;
// }

// .topbar a {
//     color: black;
//     text-decoration: none;
//     font-family: "Oswald", sans-serif;
//     font-size: 1rem;
//     display: flex;
//     align-items: center;
//     position: relative;
// }

// .icon-spacing {
//     margin-right: 10px;
// }

// .twiticon {
//     background-color: red;
//     height: 25px;
//     width: 25px;
//     border-radius: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: white;
//     font-size: 16px;
// }

// .faceicon {
//     font-size: 25px;
//     cursor: pointer;
//     margin-right: 10px;
//     letter-spacing: normal;
// }

// .topbar a+a::before {
//     content: "";
//     display: inline-block;
//     width: 1px;
//     height: 20px;
//     background-color: black;
//     margin: 0 20px;
// }

// .tele {
//     font-size: 20px;
// }

// .mess {
//     font-weight: 300;
// }

// .tele i,
// .mess i {
//     color: #fbb030;
// }

// .topbar a:last-child::before {
//     content: none;
// }

// /* Header and navbar styling */
// header {
//     width: 100%;
//     height: 60px;
//     position: absolute;
//     z-index: 10;
// }

// .navbar {
//     position: relative;
//     top: -50px;
//     padding: 0;
// }

// .navbar-brand {
//     background: white;
//     padding: 10px;
//     position: relative;
//     z-index: 1;
// }

// .navbar-brand .logo {
//     width: 102px;
//     height: auto;
// }

// .navbar-nav .nav-link.active {
//     color: black;
// }

// .navbar-nav {
//     padding: 7px;
// }

// .navbar-nav .nav-link {
//     margin-right: 15px;
//     color: black;
//     font-size: 17px;
// }

// .navbar-collapse {
//     position: relative;
//     top: 24px;
//     background: #fff;
//     padding: 0 9999px;
//     margin: 0 -9999px;
// }

// .lisence {
//     border-left: 1px solid #000;
//     padding-left: 30px;
// }

// .lisence i {
//     font-size: 35px;
//     margin-right: 10px;
//     padding-top: 10px;
// }

// .text-container {
//     display: flex;
//     flex-direction: column;
// }

// /* Banner */

// .bannerblock {
//     position: relative;
//     top: 0;
//     width: 100%;
//     overflow: hidden;
// }

// .swiper-container {
//     width: 100%;
// }

// .swiper-slide {
//     position: relative;
// }

// .swiper-slide img {
//     width: 100%;
//     height: auto;
// }

// .slide-text {
//     position: absolute;
//     top: 50%;
//     left: 15%;
//     transform: translateY(-50%);
//     max-width: 80%;
//     color: black;
//     z-index: 10;
//     text-align: left;
// }

// .slide-text::after {
//     content: "";
//     background: white;
//     width: 300px;
//     height: 300px;
//     border-radius: 50%;
//     filter: blur(30px);
//     opacity: 0.8;
//     position: absolute;
//     z-index: -1;
//     top: 50%;
//     left: 30%;
//     transform: translate(-50%, -50%);
// }

// .slide-text h1 {
//     font-family: "Great Vibes", cursive;
//     color: black;
//     line-height: 1;
//     margin: 0;
//     font-size: 44px;
//     font-weight: bold;
// }

// .slide-text h2 {
//     margin: 5px 0 0;
//     font-size: 80px;
//     color: black;
//     font-weight: 600;
// }

// .slide-text button {
//     padding: 7px 20px;
//     background-color: #fbb030;
//     color: black;
//     display: block;
//     border: 0;
//     font-size: 16px;
//     margin-top: 20px;
//     border-radius: 5px;
// }

// /* about block */
// .aboutblock {
//     padding: 70px 0;
// }

// .aboutblock .container h2,
// h3 {
//     background-image: url("../images/aboutyearsbg.jpg");
//     background-position: 50% 50%;
//     font-family: "Abril Fatface", serif;
//     background-repeat: no-repeat;
//     -webkit-background-clip: text;
//     background-clip: text;
//     color: transparent;
//     font-size: 150px;
//     line-height: 0.8;
// }

// .aboutblock .container h3 {
//     font-size: 50px;
//     font-family: "Poppins", sans-serif;
// }

// .aboutblock .container span {
//     font-size: 12px;
//     padding-top: 30px;
// }

// .aboutblock .container strong {
//     font-size: 28px;
//     font-weight: 300;
//     padding-top: 15px;
//     font-weight: bold;
//     line-height: 1.3;
// }

// .aboutblock .container p {
//     font-size: 16px;
//     padding-top: 35px;
//     position: relative;
// }

// .aboutblock .container p::after {
//     content: '';
//     position: absolute;
//     width: 40px;
//     height: 2px;
//     background-color: #105aaf;
//     top: 0;
//     margin-top: 15px;
//     left: 0;
// }

// .aboutblock .container button {
//     padding: 7px 20px;
//     background-color: #fbb030;
//     color: black;
//     display: block;
//     border: 0;
//     font-size: 16px;
//     margin-top: 20px;
//     border-radius: 3px;
// }

// .aboutImage img {
//     width: 90%;
//     object-fit: cover;
//     margin-left: 10%;
//     margin-top: 60px;
//     position: relative;
// }

// .aboutImage {
//     position: relative;
// }

// .aboutImage::after {
//     content: '';
//     background-image: url("../images/aboutimageafter.png");
//     background-repeat: no-repeat;
//     background-size: cover;
//     position: absolute;
//     top: 30px;
//     left: 0;
//     width: 100%;
//     height: 70%;
//     z-index: -1;
// }

// .mission {
//     padding-top: 70px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
// }

// .mission h4 {
//     font-size: 40px;
//     font-weight: 300;
//     font-weight: 600;
// }

// .mission p::after {
//     display: none;
// }

// .mission p {
//     padding: 0 50px;
// }

// /* services */

// .servicesblock {
//     padding: 80px;
//     background-image: url("../images/servicesbg.png");
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: 50% 50%;
// }

// .servicesubtitle {
//     font-size: 16px;
// }

// .headingservices {
//     position: relative;
//     padding-right: 20px;
// }

// .headingservices::after {
//     content: '';
//     position: absolute;
//     right: 60px;
//     top: 0;
//     height: 70px;
//     border-right: 2px solid grey;
//     border-radius: 5px;
// }

// .img-fluid {
//     width: 100%;
//     height: auto;
// }

// .image-container {
//     padding: 20px;
//     position: relative;
// }

// .image-wrapper {
//     position: relative;
//     width: 100%;
//     height: 100%;
//     display: block;
//     overflow: hidden;
// }

// .image-wrapper::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-image: -moz-linear-gradient(132deg, rgb(157, 0, 116) 0%, rgb(0, 122, 179) 100%);
//     background-image: -webkit-linear-gradient(132deg, rgb(157, 0, 116) 0%, rgb(0, 122, 179) 100%);
//     background-image: -ms-linear-gradient(132deg, rgb(157, 0, 116) 0%, rgb(0, 122, 179) 100%);
//     opacity: 0;
//     transition: opacity 0.5s ease;
//     z-index: 1;
// }


// .image-wrapper:hover::before {
//     opacity: 0.8;
// }


// .image-text {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     padding: 10px;
//     z-index: 2;
//     background: transparent;
//     color: #fff;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     transition: all 0.3s ease;
// }

// .image-text span{
//     font-size: 22px;
//     font-weight: bold;
// }


// .image-wrapper:hover .image-text {
//     bottom: 50%;
//     transform: translateY(50%);
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
// }

// .image-wrapper:hover .image-text span {
//     font-size: 30px;
//     font-weight: bold;
// }


// .image-wrapper:hover .description {
//     display: block;
//     opacity: 1;
//     margin-top: 10px;
//     transition: opacity 0.3s ease;
// }

// .description {
//     display: none;
//     opacity: 0;
// }


// .nexticon {
//     background-color: white;
//     height: 30px;
//     width: 30px;
//     border-radius: 50%;
//     justify-content: center;
//     align-items: center;
//     display: flex;
//     color: black;
// }

// .image-wrapper:hover .nexticon {
//     background-color: #fbb030;
// }

// /* whatblock */
// .whatblock {
//     padding: 50px 0;
//     background-image: url("../images/whatbg.jpg");
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: 50% 50%;
//     position: relative;
// }

// .whatblock .container .row p {
//     font-size: 16px;
//     padding: 20px 0;
// }

// .whatblock .container .row .inner {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     gap: 18px;
// }

// .whatblock .container .row .inner span {
//     background-color: #fff;
//     height: 100px;
//     width: 100px;
//     border-radius: 50%;
//     padding: 18px;
// }

// .whatblock .container .row .inner h3 {
//     font-size: 20px;
//     color: black;
//     font-weight: 300;
//     font-weight: 600;
//     font-family: "Poppins", sans-serif;
// }

// /* testimonials */
// .testimonialsblock {
//     padding: 80px 0;
//     position: relative;
//     overflow: hidden;
// }

// .testimonialsblock::before {
//     position: absolute;
//     content: '';
//     background-image: url("../images/testimonialbefore.png");
//     background-repeat: no-repeat;
//     background-size: cover;
//     top: 0;
//     left: 0;
//     width: 200px;
//     height: 235px;
//     z-index: -1;
// }

// .testimonialsblock::after {
//     position: absolute;
//     content: '';
//     background-image: url("../images/testimonialafter.png");
//     background-repeat: no-repeat;
//     background-size: cover;
//     bottom: 0;
//     right: 0;
//     width: 200px;
//     height: 150px;
//     z-index: -1;
// }

// .doublequote {
//     font-size: 30px;
//     color: white;
//     background-color: #fbb030;
//     height: 55px;
//     width: 55px;
//     border-radius: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 20px auto;
// }

// .owl-carousel .item p {
//     padding: 0 50px;
// }

// .owl-carousel .item strong {
//     font-size: 20px;
//     display: block;
// }

// .owl-theme .owl-dots .owl-dot span {
//     display: none;
// }

// button.owl-dot {
//     background: none;
//     border: none;
//     padding: 0 !important;
//     width: 20px;
//     height: 5px;
//     margin: 0 5px;
//     border-radius: 10px;
//     background-color: yellow;
//     transition: background-color 0.3s ease;
//     display: inline-block;
//     margin-top: 10px;
// }

// .owl-carousel .owl-nav button.owl-next,
// .owl-carousel .owl-nav button.owl-prev,
// .owl-carousel button.owl-dot {
//     background-color: #ffd700;
// }

// button.owl-dot.active {
//     background-color: orange;
// }

// button.owl-dot:hover {
//     background-color: #ffd700;
// }

// /* form */
// .formblock {
//     padding: 80px 0;
//     background-image: url("../images/formbg.jpg");
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: 50% 50%;
// }

// .form {
//     height: auto;
//     width: auto;
//     background-color: #fff;
//     box-shadow: 1px 1px 8px 8px rgba(0, 0, 0, 0.1);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 0 auto;
//     padding: 40px;
// }

// .formblock .container .form h2 {
//     position: relative;
//     padding-bottom: 13px;
// }

// .formblock .container .form h2::after {
//     content: '';
//     position: absolute;
//     width: 40px;
//     height: 2px;
//     background-color: #105aaf;
//     bottom: 0;
//     margin-top: 15px;
//     left: 0;
//     margin-top: 10px;
// }

// .form-container {
//     margin: 0 auto;
// }

// input,
// textarea {
//     border-radius: 3px;
//     margin-top: 10px;
//     box-shadow: 0px 3px 18px 0px rgba(99, 98, 97, 0.18);
// }

// input {
//     height: 40px;
// }

// .form-control {
//     border-radius: 0;
// }

// .formbutton {
//     padding: 12px 24px;
//     color: black;
//     margin-top: 10px;
//     background-color: #fbb030;
//     display: block;
//     border: 0;
//     border-radius: 5px;
// }

// .formbutton i {
//     margin-left: 10px;
// }

// .formcontacts {
//     padding-left: 30px;
// }

// .formcontacts p {
//     height: 50px;
//     width: 50px;
//     background-color: white;
//     border-radius: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//     margin-right: 10px;
// }

// .formcontacts .text-container span {
//     font-size: 12px;
// }

// /* map */
// .img-fluid {
//     max-width: 100%;
// }

// .map-container {
//     height: 380px;
//     overflow: hidden;
//     position: relative;
//     z-index: 10;
// }

// .map-container iframe {
//     width: 100%;
//     height: 100%;
//     border: 0;
// }

// /* lastline */
// .footerblock {
//     background-color: #03265c;
// }

// .links a,
// .copyright a {
//     font-size: 16px;
//     text-decoration: none;
//     color: white;
// }

// .links a:hover,
// .copyright a:hover,
// .social-icons a:hover {
//     color: #2db3ef;
// }

// .links a.active {
//     color: white;
// }

// .social-icons a {
//     text-decoration: none;
// }

// @media (max-width: 1199px) {

//     .navbar-collapse {
//         position: fixed !important;
//         left: 0;
//         top: 0;
//         height: 100vh;
//         width: 260px;
//         max-width: 100%;
//         background-color: #2db3ef;
//         transform: translateX(-100%);
//         transition: transform 0.5s ease;
//         z-index: 1050;
//         padding-top: 20px;
//         padding: 0 0;
//         margin: 0 0;
//     }

//     .navbar-collapse.show {
//         transform: translateX(0);
//     }

//     .navbar-nav .nav-item {
//         border-bottom: 2px solid black;
//         padding: 0 10px;
//     }

//     .navbar-nav .nav-link {
//         padding: 10px 15px;
//         text-align: left;
//         color: #fff;
//     }

//     .navbar-toggler {
//         z-index: 3000;
//         border: none;
//         margin-top: 50px;
//     }

//     .navbar-toggler-icon {
//         background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.7)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
//     }

//     .lisence {
//         border: 0;
//         padding: 10px;
//     }
// }

// @media (max-width: 992px) {

//     .navbar-brand .logo {
//         width: 80px;
//     }

//     .slide-text {
//         position: absolute;
//         top: 60%;
//         left: 15%;
//         transform: translateY(-50%);
//         max-width: 80%;
//         color: black;
//         z-index: 10;
//         text-align: left;
//     }

//     .slide-text h2 {
//         font-size: 24px;
//     }

//     .slide-text p {
//         font-size: 40px;
//     }

//     .slide-text button {
//         font-size: 13px;
//     }


//     /* about block */

//     .aboutblock {
//         padding: 20px 40px;
//     }

//     .aboutblock .container h2,
//     h3 {
//         font-size: 100px;
//         line-height: 1;
//     }

//     .aboutblock .container h3 {
//         font-size: 30px;
//     }

//     .aboutblock .container span {
//         font-size: 12px;
//         padding-top: 10px;
//     }

//     .aboutblock .container strong {
//         font-size: 18px;
//         padding-top: 10px;
//     }

//     .aboutblock .container p {
//         font-size: 14px;
//         padding-top: 25px;
//     }

//     .aboutblock .container p::after {
//         margin-top: 10px;
//     }

//     .aboutblock .container button {
//         padding: 7px 15px;
//         font-size: 14px;
//         margin-top: 15px;
//     }

//     .aboutImage img {
//         width: 80%;
//         object-fit: cover;
//         margin-left: 10%;
//         margin-top: 60px;
//         position: relative;
//     }

//     .aboutImage::after {
//         content: '';
//         background-image: url("../images/aboutimageafter.png");
//         background-repeat: no-repeat;
//         background-size: cover;
//         position: absolute;
//         top: 30px;
//         left: 0;
//         width: 100%;
//         height: 70%;
//         z-index: -1;
//     }


//     .mission {
//         padding-top: 10px;
//     }

//     .mission h4 {
//         font-size: 40px;
//         font-weight: 300;
//     }

//     .mission p {
//         padding: 0 10px;
//     }

//     /* services */

//     .headingservices::after {
//         display: none;
//     }

//     /* what block */

//     .whatblock {
//         padding: 30px 40px;
//     }

//     .whatblock .container .row p {
//         font-size: 15px;
//         padding: 10px 0;
//     }


//     /* testimonial block */

//     .testimonialsblock {
//         padding: 40px 0;
//         position: relative;
//         overflow: hidden;

//     }

//     .testimonialsblock::before {
//         display: none;
//     }

//     .testimonialsblock::after {
//         display: none;
//     }

//     .doublequote {
//         font-size: 30px;
//         color: white;
//         background-color: #fbb030;
//         height: 55px;
//         width: 55px;
//         border-radius: 50%;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         margin: 8px auto;
//     }

//     .owl-carousel .item p {
//         padding: 0 15px;
//     }

//     .links li a {
//         display: none;
//     }

//     .footerlastline {
//         flex-direction: column !important;
//         align-items: center !important;
//         text-align: center !important;
//     }


//     .footerlastline .social-icons {
//         padding: 5px;
//         align-items: center !important;
//     }

// }

// @media (max-width: 768px) {

//     .navbar-brand .logo {
//         width: 60px;
//     }

//     .slide-text {
//         position: absolute;
//         top: 70%;
//         left: 15%;
//     }

//     .slide-text h2 {
//         font-size: 14px;
//     }

//     .slide-text p {
//         font-size: 20px;
//     }

//     .slide-text button {
//         font-size: 11px;
//     }

//     .form {
//         display: flex;
//         flex-direction: column;
//     }

//     .formblock {
//         padding: 40px 0;
//     }

//     .socialdata {
//         margin-top: 30px;
//     }

// }

// @media (max-width: 540px) {

//     .navbar-brand .logo {
//         width: 30px;
//     }

//     .slide-text {
//         position: static;
//         transform: none;
//         max-width: 100%;
//         background: #000;
//         color: #fff;
//         padding: 20px;
//     }

//     .slide-text h1 {
//         font-size: 28px;
//         color: #fff;
//         line-height: 1.2;
//     }

//     .slide-text h2 {
//         font-size: 16px;
//         color: white;
//         line-height: 1.6;
//     }

//     .slide-text span {
//         font-size: 16px;
//     }

//     .slide-text button {
//         display: none;
//     }

//     .swiper-pagination {
//         display: none;
//     }

//     /* services */


//     .gridrowimages {
//         margin-top: 0 !important;
//     }

//     .servicesblock {
//         padding: 60px 20px;
//     }

//     .servicesubtitle {
//         font-size: 14px;
//     }


//     .image-wrapper::before {
//         display: none;
//     }

//     .image-wrapper:hover .image-text span {
//         font-size: 20px;
//         font-weight: bold;
//     }


//     .image-wrapper:hover .description {
//         display: none;
//     }


// }`,
//         jscode: `const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });


// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     dots:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })`
//     },
//     {
//         w_no: 4,
//         w_name: "NHK Noodles & Pastas at ESP INSPIRE",
//         w_img: NHK,
//         htmlcode: `<!doctype html>
// <html lang="en">

// <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Bootstrap demo</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
//         integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link
//         href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
//         rel="stylesheet">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
//     <link rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
//     <link rel="stylesheet" href="style.css">

// </head>

// <body>
//     <!-- header section -->
//     <header id="header">
//         <div class="container topcontainer">
//             <div class="topbar">
//                 <a href="tel:2094630707" class="tele"> <i class="fa-solid fa-phone text-white icon-spacing"></i>(209)
//                     463-0707</a>
//                 <a href="mailto:bcmbob1@aol.com" class="mess"> <i
//                         class="fa-solid fa-message icon-spacing"></i>bcmbob1@aol.com</a>
//                 <a href="#"><img src="./images/facebook.png" class="faceicon" alt=""></a>
//                 <a href="#"><img src="./images/twitter.png" class="twiticon" alt=""></a>
//             </div>
//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//                 <a href="#">
//                     <img src="./images/logo.png" class="logo" alt="">
//                 </a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//                     aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarNav">
//                     <ul class="navbar-nav mx-auto">
//                         <li class="nav-item">
//                             <a class="nav-link active" aria-current="page" href="#">Home</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">HISTORY</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">PRODUCTS</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">SUPPLIERS</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">LABELING</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">CONTACT US</a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     </header>

//     <!-- main section -->
//     <main>

//         <!-- banner section -->
//         <div id="banner">
//             <div class="banner-image">
//                 <img src="./images/banner.png" alt="">
//                 <div class="overlay1"></div>
//                 <div id="carouselExample" class="carousel slide container bannerheading">
//                     <div class="carousel-inner">
//                         <div class="carousel-item active">
//                             <div class="carousel-content">
//                                 <strong class="mainheading">PASTA</strong>
//                                 <h2>As fresh as home made</h2>
//                             </div>
//                         </div>
//                         <div class="carousel-item">
//                             <div class="carousel-content">
//                                 <strong class="mainheading">PASTA</strong>
//                                 <h2>As fresh as home made</h2>
//                             </div>
//                         </div>
//                         <div class="carousel-item">
//                             <div class="carousel-content">
//                                 <strong class="mainheading">PASTA</strong>
//                                 <h2>As fresh as home made</h2>
//                             </div>
//                         </div>
//                     </div>
//                     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
//                         data-bs-slide="prev">
//                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Previous</span>
//                     </button>
//                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
//                         data-bs-slide="next">
//                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Next</span>
//                     </button>
//                 </div>
//                 <div class="banner-button-container">
//                     <button class="bannerbutton">READ MORE</button>
//                 </div>
//             </div>
//         </div>

//         <!-- intro section -->
//         <section class="block intro-block">
//             <div class="container text-center   ">
//                 <div class="partition-line"></div>
//                 <strong class="servicesheading">New Hong Kong Noodle Co., Inc.</strong>
//                 <h2 class="subheadingservices">New Hong Kong Noodle Co., Inc. is a privately and family owned business
//                     that
//                     has been <br> running its operation in the San Francisco area since 1977. </h2>
//                 <a href="#" class="servicesbutton">READ MORE</a>
//             </div>
//         </section>


//         <!-- services section -->
//         <section class="block services-block">
//             <div class="container">
//                 <div class="row m-0">
//                     <div class="col natural-section p-0">
//                         <div class="inner">
//                             <strong>All Natural</strong>
//                             <h2 class="firsth2">Major super market bay area Distributors <br> out of state distributors
//                             </h2>
//                             <h2 class="secondh2">Our customers are major supermarkets, bay AREA <br> DISTRIBUTORS AND
//                                 OUT OF STATE DISTRIBUTORS</h2>
//                             <button>Read more</button>
//                         </div>
//                     </div>
//                     <div class="col recipes-section p-0">
//                         <div class="inner2 text-center">
//                             <h2>Recipes</h2>
//                             <img src="./images/plate.png" alt="">
//                             <h3>we offer a wide range of recipes <br> by our expert chefs</h3>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <!-- products section -->
//         <section id="products" class="block products-block">
//             <div class="container products">
//                 <h2>FEATURE PRODUCTS</h2>
//                 <ul class="nav nav-tabs d-flex justify-content-center align-items-center pb-5 pt-3" id="myTab" role="tablist">
//                     <li class="nav-item" role="presentation">
//                         <button class="nav-link active productsbutton productsbutton1 text-center rounded-0" id="home-tab"
//                             data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home"
//                             aria-selected="true">Noodles</button>
//                     </li>
//                     <li class="nav-item" role="presentation">
//                         <button class="nav-link productsbutton text-center rounded-0" id="profile-tab" data-bs-toggle="tab"
//                             data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
//                             aria-selected="false">Wrapppers</button>
//                     </li>
//                 </ul>
                
//                 <div class="tab-content" id="myTabContent">
//                     <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
//                         <div id="slider-noodles" class="owl-carousel owl-theme slider-content active">
//                             <div class="item py-2 px-3">
//                                 <div class="image-container">
//                                     <a href="#"> <img src="./images/p1.jpg" alt="Product1"
//                                             class="d-block custom-image"></a>
//                                     <h6>Chinese Style Noodles</h6>
//                                 </div>
//                             </div>
//                             <div class="item py-2 px-3">
//                                 <div class="image-container">
//                                     <a href="#"> <img src="./images/p1.jpg" alt="Product1"
//                                             class="d-block custom-image"></a>
//                                     <h6>Fresh Egg Noodles</h6>
//                                 </div>
//                             </div>
//                             <div class="item py-2 px-3">
//                                 <div class="image-container">
//                                     <a href="#"> <img src="./images/p2.jpg" alt="Product1"
//                                             class="d-block custom-image"></a>
//                                     <h6>Wide Cut Noodles</h6>
//                                 </div>
//                             </div>
//                             <div class="item py-2 px-3">
//                                 <div class="image-container">
//                                     <a href="#"> <img src="./images/p3.jpg" alt="Product1"
//                                             class="d-block custom-image"></a>
//                                     <h6>Ready Cooked Noodles</h6>
//                                 </div>
//                             </div>
//                             <div class="item py-2 px-3">
//                                 <div class="image-container">
//                                     <a href="#"> <img src="./images/p4.jpg" alt="Product1"
//                                             class="d-block custom-image"></a>
//                                     <h6>Ready Cooked Noodles</h6>
//                                 </div>
//                             </div>
//                             <div class="item py-2 px-3">
//                                 <div class="image-container">
//                                     <a href="#"> <img src="./images/p4.jpg" alt="Product1"
//                                             class="d-block custom-image"></a>
//                                     <h6>Ready Cooked Noodles</h6>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
//                         <div id="slider-wrappers" class="owl-carousel owl-theme slider-content">
//                             <div class="item py-2 px-3">
//                                 <div class="image-container">
//                                     <a href="#"> <img src="./images/p1.jpg" alt="Product1"
//                                             class="d-block custom-image"></a>
//                                     <h6>Chinese Style Noodles</h6>
//                                 </div>
//                             </div>
//                             <div class="item py-2 px-3">
//                                 <div class="image-container">
//                                     <a href="#"> <img src="./images/p1.jpg" alt="Product1"
//                                             class="d-block custom-image"></a>
//                                     <h6>Fresh Egg Noodles</h6>
//                                 </div>
//                             </div>
//                             <div class="item py-2 px-3">
//                                 <div class="image-container">
//                                     <a href="#"> <img src="./images/p1.jpg" alt="Product1"
//                                             class="d-block custom-image"></a>
//                                     <h6>Wide Cut Noodles</h6>
//                                 </div>
//                             </div>
//                             <div class="item py-2 px-3">
//                                 <div class="image-container">
//                                     <a href="#"> <img src="./images/p1.jpg" alt="Product1"
//                                             class="d-block custom-image"></a>
//                                     <h6>Ready Cooked Noodles</h6>
//                                 </div>
//                             </div>
//                             <div class="item py-2 px-3">
//                                 <div class="image-container">
//                                     <a href="#"> <img src="./images/p1.jpg" alt="Product1"
//                                             class="d-block custom-image"></a>
//                                     <h6>Ready Cooked Noodles</h6>
//                                 </div>
//                             </div>
//                             <div class="item py-2 px-3">
//                                 <div class="image-container">
//                                     <a href="#"> <img src="./images/p1.jpg" alt="Product1"
//                                             class="d-block custom-image"></a>
//                                     <h6>Ready Cooked Noodles</h6>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <!-- <a href="#" class="productsbutton">NOODLES</a>
//                 <a href="#" class="productsbutton1">WRAPPERS</a>
//                 <div class="owl-carousel owl-theme">
//                     <div class="item py-2">
//                         <div class="image-container">
//                             <a href="#"> <img src="./images/p1.jpg" alt="Product1" class="d-block custom-image"></a>

//                             <h6>Samsung</h6>

//                         </div>
//                     </div>
//                     <div class="item py-2">
//                         <div class="image-container">
//                             <a href="#"> <img src="./images/p1.jpg" alt="Product1" class="d-block custom-image"></a>

//                             <h6>Samsung</h6>

//                         </div>
//                     </div>
//                     <div class="item py-2">
//                         <div class="image-container">
//                             <a href="#"> <img src="./images/p2.jpg" alt="Product1" class="d-block custom-image"></a>

//                             <h6>Samsung</h6>

//                         </div>
//                     </div>
//                     <div class="item py-2">
//                         <div class="image-container">
//                             <a href="#"> <img src="./images/p3.jpg" alt="Product1" class="d-block custom-image"></a>

//                             <h6>Samsung</h6>

//                         </div>
//                     </div>
//                     <div class="item py-2">
//                         <div class="image-container">
//                             <a href="#"> <img src="./images/p4.jpg" alt="Product1" class="d-block custom-image"></a>

//                             <h6>Samsung</h6>

//                         </div>
//                     </div>
//                     <div class="item py-2">
//                         <div class="image-container">
//                             <a href="#"> <img src="./images/p4.jpg" alt="Product1" class="d-block custom-image"></a>

//                             <h6>Samsung</h6>

//                         </div>
//                     </div>
//                 </div> -->
//             </div>
//         </section>

//         <!-- gallerysection -->
//         <section class="gallerycontent">
//             <div class="container-fluid">
//                 <div class="row">
//                     <div class="col-lg-6 private p-0">
//                         <div class="innergal">
//                             <strong>Private Labeling</strong>
//                             <h2 class="firsth2">NHKN also co-packs wrappers & noodles for other companies throughout the
//                                 US.</h2>
//                             <h2 class="secondh2">We have been striving to expand ourselves into the private labeling
//                                 sector of the <br>
//                                 Food Service industry. Within the last 10 years, we have expanded our companies’ <br>
//                                 services to private labeling.</h2>
//                             <button>Read more</button>
//                         </div>
//                     </div>
//                     <div class="col-lg-6 ourproducts p-0">
//                         <div class="innergal2">
//                             <div class="prodcontainer">
//                                 <div class="main-heading">Our Products</div>
//                                 <div class="columns">
//                                     <div class="column">
//                                         <div class="list-heading">WRAPPERS</div>
//                                         <ul class="list">
//                                             <li class="list-item"><a href="">Potsticker Wrap</a>
//                                             </li>
//                                             <li class="list-item"><a href="">Thick Wonton Wrap</a>
//                                             </li>
//                                             <li class="list-item"><a href="">Thin Wonton Wrap</a>
//                                             </li>
//                                             <li class="list-item"><a href="">Sue Gow Wrap</a></li>
//                                             <li class="list-item"><a href="">Su My Wrap</a>
//                                             </li>
//                                             <li class="list-item"><a href="">HK Style Wonton Wrap</a>
//                                             </li>
//                                             <li class="list-item"><a href="">Medium Wonton Wraps</a></li>
//                                         </ul>
//                                         <div class="see-more">
//                                             <a href="">See our Product Lines</a>
//                                         </div>
//                                     </div>
//                                     <div class="column">
//                                         <div class="list-heading">NOODLES</div>
//                                         <ul class="list">
//                                             <li class="list-item"><a href="">Chinese Style Noodles</a>
//                                             </li>
//                                             <li class="list-item"><a href="">Fresh Egg Noodles</a>
//                                             </li>
//                                             <li class="list-item"><a href="">Wide Cut Noodles</a>
//                                             </li>
//                                             <li class="list-item"><a href="">Ready Cooked Noodles</a></li>
//                                             <li class="list-item"><a href="">Shanghai Noodles</a></li>
//                                             <li class="list-item"><a href="">HK Style Extra Thin Mein</a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <!-- logos section supermarket -->
//         <section class="block supermarket-block">
//             <div class="headingsupermarket">
//                 <h2>Major Supermarket</h2>
//             </div>
//             <div class="image-row">
//                 <img src="./images/ad1.jpg" alt="Image 1">
//                 <img src="./images/ad2.jpg" alt="Image 2">
//                 <img src="./images/ad3.jpg" alt="Image 3">
//                 <img src="./images/ad4.jpg" alt="Image 4">
//             </div>
//         </section>

//         <!-- recies section -->
//         <section class="block reviews-block">
//             <div class="container review-heading">
//                 <h2>What our customers are saying</h2>
//                 <strong>If you are in need of the comfort food and on a low carb , low everything diet, these are the
//                     nooddles <br> for you.I love these miracle noodles. Tried them for the first time a couple of weeks
//                     ago.
//                     They take on <br> the flavor of any sauce that you pour over them. Best part: no carbs and zero
//                     calories.
//                     Came quickly and tastes so good.</strong>
//                 <h3>John Leon</h3>
//             </div>
//         </section>

//         <!-- Inquiry -->
//         <section class="block inquiry-block">
//             <div class="container inquirycontainer">
//                 <h2>General Inquiry</h2>
//                 <form class="inquiry-form">
//                     <div class="row inquiryrow">
//                         <div class="col-md-6 col-sm-12">
//                             <input type="text" class="form-control" placeholder="Name" required>
//                         </div>
//                         <div class="col-md-6 col-sm-12">
//                             <input type="email" class="form-control" placeholder="Email" required>
//                         </div>
//                         <div class="col-md-6 col-sm-12">
//                             <input type="tel" class="form-control" placeholder="Phone" required>
//                         </div>
//                         <div class="col-md-6 col-sm-12">
//                             <select class="form-control" required>
//                                 <option value="" disabled selected>Product</option>
//                                 <option value="product1">Product 1</option>
//                                 <option value="product2">Product 2</option>
//                                 <option value="product3">Product 3</option>
//                             </select>
//                         </div>
//                         <div class="col-12">
//                             <textarea class="form-control" placeholder="Comments" rows="4" required></textarea>
//                         </div>
//                     </div>
//                 </form>
//                 <button>SUBMIT</button>
//             </div>
//         </section>

//         <!-- map section -->
//         <div class=" map-container">
//             <!-- Google Maps Embed -->
//             <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.985936576315!2d-122.39258708763333!3d37.6495346719005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7847d6356ca3%3A0x162f05acdfee57fc!2s360%20Swift%20Ave%20No%2022%2C%20South%20San%20Francisco%2C%20CA%2094080%2C%20USA!5e0!3m2!1sen!2s!4v1723993297685!5m2!1sen!2s"
//                 width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
//                 referrerpolicy="no-referrer-when-downgrade"></iframe>
//         </div>

//     </main>

//     <!-- footer section -->
//     <footer class="block footerblock">
//         <div class="container-fluid footercontainer">
//             <div class="row">
//                 <!-- First 2 columns for list items -->
//                 <div class="col-2">
//                     <ul>
//                         <li><a href="#">Home</a></li>
//                         <li><a href="#">History</a></li>
//                         <li><a href="#">Products</a></li>
//                         <li><a href="#">Suppliers</a></li>
//                         <li><a href="#">Labeling</a></li>
//                         <li><a href="#">Contact Us</a></li>
//                     </ul>
//                 </div>
//                 <div class="col-2">
//                     <ul>
//                         <li><a href="#">Our Products</a></li>
//                         <li><a href="#">Recipes</a></li>
//                         <li><a href="#">Labeling</a></li>
//                         <li><a href="#">All Natural</a></li>
//                     </ul>
//                 </div>

//                 <!-- Next 4 columns for images -->
//                 <div class="col-4">
//                     <img src="./images/orfootlogo.jpg" alt="Footer Logo">
//                 </div>

//                 <!-- Next 2 columns for contact information -->
//                 <div class="col-3">
//                     <div class="contact-info">
//                         <p>NHK Noodle co. inc</p>
//                         <address class="m-0 address">
//                             <i class="fa-solid fa-location-pin"></i> 360 Swift Avenue, No 22
//                             South San Francisco, CA 94080
//                         </address>
//                         <address class="m-0 address">
//                             <i class="fa-solid fa-phone text-white"></i> <a href="tel:6509529404">(650) 952.9404</a>

//                         </address>
//                         <address class="m-0 address">
//                             <i class="fa-solid fa-message"></i> <a
//                                 href="mailto:info@nkhnoodle.com">info@nkhnoodle.com</a>
//                         </address>
//                     </div>
//                 </div>

//                 <!-- Last 2 columns for social icons -->
//                 <div class="col-1">
//                     <div class="social-icons">
//                         <a href="#" class="fab fa-facebook-f"></a>
//                         <a href="#" class="fab fa-google-plus"></a>
//                         <a href="#" class="fab fa-youtube"></a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <section class="line-section">
//             <div class="line top-line"></div>
//             <div class="content">
//                 <ul class="item-list">
//                     <li><a href="#">Our Products</a><span class="separator"></span></li>
//                     <li><a href="#">Recipes</a><span class="separator"></span></li>
//                     <li><a href="#">Labeling</a><span class="separator"></span></li>
//                     <li><a href="#">All Natural</a></li> <!-- Removed separator from the last item -->
//                 </ul>
//             </div>
//             <div class="line bottom-line"></div>
//         </section>
//         <div class="container lastline">
//             <h2>© 2019 NHK Noodle All Rights Reserved</h2>
//             <h3>Designed By: ESP INSPIRE</h3>
//         </div>


//     </footer>


//     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
//         integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
//         crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
//         integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
//         crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
//         integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
//         crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
//         integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
//         crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
//         integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
//         crossorigin="anonymous"></script>
//     <!-- Isotope plugin script-->
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"
//         integrity="sha512-Zq2BOxyhvnRFXu0+WE6ojpZLOU2jdnqbrM1hmVdGzyeCa1DgM3X5Q4A/Is9xA1IkbUeDd7755dNNI/PzSf2Pew=="
//         crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//     <script src="index.js"></script>
// </body>

// </html>`,
//         csscode: `@import url(fstyle.css);

// body {
//     margin: 0;
//     padding: 0;
//     font-family: "Open Sans", sans-serif;
// }

// .container {
//     max-width: 1164px;
// }

// h2 {
//     font-size: 50px;
// }

// .block {
//     padding: 30px 0;
// }

// /* header section */    

// #header {
//     position: absolute;
//     right: 0;
//     left: 0;
//     top: 0;
//     z-index: 99;
// }

// .topbar {
//     margin-bottom: -50px;
//     justify-content: flex-end;
//     display: flex;
//     position: relative;
//     z-index: 400;
//     gap: 15px;
//     top: 0;
// }

// .tele,
// .mess,
// .faceicon,
// .twiticon {
//     cursor: pointer;
// }

// .tele {
//     letter-spacing: 1px;
//     text-decoration: none;
//     color: white;
//     font-family: "Oswald", sans-serif;
//     font-size: 1rem;
//     margin-top: 5px;
//     font-weight: 300;
// }

// .mess {
//     letter-spacing: 1px;
//     text-decoration: none;
//     color: white;
//     font-family: "Oswald", sans-serif;
//     font-size: 1rem;
//     margin-top: 5px;
//     font-weight: 300;
// }

// .faceicon {
//     font-size: 35px;
//     right: 70px;
//     top: 10px;
// }

// .twiticon {
//     font-size: 35px;
//     right: 20px;
//     top: 10px;
// }

// .icon-spacing {
//     margin-right: 10px;
// }

// .navbar {
//     position: relative;
//     background: transparent !important;
//     padding: 0;
//     border: none;
//     z-index: 200;
// }

// .logo {
//     width: 150px;
// }

// .navbar-collapse {
//     z-index: 300;
//     background: #b20000;
//     padding: 10px 0;
// }

// .close-btn {
//     display: none;
// }

// .navbar-nav .nav-link.active {
//     color: white;
// }

// .navbar-nav .nav-link:hover {
//     color: #000;
// }

// .navbar-nav .nav-link {
//     margin-right: 60px;
//     color: white;
// }

// /* banner section */

// .banner {
//     position: relative;
//     width: 100%;
//     height: auto;
// }

// .banner::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     /* Overlay color */
//     z-index: 1;
// }

// .banner img {
//     width: 100%;
//     height: auto;
//     display: block;
// }

// .banner .container.bannerheading {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 2;
//     color: white;
//     text-align: center;
// }

// .banner .container.bannerheading strong {
//     font-size: 6.5rem;
//     line-height: 0.8;
//     margin-bottom: 10px;
// }

// .banner .container.bannerheading h2 {
//     font-size: 3.5rem;
//     font-weight: 300;
//     margin: 0;
// }

// .banner-button-container {
//     position: absolute;
//     bottom: 15%;
//     left: 50%;
//     transform: translateX(-50%);
//     z-index: 3;
// }

// .banner-button-container a {
//     text-decoration: none;
//     font-size: 1.2rem;
//     padding: 10px 40px;
//     background-color: #ffffff;
//     border: none;
//     color: black;
//     cursor: pointer;
//     border-radius: 5px;
// }

// .bannerbutton:hover {
//     background-color: white;
// }

// .carousel-control-prev,
// .carousel-control-next {
//     z-index: 4;
// }


// /* services section */


// .intro-block {
//     padding: 0;
//     padding-top: 80px;
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

// }

// .intro-block h2 {
//     font-weight: 600;
//     color: #b20000;
//     margin-bottom: 20px;
//     position: relative;
// }

// .intro-block h2::before {
//     content: "";
//     border-top: 5px solid grey;
//     width: 60px;
//     position: absolute;
//     top: -20px;
//     left: 50%;
//     transform: translateX(-50%);
// }


// .intro-block p {
//     font-size: 1rem;
//     color: #3f485d;
//     margin-bottom: 30px;
// }

// .intro-block a {
//     background: -moz-linear-gradient(0deg, rgb(186, 15, 15) 0%, rgb(246, 147, 29) 100%);
//     background: -webkit-linear-gradient(0deg, rgb(186, 15, 15) 0%, rgb(246, 147, 29) 100%);
//     background: -ms-linear-gradient(0deg, rgb(186, 15, 15) 0%, rgb(246, 147, 29) 100%);
//     background: linear-gradient(0deg, rgb(186, 15, 15) 0%, rgb(246, 147, 29) 100%);
//     box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.2);
//     border: 0;
//     z-index: 143;
//     padding: 10px 30px;
//     color: white;
//     font-size: 14px;
//     margin-bottom: 50px;
//     text-decoration: none;
//     display: inline-block;
// }

// /* products section */

// .services-block {
//     padding-top: 70px;
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     justify-content: start;
//     align-items: start;
// }


// .services-block .natural-section .inner {
//     background: url(images/bg-natural.jpg);
//     background-size: cover;
//     height: 100%;
//     padding: 60px 15px;
//     padding-left: 500px;
//     margin-left: -500px;

// }


// .services-block .recipes-section .inner {
//     background: url(images/bg-recipes.jpg);
//     background-size: cover;
//     height: 100%;
//     padding: 60px 25px;

// }

// .natural-section .inner h2 {
//     font-size: 50px;
//     font-weight: bold;
//     margin-bottom: 20px;
// }

// .natural-section .inner p {
//     font-size: 1rem;
//     margin-bottom: 15px;
// }

// .natural-section .inner a {
//     text-decoration: none;
//     color: black;
//     border: 0;
//     background: transparent;
// }

// .recipes-section .inner h2 {
//     padding-bottom: 20px;
//     font-size: 50px;
//     font-weight: bold;
// }

// .recipes-section .inner img {
//     padding-right: 40px;
// }

// .recipes-section .inner h3 {
//     padding-top: 40px;
//     font-size: 1rem;
// }


// /* products section */


// .products-block {
//     padding-top: 100px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .products {
//     text-align: center;
// }

// .products .productsbutton {
//     background: -moz-linear-gradient(0deg, rgb(186, 15, 15) 0%, rgb(246, 147, 29) 100%);
//     background: -webkit-linear-gradient(0deg, rgb(186, 15, 15) 0%, rgb(246, 147, 29) 100%);
//     background: -ms-linear-gradient(0deg, rgb(186, 15, 15) 0%, rgb(246, 147, 29) 100%);
//     background: linear-gradient(0deg, rgb(186, 15, 15) 0%, rgb(246, 147, 29) 100%);
//     box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.2);
//     border: 0;
//     z-index: 143;
//     padding: 8px 45px;
//     color: white;
//     font-size: 18px;
//     margin-bottom: 50px;
//     margin-left: 10px;
//     display: inline-block;
//     text-decoration: none;
// }

// .products .productsbutton1 {
//     background-color: grey;
//     border: 0;
//     z-index: 143;
//     padding: 7px 45px;
//     color: white;
//     font-size: 18px;
//     margin-bottom: 50px;
//     margin-left: 10px;
//     display: inline-block;
//     text-decoration: none;
// }

// .products h2 {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
// }

// .custom-image {
//     height: 300;
//     width: 250;
// }

// .image-container {
//     text-align: center;
//     margin-bottom: 20px;
// }

// .image-container a img.custom-image {
//     height: 300px;
//     width: 100%;
//     max-width: 250px;
//     display: block;
//     margin: 0 auto;
// }

// .image-container h6 {
//     font-size: 20px;
//     margin-top: 20px;
// }

// #products .owl-carousel .item .products a {
//     overflow: hidden;
// }

// #products .owl-carousel .item .products img {
//     transition: transform 0.5s ease;
// }

// #products .owl-carousel .item .products img:hover {
//     transform: scale(1.1);
// }

// #products .owl-carousel .owl-nav button {
//     position: absolute;
//     top: 30%;
//     outline: none;
// }

// #products .owl-carousel .owl-nav button.owl-prev {
//     left: 0;
// }

// #products .owl-carousel .owl-nav button.owl-next span,
// #products .owl-carousel .owl-nav button.owl-prev span {
//     font-size: 45px;
//     color: #003859;
//     padding: 0 1rem;
// }

// #products .owl-carousel .owl-nav button.owl-prev span {
//     margin-left: -4rem;
// }

// #products .owl-carousel .owl-nav button.owl-next {
//     right: 0;
// }

// #products .owl-carousel .owl-nav button.owl-next span {
//     margin-right: -4rem;
// }

// .slider-content {
//     display: none;
// }

// .slider-content.active {
//     display: block;
// }


// /* gallery section for products */


// .gallerycontent {
//     display: flex;
//     justify-content: start;
//     align-items: start;
//     text-align: start;
//     position: relative;
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     overflow: hidden;
// }


// .gallerycontent .private .inner,
// .gallerycontent .ourproducts .inner {
//     padding: 80px 0;
//     margin: 0;
//     background-size: cover;
//     box-sizing: border-box;

// }


// .gallerycontent .private .inner {
//     background: url(images/pr.jpg);
//     background-size: cover;
//     height: 100%;
//     padding-left: 20%;

// }


// .private .inner p {
//     margin-top: 25px;
//     font-size: 16px;
//     font-weight: 300;
//     line-height: 1.2;
//     color: white;
// }

// .private .inner h2 {
//     padding-bottom: 50;
//     line-height: 2;
//     font-size: 50px;
//     font-weight: 500;
//     color: white;
// }

// .private .inner a:hover {
//     color: black;
// }

// .private .inner a {
//     text-decoration: none;
//     font-weight: bold;
//     margin-top: 25px;
//     background: transparent;
//     border: 0;
//     color: white;
//     font-size: 14px;
// }

// .gallerycontent .ourproducts .inner {
//     background: url(images/ourprod.jpg);
//     background-size: cover;
//     height: 100%;
//     padding-right: 20%;
// }


// .prodcontainer {
//     width: 480px;
//     height: 400px;
//     margin: auto;
//     margin-left: 70px;
//     margin-top: -50px;
//     box-sizing: border-box;
// }

// .prodcontainer h2 {
//     display: flex;
//     justify-content: flex-start;
//     align-items: start;
//     text-align: left;
//     color: white;
//     text-align: center;
//     margin-bottom: 40px;
//     font-size: 50px;
// }

// .columns {
//     display: flex;
//     justify-content: space-between;
//     height: calc(100% - 50px);
// }

// .column {
//     width: 58%;
//     margin-right: 3%;
// }

// .list-heading {
//     font-size: 18px;
//     color: white;
//     font-weight: bold;
//     margin-bottom: 10px;
// }

// .list {
//     list-style-type: none;
//     color: white;
//     padding: 0;
//     margin: 0;
// }

// .list-item a {
//     text-decoration: none;
//     margin-bottom: 8px;
//     font-size: 16px;
//     color: white;
//     display: flex;
//     align-items: center;
//     cursor: pointer;
// }

// .list-item a::before {
//     color: #a5ab11;
//     margin-right: 10px;
//     content: "\f061";
//     font-family: "Font Awesome 6 Free";
//     font-weight: 900;
//     margin-left: 10px;
//     font-size: 16px;
// }

// .see-more a {
//     text-decoration: none;
//     color: white;
//     padding-top: 20px;
//     font-size: 16px;
//     font-weight: bold;
//     display: inline-block;
// }


// /* supermarket section */

// .supermarket-block {
//     background-color: #f0f5f7;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 20px;
// }

// .headingsupermarket {
//     text-align: center;
//     margin-bottom: 20px;
// }

// .headingsupermarket h2 {
//     margin-top: 90px;
//     font-size: 50px;
//     color: black;
//     font-weight: 600;
// }

// .image-row {
//     display: flex;
//     justify-content: center;
//     gap: 30px;
//     margin-top: 50px;
//     margin-bottom: 50px;
// }

// .image-row a img {
//     width: 400;
//     height: 140px;
//     box-sizing: border-box;
// }

// /* review section */

// .reviews-block {
//     padding-bottom: 80px;
//     overflow: hidden;
//     background-color: white;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     position: relative;
// }

// .reviews-block .container h2 {
//     color: #b20000;
//     margin-top: 80px;
//     font-weight: 600;
//     text-align: center;
//     margin-bottom: 50px;
//     position: relative;
//     z-index: 1000;
// }

// .reviews-block .container p::before {
//     content: '';
//     position: absolute;
//     left: 1%;
//     top: -164%;
//     width: 200px;
//     height: 200px;
//     background-image: url('./images/comm1.jpg');
//     background-size: contain;
//     background-repeat: no-repeat;
//     z-index: -1;
// }

// .reviews-block .container p::after {
//     content: '';
//     position: absolute;
//     right: -4%;
//     top: 7%;
//     width: 200px;
//     height: 200px;
//     background-image: url('./images/comm2.jpg');
//     background-size: contain;
//     background-repeat: no-repeat;
//     z-index: -1;
// }

// .reviews-block .container p {
//     font-size: 18px;
//     position: relative;
//     text-align: center;
//     justify-content: center;
//     display: flex;
//     align-items: center;
//     color: black;
//     margin-bottom: 50px;
//     z-index: 1000;
//     font-weight: 300;
// }

// .reviews-block .container h3 {
//     font-size: 18px;
//     position: relative;
//     text-align: center;
//     font-weight: bold;
//     z-index: 1000;
//     box-sizing: border-box;
//     display: block;
// }

// /* inuiry section */

// .inquiry-block {
//     padding-top: 10px;
//     padding-bottom: 50px;
//     background-image: -moz-linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(229, 110, 25) 0%, rgb(255, 174, 0) 100%);
//     background-image: -webkit-linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(229, 110, 25) 0%, rgb(255, 174, 0) 100%);
//     background-image: -ms-linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(229, 110, 25) 0%, rgb(255, 174, 0) 100%);
//     z-index: 37;
// }

// .inquirycontainer {
//     max-width: 970px;
//     margin: 0 auto;
//     text-align: center;
// }

// .inquirycontainer h2 {
//     font-weight: 500;
//     padding-top: 60px;
//     padding-bottom: 20px;
//     display: flex;
//     justify-content: center;
//     text-align: center;
//     align-items: center;
//     color: #fff;
// }

// .inquiry-form {
//     margin-top: 20px;
// }

// .inquiry-form .form-control {
//     margin-bottom: 15px;
//     background-color: transparent;
//     border: 2px solid #f4a647;
//     color: #fff;
//     padding: 10px;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     appearance: none;
// }

// .inquiry-form .form-control::placeholder {
//     color: #fff;
// }

// .inquiry-form select.form-control {
//     height: auto;
//     color: #fff;
//     background-color: transparent;
//     background-image: url('./images/pngegg.png');
//     background-repeat: no-repeat;
//     background-position: right 10px center;
//     background-size: 12px;
//     padding-right: 30px;
// }

// .inquiry-form select.form-control option {
//     color: #333;
//     background-color: transparent;
// }

// .inquiry-form select.form-control option[value=""][disabled] {
//     color: #fff;
// }

// .inquiry-form .col-md-6 {
//     margin-bottom: 15px;
// }

// .inquiry-form .col-12 {
//     margin-bottom: 15px;
// }

// .inquirycontainer button {
//     padding: 10px 100px;
//     background-color: #fff;
//     color: #f18600;
//     font-size: 17px;
//     font-weight: bold;
//     border: 0;
//     text-align: center;
//     display: inline-block;
//     margin-top: 20px;
// }

// /*map section */

// .img-fluid {
//     max-width: 100%;
//     padding-top: 20px;
//     height: auto;
// }


// .map-container {
//     height: 480px;

// }

// .map-container iframe {
//     width: 100%;
//     height: 100%;
//     border: 0;
// }

// /* footer block */

// .footerblock {
//     width: 100%;
//     background-image: url(./images/footerbg.jpg);
//     background-size: cover;
//     padding-top: 70px;
//     color: white;
// }

// .footerblock .container-fluid {
//     max-width: 1200px;
//     margin: 0 auto;
// }

// .footerblock .row {
//     display: flex;

// }


// .footerblock ul {
//     list-style: none;
//     padding: 0;
//     line-height: 1.5;
//     margin: 0;
// }

// .footerblock ul li a {
//     color: white;
//     text-decoration: none;
//     margin-bottom: 10px;
//     display: block;
// }

// .contact-info p {
//     margin-bottom: 10px;
//     font-size: 18px;
//     font-weight: bold;
// }

// .contact-info a {
//     font-size: 14px;
//     color: white;
//     text-decoration: none;
//     display: block;
//     margin-bottom: 10px;
// }

// .address {
//     font-size: 14px;
//     color: white;
//     display: flex;
//     align-items: center;
//     padding-bottom: 20px;
// }

// .address i {
//     margin-right: 8px;
// }

// .address a {
//     color: white;
//     text-decoration: none;
// }

// .social-icons {
//     text-align: center;
// }

// .social-icons a {
//     color: white;
//     font-size: 20px;
//     margin-bottom: 15px;
//     text-decoration: none;
//     display: flex;
//     flex-direction: column;
// }

// .social-icons a:last-child {
//     margin-right: 0;

// }

// .line-section {
//     border: 2px solid #c95077;
//     position: relative;
//     text-align: center;
//     padding: 10px 0;
// }

// .content {
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .item-list {
//     display: flex;
//     list-style-type: none;
//     padding: 0;
//     margin: 0;
// }

// .item-list li {
//     display: flex;
//     align-items: center;
//     margin: 0 20px;
// }

// .item-list a {
//     text-decoration: none;
//     color: #fff;
//     margin-right: 100px;
// }

// .separator {
//     display: inline-block;
//     width: 1px;
//     height: 25px;
//     background-color: #fff;

// }

// .lastline {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-top: 20px;
// }

// .lastline h2 {
//     font-size: 14px;
//     margin: 0;
// }

// .lastline h3 {
//     font-size: 14px;
//     margin: 0;
//     text-align: right;
// }

// /* responsiveness section */

// /* Tablet and Mobile Styles */



// @media (max-width: 1199px) {


//     #header {
//         background: white;
//         position: relative;
//         padding-top: 50px;
//     }


//     .tele,
//     .mess,
//     .faceicon,
//     .twiticon {
//         display: none;
//     }

//     .logo {
//         width: 100px;
//         margin: 5px;
//         padding-left: 10px;
//     }




//     .navbar-collapse {
//         width: 100%;
//         height: 400px;
//         position: fixed;
//         top: 0;
//         right: 0;
//         background-color: #ed1c24;
//         text-align: center;
//         padding-top: 50px;
//         transform: translateX(100%);
//         transition: transform 0.3s ease-in-out;
//         border-radius: 30px 0 30px 30px;
//     }

//     .navbar-collapse.show {
//         transform: translateX(0);
//     }

//     .navbar-nav {
//         flex-direction: column;
//         align-items: center;
//     }

//     .navbar-nav .nav-link {
//         margin-right: 0;
//         margin-bottom: 10px;
//         color: white;
//     }

//     .navbar-toggler {
//         height: 40px;
//         width: 50px;
//         margin-left: auto;
//         margin-right: 30px;
//         margin-top: 30px;
//         background-color: red;
//         color: white;
//         border: none;
//     }

//     .navbar-toggler:focus {
//         outline: none;
//     }

//     .close-btn {
//         display: block;
//         position: absolute;
//         top: 10px;
//         right: 10px;
//         background: none;
//         border: none;
//         font-size: 30px;
//         color: white;
//         cursor: pointer;
//     }

//     .close-btn:focus {
//         outline: none;
//     }



//     /* banners section */

//     .banner {
//         overflow: hidden;
//     }

//     .banner .container.bannerheading strong {
//         font-size: 6rem;
//         padding-top: 150px;
//         margin-top: 0;
//     }

//     .banner .container.bannerheading h2 {
//         font-size: 4rem;
//         margin-bottom: 50px;
//     }

//     .banner-button-container a {
//         font-size: 18px;
//         padding-top: 50px;
//         padding: 8px 20px;

//     }

//     .carousel-control-prev,
//     .carousel-control-next {

//         margin-left: 40px;
//         margin-right: 40px;
//         margin-top: 60px;
//         width: 40px;
//         height: 40px;
//     }

//     .carousel-control-prev-icon,
//     .carousel-control-next-icon {
//         width: 20px;
//         height: 20px;
//     }

//     .services-block {
//         flex-direction: column !important;
//         align-items: center;
//         justify-content: center;
//         text-align: center;
//     }

//     .servicerow {
//         flex-direction: column;
//     }

//     .natural-section {
//         margin-top: -269px;
//         width: auto;
//         height: auto;
//     }

//     .recipes-section {
//         margin-top: -200px;
//         min-width: 300px;
//         text-align: center;
//     }

//     .recipes-section .inner {
//         padding: 30px 15px;
//     }

//     .recipes-section .innerh2 {
//         font-size: 40px;
//     }

//     .recipes-section .inner h3 {
//         text-align: center;
//         font-size: 100%;
//     }

//     .recipes-section .inner img {
//         width: 300px;
//         height: auto;
//         padding-right: 100 px;
//         margin-left: 30px;
//     }


//     .services-block .natural-section .inner {

//         background-size: cover;
//         height: 100%;
//         padding: 30px 0;
//         padding-left: 400px;
//         margin-left: -400px;
//     }

//     .services-block .recipes-section .inner {
//         background: transparent;
//         background-size: cover;
//         padding: 60px 15px;

//     }

//     .inner {
//         margin-top: 200px;
//     }

//     .inner h2,
//     .inner p,
//     .inner a {
//         display: block;
//         text-align: center;
//         margin: 0 auto;
//     }

//     .inner h2 {
//         font-size: 30px;
//         font-weight: bold;
//         margin-bottom: 20px;
//     }

//     .inner p {
//         font-size: 1rem;
//         margin-bottom: 15px;

//     }

//     .inner a {
//         border: 0;
//         background: transparent;
//         margin: 0 auto;
//         padding: 10px 20px;
//         cursor: pointer;

//     }



//     /* product block */

//     .products-block {
//         margin-top: -120px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     }




//     /* review section responsiveness */


//     .reviews-block {
//         padding-bottom: 40px;
//         overflow: hidden;
//         background-color: white;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         position: relative;
//     }


//     .reviews-block .container h2 {
//         font-size: 35px;
//         color: #b20000;
//         margin-top: 40px;
//     }

//     .review-heading p::before {
//         display: none;
//     }

//     .review-heading p::after {
//         display: none;
//     }

//     .review-heading p {
//         font-size: 16px;
//         position: relative;
//         text-align: center;
//         justify-content: center;
//         display: flex;
//         align-items: center;
//         color: black;
//         margin-bottom: 30px;
//         z-index: 1000;
//         font-weight: 300;
//     }

//     .review-heading h3 {
//         font-size: 16px;
//         position: relative;
//         text-align: center;
//         font-weight: bold;
//         z-index: 1000;
//         display: block;

//     }

//     /* gallery section  */


//     .gallerycontent {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         text-align: center;
//     }



//     .galrow {
//         flex-direction: column;
//     }

//     .gallerycontent .private,
//     .gallerycontent .ourproducts {
//         height: auto;
//         width: 100%;
//     }

//     .gallerycontent .private .inner,
//     .gallerycontent .ourproducts .inner {
//         padding: 40px 20px;
//         background-size: cover;

//     }

//     .gallerycontent .private .inner {
//         padding-left: 0;
//         padding-right: 0;
//     }

//     .gallerycontent .ourproducts .inner {
//         padding-right: 0;
//     }





//     .gallerycontent .private .inner {
//         background: url(images/pr.jpg);
//         background-size: cover;
//         height: 100%;

//     }


//     .gallerycontent .private .inner p {
//         margin-top: 5px;
//         font-size: 16px;
//         font-weight: 300;
//         line-height: 1.2;
//         color: white;
//     }

//     .gallerycontent .private .inner h2 {
//         padding-top: 10px;
//         line-height: 2;
//         font-size: 50px;
//         font-weight: 500;
//         color: white;
//     }

//     .gallerycontent .private .inner a {
//         font-weight: bold;
//         margin-top: 25px;
//         background: transparent;
//         border: 0;
//         color: white;
//         font-size: 14px;
//     }

//     .gallerycontent .ourproducts .inner {
//         background: url(images/ourprod.jpg);
//         background-size: cover;
//         height: 100%;

//     }


//     .prodcontainer {
//         width: 100%;
//         height: auto;
//         margin: 0;
//         box-sizing: border-box;
//     }

//     .prodcontainer h2 {
//         padding-left: 10px;
//         font-size: 35px;
//         margin-bottom: 15px;
//     }

//     .columns {
//         display: block;
//         height: auto;
//     }

//     .column {
//         width: 100%;
//         margin: 0;
//         margin-bottom: 20px;
//     }

//     .list-heading {
//         padding-right: 500px;
//         font-size: 14px;
//     }

//     .list {
//         list-style-type: none;
//         color: white;
//         padding: 0;
//         margin: 0;
//     }

//     .list-item a {
//         text-align: left;
//         padding-left: 200px;
//         font-size: 12px;
//     }


//     .list-item a::before {
//         color: #a5ab11;
//         margin-right: 10px;
//         content: '→';
//         margin-left: 10px;
//         font-size: 16px;
//     }

//     .see-more a {
//         display: none;
//     }


//     /* products section */

//     .col-md-6 {
//         flex: 0 0 50%;
//         max-width: 50%;
//     }

//     .custom-carousel-control-prev {
//         left: 30px;
//     }

//     .custom-carousel-control-next {
//         right: 30px;
//     }

//     /* supermarket responsiveness */

//     .supermarket-block {
//         background-color: #f0f5f7;
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         padding: 20px;
//     }

//     .headingsupermarket {
//         text-align: center;
//         margin-bottom: 20px;
//     }

//     .headingsupermarket h2 {
//         margin-top: 30px;
//         font-size: 50px;
//         color: black;
//         font-weight: 600;
//     }

//     .image-row {
//         display: flex;
//         justify-content: center;
//         gap: 20px;
//         margin-top: 20px;
//         margin-bottom: 30px;
//     }

//     .image-row img {
//         width: 400;
//         height: 120px;
//         box-sizing: border-box;
//     }
// }

// @media (max-width: 1000px) {

//     /* footer styling section */

//     /* footer block */
//     .footerblock {
//         width: 100%;
//         height: auto;
//         background-image: url(./images/footerbg.jpg);
//         background-size: cover;
//         padding-top: 50px;
//         color: white;
//     }

//     .footerblock .footercontainer {
//         max-width: 1200px;
//         margin: 0 auto;
//     }

//     .footerblock .row {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         flex-wrap: nowrap;
//     }

//     .footerblock .col-2 {
//         display: none;
//     }

//     .footerblock .col-4 {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         text-align: center;
//         padding: 0 15px;
//         width: 100%;
//     }

//     .footerblock ul {
//         list-style: none;
//         padding: 0;
//         line-height: 1.5;
//         margin: 0;
//     }

//     .footerblock ul li a {
//         color: white;
//         text-decoration: none;
//         margin-bottom: 10px;
//         display: block;
//     }


//     .col-3 {
//         margin-top: 30px;
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         text-align: center;
//         margin-bottom: 20px;
//     }


//     .col-3 .contact-info {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         width: 100%;
//     }


//     .col-3 .contact-info p,
//     .col-3 .contact-info address {
//         width: 400px;
//         text-align: left;
//         margin-bottom: 10px;

//     }


//     .col-3 .contact-info address i {
//         margin-right: 8px;
//     }


//     .social-icons {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         text-align: center;
//         margin-bottom: 30px;
//     }

//     .social-icons a {
//         color: white;
//         font-size: 20px;
//         margin: 0 10px;
//         text-decoration: none;
//         display: flex;
//         align-items: center;
//     }

//     .line-section {
//         display: none;
//     }

//     .lastline {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         margin-top: 20px;
//         padding-bottom: 20px;
//         text-align: center;
//     }

//     .lastline h2,
//     .lastline h3 {
//         font-size: 14px;
//         margin: 0;
//     }
// }

// @media (max-width: 830px) {

//     /* intro heading */
//     .intro-block h2 {
//         font-size: 30px;
//     }


// }

// @media (max-width: 768px) {

//     .banner .container.bannerheading strong {
//         font-size: 3.5rem;
//         padding-top: 50px;
//         margin-top: 0;
//     }

//     .banner .container.bannerheading h2 {
//         font-size: 2.5rem;
//         margin-bottom: 30px;
//     }

//     .banner-button-container a {
//         font-size: 13px;
//         padding: 6px 15px;
//     }

//     .carousel-control-prev,
//     .carousel-control-next {
//         margin-top: 45px;
//         margin-left: 40px;
//         margin-right: 40px;
//         width: 30px;
//         height: 30px;
//     }

//     .carousel-control-prev-icon,
//     .carousel-control-next-icon {
//         width: 15px;
//         height: 15px;
//     }

//     .col-sm-12 {
//         flex: 0 0 100%;
//         max-width: 100%;
//     }

//     .image-container {
//         margin-bottom: 15px;
//     }

//     .custom-carousel-control-prev {
//         left: 40px;
//     }

//     .custom-carousel-control-next {
//         right: 40px;
//     }

//     .inquiryrow {
//         flex-direction: column;
//     }


// }

// @media (max-width: 576px) {

//     .navbar-nav .nav-link {
//         font-size: 0.875rem;
//     }

//     .banner .container.bannerheading strong {
//         font-size: 2rem;
//         padding-top: 50px;
//         margin-top: 0;
//     }

//     .banner .container.bannerheading h2 {
//         font-size: 1rem;
//         margin-bottom: 30px;
//     }

//     .bannerbutton {
//         font-size: 10px;
//         padding: 3px 7px;
//     }

//     .carousel-control-prev,
//     .carousel-control-next {
//         margin-left: 50px;
//         margin-right: 45px;
//         width: 30px;
//         height: 30px;
//     }

//     .carousel-control-prev-icon,
//     .carousel-control-next-icon {
//         width: 15px;
//         height: 15px;
//     }

//     .products-block {}

//     /* inquiry */
//     .inquiry-block {
//         margin-top: -30px;
//     }

//     .inquirycontainer button {
//         margin-top: -20px;
//     }

//     /* gallery prodcontainer */
//     .prodcontainer {
//         width: 100%;
//         height: auto;
//         margin: 0;
//         box-sizing: border-box;
//     }

//     .prodcontainer h2 {
//         padding-left: 10px;
//         font-weight: bold;
//         font-size: 30px;
//         margin-bottom: 15px;
//     }

//     .columns {
//         display: block;
//         height: auto;
//     }

//     .column {
//         width: 100%;
//         margin: 0;
//         margin-bottom: 20px;
//     }

//     .list-heading {
//         padding-right: 600px;
//         font-size: 14px;
//     }

//     .list {
//         list-style-type: none;
//         color: white;
//         padding: 0;
//         margin: 0;
//     }

//     .list-item a {
//         padding-left: 100px;
//         font-size: 12px;
//     }


//     .list-item a::before {
//         color: #a5ab11;
//         margin-right: 3px;
//         content: '→';
//         margin-left: 10px;
//         font-size: 16px;
//     }

//     .see-more a {
//         display: none;
//     }

//     /* footer section contact info */

//     .col-3 {
//         margin-top: 30px;
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         text-align: center;
//         margin-bottom: 20px;
//     }

//     .col-3 .contact-info {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         width: 100%;
//     }

//     .col-3 .contact-info p,
//     .col-3 .contact-info address {
//         width: 200px;
//         text-align: left;
//         margin-bottom: 10px;

//     }

//     .col-3 .contact-info address i {
//         text-align: center;
//     }

//     .col-3 .contact-info address i {
//         text-align: center;
//         margin-right: 8px;
//     }

// }`,
//         jscode: `$(document).ready(function(){
//     $("#products .owl-carousel").owlCarousel({
//         loop: true,
//         nav: true,
//         dots: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 3
//             },
//             1000: {
//                 items: 4
//             }
//         }
//     });
// })



// $(".nav a").on("click", function () {
//     $(".nav a").removeClass("active productsbutton");
//     $(this).addClass("active productsbutton");
// });



// `
//     },
//     {
//         w_no: 5,
//         w_name: "BroadWay with tailwind at ESP INSPIRE",
//         w_img: broadway,
//         htmlcode: `<!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>BRD</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
//     <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" />
//     <link rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
//     <link rel="stylesheet" href="output.css">
// </head>
// <body>

//     <div class="wrapper">

//         <header id="navbar" class="bg-black bg-opacity-60 w-full h-[100px] absolute top-0 z-10">
//             <nav class="container flex items-center justify-between h-16 sm:h-20">
//                 <div class="relative z-10 mt-14">
//                     <a href="#">
//                         <img src="./images/brandlogo.png" class="xl:h-40 lg:h-28 md:-ml-12" alt="Brand Logo">
//                     </a>

//                 </div>
//                 <div id="nav-menu"
//                     class="absolute top-0 left-[-100%] min-h-[100vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden xl:static xl:left-auto xl:top-auto xl:min-h-fit xl:bg-transparent xl:w-auto">
//                     <ul class="flex flex-col items-center gap-6 xl:flex-row">
//                         <li><a href="#home" class="nav-link active text-yellow-500">Home</a></li>
//                         <li><a href="#about" class="nav-link">About</a></li>
//                         <li><a href="#popular" class="nav-link">Products</a></li>
//                         <li><a href="#projects" class="nav-link">Projects</a></li>
//                         <li><a href="#catalogue" class="nav-link">Catalogue</a></li>
//                         <li><a href="#contact" class="nav-link">Contact</a></li>
//                     </ul>
//                 </div>
//                 <div class="flex justify-center gap-5 items-center">
//                     <a href="#"><i class="fa-brands fa-yelp text-xl hover:text-red-500 md:ml-1 text-white"></i></a>
//                     <a href="#"><i class="fa-brands fa-linkedin-in text-xl hover:text-red-500 text-white"></i></a>
//                     <a href="tel:000-0000-000"
//                         class="xl:ml-4 xl:text-3xl md:text-xl md:ml-1 text-white hover:text-red-500"><i
//                             class="fa-solid fa-phone mr-2" style="color: #fa0000;"></i><span
//                             class="hidden md:inline">000-0000-000</span>
//                     </a>
//                 </div>
//                 <div id="hamburger" class="text-xl sm:text-3xl sm:ml-5 cursor-pointer z-50 xl:hidden">
//                     <i class="fa-solid fa-bars text-white"></i>
//                 </div>
//             </nav>
//         </header>

//         <!-- Carousel Section -->
//         <div class="relative w-full h-screen overflow-hidden">
//             <div class="carousel flex transition-transform duration-700 ease-in-out" style="transform: translateX(0%);">
//                 <div class="w-full flex-none h-screen relative">
//                     <img src="./images/banner.png" alt="Slide 1" class="w-full h-full object-cover">
//                     <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                         <div class="text-center text-white space-y-4">
//                             <h2 class="xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl">SERVING THE FOOD <br>
//                                 SERVICE INDUSTRY <br>
//                                 SINCE 1977</h2>
//                             <button class="bg-red-600 text-white px-6 py-3 text-base rounded-full">Contact Now <i
//                                     class="fa-solid fa-arrow-right ml-2"></i></button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="w-full flex-none h-screen relative">
//                     <img src="./images/banner2.png" alt="Slide 2" class="w-full h-full object-cover">
//                     <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                         <div class="text-center text-white space-y-4">
//                             <h2 class="xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl">SERVING THE FOOD <br>
//                                 SERVICE INDUSTRY <br>
//                                 SINCE 1977</h2>
//                             <button class="bg-red-600 text-white px-6 py-3 text-base rounded-full">Contact Now <i
//                                     class="fa-solid fa-arrow-right ml-2"></i></button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="w-full flex-none h-screen relative">
//                     <img src="./images/banner3.png" alt="Slide 3" class="w-full h-full object-cover">
//                     <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                         <div class="text-center text-white space-y-4">
//                             <h2 class="xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl">SERVING THE FOOD <br>
//                                 SERVICE INDUSTRY <br>
//                                 SINCE 1977</h2>
//                             <button class="bg-red-600 text-white px-6 py-3 text-base rounded-full">Contact Now <i
//                                     class="fa-solid fa-arrow-right ml-2"></i></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <button
//                 class="absolute top-1/2 left-5 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
//                 onclick="prevSlide()">
//                 <i class="fas fa-chevron-left"></i>
//             </button>
//             <button
//                 class="absolute top-1/2 right-5 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
//                 onclick="nextSlide()">
//                 <i class="fas fa-chevron-right"></i>
//             </button>
//         </div>

//         <main>

//             <!-- intro -->
//             <section class="relative introblock">
//                 <div class="container mx-auto">
//                     <div class="flex flex-wrap">
//                         <div class="w-full lg:w-1/2">
//                             <h2 class="text-background-clip pb-7 xl:text-6xl xs:text-xl md:text-4xl sm:text-xl">
//                                 Broadway Sheet <br> Metal & MFG
//                             </h2>
//                             <div class="inner">
//                                 <strong class="info-text">
//                                     Broadway Sheet Metal has been established in the Food Service Industry since 1977.
//                                     The name Broadway Sheet Metal has been synonymous with quality and commitment
//                                     to customer service.
//                                 </strong>
//                                 <p class="info-paragraph">
//                                     A committed and knowledgeable sales and support staff is always available to assist
//                                     our
//                                     customers with both standard and custom products and designs.
//                                 </p>
//                                 <a href="#" class="read-more-link">
//                                     READ MORE
//                                     <i class="icon-arrow ml-3" style="color: #fff; font-size: 12px;"></i>
//                                 </a>
//                             </div>
//                         </div>
//                         <div class="w-full lg:w-1/2 relative">
//                             <img src="./images/introbg.png" class="absolute -left-10 top-1/5 z-9 hidden lg:block"
//                                 alt="">
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <!-- product -->
//             <section class="bg-cover bg-center pt-16 pb-24 text-center"
//                 style="background-image: url('./images/productsbg.jpg');">
//                 <div class="container mx-auto">
//                     <h2 class="font-bold xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-2xl pb-5 mb-4">OUR
//                         PRODUCTS
//                     </h2>
//                     <div class="owl-carousel owl-theme owl-carousel-1">
//                         <div class="relative overflow-hidden group">
//                             <img src="./images/product1.png" alt=""
//                                 class="w-full object-cover transition-opacity duration-300 group-hover:opacity-70">
//                             <div
//                                 class="absolute inset-0 flex flex-col justify-between items-start pt-12 pb-12 px-4 text-white z-10 transition-opacity duration-300 group-hover:opacity-0">
//                                 <p class="text-4xl font-bold">Sinks</p>
//                                 <a href="#"
//                                     class="py-2 px-5 text-white border-none cursor-pointer text-lg font-bold no-underline bg-transparent transition-all duration-300">VIEW
//                                     DETAILS <i class="fa-solid fa-arrow-right ml-2"></i></a>
//                             </div>
//                             <div
//                                 class="absolute inset-0 bg-black opacity-50 z-5 transition-opacity duration-300 group-hover:opacity-0">
//                             </div>
//                             <button
//                                 class="absolute top-1/2 left-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white py-2 px-6 font-bold border-none cursor-pointer z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                                 View Details <i class="fa-solid fa-arrow-right ml-2"></i>
//                             </button>
//                         </div>

//                         <div class="relative overflow-hidden group">
//                             <img src="./images/product2.png" alt=""
//                                 class="w-full object-cover transition-opacity duration-300 group-hover:opacity-70">
//                             <div
//                                 class="absolute inset-0 flex flex-col justify-between items-start pt-12 pb-12 px-4 text-white z-10 transition-opacity duration-300 group-hover:opacity-0">
//                                 <p class="text-4xl font-bold">Sinks</p>
//                                 <a href="#"
//                                     class="py-2 px-5 text-white border-none cursor-pointer text-lg font-bold no-underline bg-transparent transition-all duration-300">VIEW
//                                     DETAILS <i class="fa-solid fa-arrow-right ml-2"></i></a>
//                             </div>
//                             <div
//                                 class="absolute inset-0 bg-black opacity-50 z-5 transition-opacity duration-300 group-hover:opacity-0">
//                             </div>
//                             <button
//                                 class="absolute top-1/2 left-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white py-2 px-6 font-bold border-none cursor-pointer z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                                 View Details <i class="fa-solid fa-arrow-right ml-2"></i>
//                             </button>
//                         </div>

//                         <div class="relative overflow-hidden group">
//                             <img src="./images/product3.png" alt=""
//                                 class="w-full object-cover transition-opacity duration-300 group-hover:opacity-70">
//                             <div
//                                 class="absolute inset-0 flex flex-col justify-between items-start pt-12 pb-12 px-4 text-white z-10 transition-opacity duration-300 group-hover:opacity-0">
//                                 <p class="text-4xl font-bold">Sinks</p>
//                                 <a href="#"
//                                     class="py-2 px-5 text-white border-none cursor-pointer text-lg font-bold no-underline bg-transparent transition-all duration-300">VIEW
//                                     DETAILS <i class="fa-solid fa-arrow-right ml-2"></i></a>
//                             </div>
//                             <div
//                                 class="absolute inset-0 bg-black opacity-50 z-5 transition-opacity duration-300 group-hover:opacity-0">
//                             </div>
//                             <button
//                                 class="absolute top-1/2 left-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white py-2 px-6 font-bold border-none cursor-pointer z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                                 View Details <i class="fa-solid fa-arrow-right ml-2"></i>
//                             </button>
//                         </div>

//                         <div class="relative overflow-hidden group">
//                             <img src="./images/product2.png" alt=""
//                                 class="w-full object-cover transition-opacity duration-300 group-hover:opacity-70">
//                             <div
//                                 class="absolute inset-0 flex flex-col justify-between items-start pt-12 pb-12 px-4 text-white z-10 transition-opacity duration-300 group-hover:opacity-0">
//                                 <p class="text-4xl font-bold">Sinks</p>
//                                 <a href="#"
//                                     class="py-2 px-5 text-white border-none cursor-pointer text-lg font-bold no-underline bg-transparent transition-all duration-300">VIEW
//                                     DETAILS <i class="fa-solid fa-arrow-right ml-2"></i></a>
//                             </div>
//                             <div
//                                 class="absolute inset-0 bg-black opacity-50 z-5 transition-opacity duration-300 group-hover:opacity-0">
//                             </div>
//                             <button
//                                 class="absolute top-1/2 left-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white py-2 px-6 font-bold border-none cursor-pointer z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                                 View Details <i class="fa-solid fa-arrow-right ml-2"></i>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <!-- client -->
//             <section class=" container clientblock py-16 pb-24">
//                 <div>
//                     <h2 class="font-bold xl:text-6xl md:text-5xl sm:text-4xl mb-10">OUR CLIENTS</h2>
//                 </div>
//                 <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
//                     <ul class="flex flex-wrap -mb-px text-sm font-medium text-center owl-carousel owl-theme owl-carousel-2"
//                         id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
//                         <li class="me-2" role="presentation">
//                             <button
//                                 class="flex flex-col items-center justify-center w-[265px] h-[255px] p-4 border-2 border-black bg-white text-black hover:bg-black hover:text-white hover:focus:outline-none"
//                                 id="profile-tab" data-tabs-target="#profile" type="button" role="tab"
//                                 aria-controls="profile" aria-selected="true" class="active-tab">
//                                 <img src="./images/tab1.png" alt="Profile Icon"
//                                     class="w-[100px] h-[100px] mb-5 object-contain mb-2" />
//                                 <span class="text-xl font-bold">Hotels & Casinos</span>
//                             </button>
//                         </li>
//                         <li class="me-2" role="presentation">
//                             <button
//                                 class="flex flex-col items-center justify-center w-[265px] h-[255px] p-4 border-2 border-black bg-white text-black hover:bg-black hover:text-white hover:focus:outline-none"
//                                 id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab"
//                                 aria-controls="dashboard" aria-selected="false">
//                                 <img src="./images/tab2.png" alt="Dashboard Icon"
//                                     class="w-[100px] h-[100px] mb-5 object-contain mb-2" />
//                                 <span class="text-xl font-bold">Corporate - In House Cafeterias</span>
//                             </button>
//                         </li>
//                         <li class="me-2" role="presentation">
//                             <button
//                                 class="flex flex-col items-center justify-center w-[265px] h-[255px] p-4 border-2 border-black bg-white text-black hover:bg-black hover:text-white hover:focus:outline-none"
//                                 id="settings-tab" data-tabs-target="#settings" type="button" role="tab"
//                                 aria-controls="settings" aria-selected="false">
//                                 <img src="./images/tab3.png" alt="Settings Icon"
//                                     class="w-[100px] h-[100px] mb-5 object-contain mb-2" />
//                                 <span class="text-xl font-bold">Restaurant Chains & Country Clubs</span>
//                             </button>
//                         </li>
//                         <li role="presentation">
//                             <button
//                                 class="flex flex-col items-center justify-center w-[265px] h-[255px] p-4 border-2 border-black bg-white text-black hover:bg-black hover:text-white hover:focus:outline-none"
//                                 id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab"
//                                 aria-controls="contacts" aria-selected="false">
//                                 <img src="./images/tab4.png" alt="Contacts Icon"
//                                     class="w-[100px] h-[100px] mb-5 object-contain mb-2" />
//                                 <span class="text-xl font-bold">Sports Complexes</span>
//                             </button>
//                         </li>
//                         <li role="presentation">
//                             <button
//                                 class="flex flex-col items-center justify-center w-[265px] h-[255px] p-4 border-2 border-black bg-white text-black hover:bg-black hover:text-white hover:focus:outline-none"
//                                 id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab"
//                                 aria-controls="contacts" aria-selected="false">
//                                 <img src="./images/tab4.png" alt="Contacts Icon"
//                                     class="w-[100px] h-[100px] mb-5 object-contain mb-2" />
//                                 <span class="text-xl font-bold">Entertainment Museums & Libraries</span>
//                             </button>
//                         </li>
//                         <li role="presentation">
//                             <button
//                                 class="flex flex-col items-center justify-center w-[265px] h-[255px] p-4 border-2 border-black bg-white text-black hover:bg-black hover:text-white hover:focus:outline-none"
//                                 id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab"
//                                 aria-controls="contacts" aria-selected="false">
//                                 <img src="./images/tab4.png" alt="Contacts Icon"
//                                     class="w-[100px] h-[100px] mb-5 object-contain mb-2" />
//                                 <span class="text-xl font-bold">Entertainment Museums & Libraries</span>
//                             </button>
//                         </li>
//                     </ul>



//                 </div>
//                 <div id="default-tab-content">
//                     <div class="hidden bg-white" id="profile" role="tabpanel" aria-labelledby="profile-tab">
//                         <div class="owl-carousel owl-theme owl-carousel-3 h-[230px]">
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub1.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 1">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub2.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 2">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub3.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 3">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub4.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 4">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub2.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 5">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                         </div>


//                     </div>
//                     <div class="hidden bg-white" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
//                         <div class="owl-carousel owl-theme owl-carousel-3 h-[230px]">
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub1.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 1">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub2.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 2">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub3.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 3">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub4.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 4">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub2.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 5">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="hidden bg-white" id="settings" role="tabpanel" aria-labelledby="settings-tab">
//                         <div class="owl-carousel owl-theme owl-carousel-3 h-[230px]">
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub1.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 1">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub2.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 2">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub3.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 3">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub4.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 4">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub2.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 5">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="hidden bg-white" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
//                         <div class="owl-carousel owl-theme owl-carousel-3 h-[230px]">
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub1.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 1">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub2.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 2">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub3.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 3">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub4.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 4">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                             <div class="relative flex items-center justify-center mx-8 h-full w-auto px-5">
//                                 <div class="flex flex-col items-center justify-between w-full h-full p-2.5">
//                                     <img src="./images/hotelsub2.png"
//                                         class="max-h-[120px] mb-4 transition-transform duration-500" alt="Image 5">
//                                     <p class="text-center text-black text-lg font-semibold">Mandarin Hotel - San
//                                         Francisco,
//                                         CA</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <!-- formblock -->
//             <section class="relative pt-24 pb-24 bg-cover bg-no-repeat"
//                 style="background-image: url('./images/formbg.png');">
//                 <div class="container mx-auto">
//                     <div class="grid lg:grid-cols-2 gap-8 max-w-full">
//                         <div class="text-white">
//                             <h2 class="xl:text-6xl lg:text-4xl md:text-4xl sm:text-3xl font-bold leading-tight mb-4">
//                                 REQUEST <br> FOR PROJECT CONSULTATION
//                             </h2>
//                             <p class="text-lg mb-4 pl-9 relative">
//                                 Please contact us with any questions, collaborations, <br> and/or suggestions!
//                                 <span
//                                     class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white h-10 w-1 rounded-sm"></span>
//                             </p>
//                             <div class="mb-4">
//                                 <a href="mailto:info@broadwaysheetmetal.com"
//                                     class="flex items-center text-white text-lg mb-2">
//                                     <i class="fa-solid fa-envelope mr-5" style="color: #fff;"></i>
//                                     info@broadwaysheetmetal.com
//                                 </a>
//                                 <a href="tel:(650) 873-4585" class="flex items-center text-white text-lg">
//                                     <i class="fa-solid fa-phone mr-5"></i>
//                                     (650) 873-4585
//                                 </a>
//                             </div>
//                             <div class="flex">
//                                 <a href="#" class="text-white text-3xl mr-6"><i class="fa-brands fa-yelp"></i></a>
//                                 <a href="#" class="text-white text-3xl"><i class="fa-brands fa-linkedin-in"></i></a>
//                             </div>
//                         </div>
//                         <div>
//                             <form class="w-full max-w-full box-border">
//                                 <div class="grid gap-4">
//                                     <input type="text" id="name" name="name"
//                                         class="border border-gray-300 rounded px-4 py-3 w-full max-w-full"
//                                         placeholder="Name">
//                                     <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                         <input type="text" id="Phone" name="Phone"
//                                             class="border border-gray-300 rounded px-4 py-3 w-full" placeholder="Phone">
//                                         <input type="email" id="Email" name="Email"
//                                             class="border border-gray-300 rounded px-4 py-3 w-full" placeholder="Email">
//                                         <input type="text" id="City" name="City"
//                                             class="border border-gray-300 rounded px-4 py-3 w-full" placeholder="City">
//                                         <input type="text" id="State" name="State"
//                                             class="border border-gray-300 rounded px-4 py-3 w-full" placeholder="State">
//                                     </div>
//                                     <textarea id="comments" name="comments"
//                                         class="border border-gray-300 rounded px-4 py-3 w-full"
//                                         placeholder="Specific Information Requests or Comments" rows="4"></textarea>
//                                     <div class="flex flex-col md:flex-row items-center justify-between">
//                                         <img src="./images/recaptcha.png" alt="recaptcha" class="max-w-xs h-auto">
//                                         <button type="submit"
//                                             class="px-6 py-2 mt-3 border border-white text-white bg-transparent rounded-full text-base hover:bg-white hover:text-red-600 font-bold transition">SUBMIT
//                                             REQUEST</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="absolute top-[-8px] right-0 left-0 h-2 bg-cover"
//                     style="background-image: url('./images/formsectiontopwaves.png');"></div>

//                 <div class="absolute right-0 xl:bottom-[-27px] left-0 text-transparent xl:text-[80px] hidden xl:block font-bold z-0 pointer-events-none"
//                     style="color: #ce262a; text-shadow: 1px 1px 0 #f65255, 1px -1px 0 #f65255, -1px 1px 0 #f65255, -1px -1px 0 #f65255, 1px 0px 0 #f65255, 0px 1px 0 #f65255, -1px 0px 0 #f65255, 0px -1px 0 #f65255;">
//                     BROADWAY SHEET METAL
//                 </div>
//             </section>

//             <!-- iframe -->
//             <div>
//                 <iframe class="w-full"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1617398.7735461807!2d-124.85532574375!3d37.64962770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f79a4d017c8f5%3A0xe42a3cffd9fed413!2sBroadway%20Sheet%20Metal%20%26%20Manufacturing!5e0!3m2!1sen!2s!4v1725277481403!5m2!1sen!2s"
//                     width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"></iframe>
//             </div>

//         </main>

//         <!-- footer -->
//         <footer class="footerblock py-12 xl:pb-44 lg:pb-30 md:pb-30 flex flex-col">
//             <div class="container mx-auto">
//                 <div class="flex flex-col items-center text-center md:flex-row md:text-left md:items-center pb-4">
//                     <div class="w-full md:w-1/6 mb-4 md:mb-0">
//                         <img src="./images/46years.png" alt="46 Years" class="mx-auto">
//                     </div>
//                     <div class="w-full md:w-2/3 mb-4 md:mb-0 px-4">
//                         <h2
//                             class="xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-extrabold py-6 cliph2text">
//                             Get a Free Estimate on Your Next Project
//                         </h2>
//                     </div>
//                     <div class="w-full md:w-1/6 text-center">
//                         <a href="#" class="text-white bg-red-600 py-2 px-8 rounded-full inline-block">GET QUOTE</a>
//                     </div>
//                 </div>
//                 <hr class="border-white mb-6">
//                 <div class="flex flex-wrap mt-14 text-center md:text-left">
//                     <div class="w-full md:w-1/4 mb-6 hidden md:inline md:mb-0">
//                         <span class="text-2xl text-white font-bold">QUICK LINKS</span>
//                         <ul class="mt-6 flex flex-col gap-3">
//                             <li><a href="#" class="text-white text-lg hover:text-red-500">Home</a></li>
//                             <li><a href="#" class="text-white text-lg hover:text-red-500">About</a></li>
//                             <li><a href="#" class="text-white text-lg hover:text-red-500">Products</a></li>
//                             <li><a href="#" class="text-white text-lg hover:text-red-500">Projects</a></li>
//                             <li><a href="#" class="text-white text-lg hover:text-red-500">Catalogue</a></li>
//                             <li><a href="#" class="text-white text-lg hover:text-red-500">Contact</a></li>
//                         </ul>
//                     </div>
//                     <div class="w-full md:w-1/2 mb-6 md:mb-0">
//                         <span class="text-2xl text-white font-bold">OUR PRODUCTS</span>
//                         <div class="flex flex-wrap mt-6">
//                             <div class="w-full md:w-1/2 pr-4">
//                                 <ul class="flex flex-col gap-3">
//                                     <li><a href="#" class="text-white text-lg hover:text-red-500">Sinks</a></li>
//                                     <li><a href="#" class="text-white text-lg hover:text-red-500">Tables</a></li>
//                                     <li><a href="#" class="text-white text-lg hover:text-red-500">Mixers Stands</a></li>
//                                     <li><a href="#" class="text-white text-lg hover:text-red-500">Shelves</a></li>
//                                     <li><a href="#" class="text-white text-lg hover:text-red-500">Cabinets</a></li>
//                                     <li><a href="#" class="text-white text-lg hover:text-red-500">Pot Rocks</a></li>
//                                 </ul>
//                             </div>
//                             <div class="w-full md:w-1/2">
//                                 <ul class="flex flex-col gap-3">
//                                     <li><a href="#" class="text-white text-lg hover:text-red-500">Options</a></li>
//                                     <li><a href="#" class="text-white text-lg hover:text-red-500">Floor Gates &
//                                             Troughs</a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="w-full md:w-1/4">
//                         <div
//                             class="catalogue bg-cover bg-center w-full h-80 flex flex-col items-center justify-center p-8">
//                             <div class="text-center">
//                                 <img src="./assets/images/cataloguepic.png" alt="Catalogue" class="mb-4 mx-auto">
//                                 <strong class="text-2xl text-white block mb-4">OUR CATALOGUE</strong>
//                                 <p class="text-white text-sm mb-4">The name Broadway Sheet Metal has been synonymous
//                                     with quality and commitment to customer service.
//                                 </p>
//                                 <button class="bg-transparent text-white  py-2 px-6 underline rounded-full">DOWNLOAD
//                                     CATALOGUE</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>

//         <!-- bottom footer -->
//         <div class="bottomfooter bg-black p-12">
//             <div class="container flex flex-col items-center w-full">
//                 <div class="topdata py-5 text-center xl:mt-[-134px] lg:mt-[-100px] md:mt-[-60px]">
//                     <img src="./images/lastfooterad.png" class="mainimage" alt="">
//                     <div class="brands relative flex lg:flex-col">
//                         <img src="./images/associationlogo1.png" class="img1 absolute top-[-168px] left-[-65px]" alt="">
//                         <img src="./images/associationlogo2.png" class="img2 absolute top-[-168px] left-[131px]" alt="">
//                         <img src="./images/assaociationlogo3.png" class="img3 absolute top-[-168px] right-[-65px]"
//                             alt="">
//                         <img src="./images/assaociationlogo4.png" class="img4 absolute top-[-168px] right-[131px]"
//                             alt="">
//                     </div>
//                 </div>
//                 <div class="row flex flex-col lg:flex-row xl:pt-12 md:pt-6 gap-3 justify-between items-center w-full">
//                     <div class="col-lg-3 w-1/4">
//                         <img src="./images/footerlogo.png" class="h-auto" alt="">
//                     </div>
//                     <div class="col-lg-6 full text-center">
//                         <span class="text-white text-lg">© 2023 Broadway Sheet Metal & Mfg, All Rights Reserved.</span>
//                     </div>
//                     <div class="col-lg-3 w-full text-center">
//                         <span class="text-white text-lg">Designed by: ESP INSPIRE</span>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </div>

//     <!-- Scripts -->
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
//     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
//     <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
//     <script src="main.js"></script>

// </body>
// </html>`,
//         csscode: ``,
//         jscode: `// JavaScript to toggle mobile menu

// const navMenu = document.getElementById("nav-menu");
// const navLink = document.querySelectorAll(".nav-link");
// const hamburger = document.getElementById("hamburger");

// hamburger.addEventListener("click", () => {
//     navMenu.classList.toggle("left-[0]");
//     hamburger.classList.toggle("ri-close-large-line");
// })

// navLink.forEach(Link => {
//     Link.addEventListener("click", () => {
//         navMenu.classList.toggle("left-[0]");
//         hamburger.classList.toggle("ri-close-large-line");
//     })
// })


// // JavaScript for Carousel Navigation
// let currentIndex = 0;
// const slides = document.querySelector('.carousel').children;

// function updateSlidePosition() {
//     const percentage = -currentIndex * 100;
//     document.querySelector('.carousel').style.transform = translateX({percentage}%);
// }

// function prevSlide() {
//     currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
//     updateSlidePosition();
// }

// function nextSlide() {
//     currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
//     updateSlidePosition();
// }




// $(document).ready(function () {

//     $('.owl-carousel-1').owlCarousel({
//         loop: true,
//         center: true,
//         margin: 0,
//         nav: true,
//         navText: [
//             "<i class='fas fa-chevron-left'></i>",
//             "<i class='fas fa-chevron-right'></i>"
//         ],
//         dots: false,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 2
//             },
//             1000: {
//                 items: 3
//             }
//         }
//     });



//     $('.owl-carousel-2').owlCarousel({
//         loop: false,
//         nav: true,
//         navText: [
//             "<i class='fas fa-chevron-left'></i>",
//             "<i class='fas fa-chevron-right'></i>"
//         ],
//         margin: 0,
//         dots: false,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             550: {
//                 items: 1
//             },
//             700: {
//                 items: 2
//             },
//             900: {
//                 items: 3
//             },
//             1250: {
//                 items: 5
//             }
//         }
//     });


//     $('.owl-carousel-3').owlCarousel({
//         loop: false,
//         margin: -10,
//         nav: true,
//         navText: [
//             "<i class='fas fa-chevron-left'></i>",
//             "<i class='fas fa-chevron-right'></i>"
//         ],
//         dots: false,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 2
//             },
//             1000: {
//                 items: 3
//             },
//             1000: {
//                 items: 4
//             }
//         }
//     });

// });`
//     },
//     {
//         w_no: 6,
//         w_name: "Indore Plants Practice",
//         w_img: indplants,
//         htmlcode: `<!doctype html>
// <html>

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css"
//         integrity="sha512-MqL4+Io386IOPMKKyplKII0pVW5e+kb+PI/I3N87G3fHIfrgNNsRpzIXEi+0MQC0sR9xZNqZqCYVcC61fL5+Vg=="
//         crossorigin="anonymous" referrerpolicy="no-referrer" />
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
//     <link href="./output.css" rel="stylesheet">
// </head>

// <body>

//     <header id="navbar" class="bg-green-950 w-full fixed top-0 left-0 z-50">
//         <nav class=" container flex items-center justify-between h-16 sm:h-20">
//             <div class="font-lobster sm:text-2xl"><a href="#">Indore-Plants</a></div>
//             <div id="nav-menu" class=" absolute top-0 left-[-100%] min-h-[100vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden
//                 lg:static lg:min-h-fit lg:bg-transparent lg:w-auto">
//                 <ul class="flex flex-col items-center gap-8 lg:flex-row">
//                     <li>
//                         <a href="#home" class="nav-link active">Home</a>
//                     </li>
//                     <li>
//                         <a href="#about" class="nav-link">About</a>
//                     </li>
//                     <li>
//                         <a href="#popular" class="nav-link">Popular</a> 
//                     </li>
//                     <li>
//                         <a href="#reviews" class="nav-link">Reviews</a>
//                     </li>
//                 </ul>

//                 <div class="absolute bottom-0 -right-10 opacity-90">
//                     <img src="./images/leaf-1.png" alt="" class="w-32">
//                 </div>
//                 <div class="absolute top-0 -left-10 opacity-90 rotate-90">
//                     <img src="./images/leaf-2.png" alt="" class="w-32">
//                 </div>
//             </div>
//             <div class="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden">
//                 <i id="hamburger" class="ri-menu-4-line"></i>
//             </div>
//         </nav>
//     </header>

//     <main>

//         <!-- home -->

//         <section id="home" class="relative">
//             <div class="container">


//                 <!-- <div class="w-64 h-64  bg-green-700 rounded-full blur-3xl opacity-40 -z-10 absolute top-1/2 left-1/2 
//                 transform -translate-x-1/2 -translate-y-1/2">

//                 </div> -->


//                 <div class="flex flex-col items-center gap-5 lg:flex-row">
//                     <!-- content -->
//                     <div class="w-full space-y-5 lg:w-1/2">
//                         <h1 class="pb-2 mb-3">
//                             <span class="text-yellow-500">Plants</span> make a <br> positive
//                             <span class=" text-yellow-500"> impact </span> on <br> your environment
//                         </h1>
//                         <p class="text-slate-300 font-jost">
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus iusto dolores suscipit
//                             consequuntur perferendis officiis reprehenderit laboriosam ab aperiam, doloremque, in
//                             dolor magnam, eos expedita?
//                         </p>
//                         <div class="flex flex-col sm:flex-row md:gap-4 lg:pt-5 xl:pt-10">
//                             <button class="btn"><span>Shop Now</span> <i class="ri-leaf-line"></i></button>
//                             <button class="btn"><span>Know More</span> <i class="ri-leaf-line"></i></button>
//                         </div>
//                         <p class="text-sm">You will get 30 Days free trial</p>
//                         <div class="flex items-center gap-5 text-lg lg:pt-10">
//                             <i class="ri-facebook-fill text-slate-300 hover:text-yellow-500"></i>
//                             <i class="ri-twitter-x-line text-slate-300 hover:text-yellow-500"></i>
//                             <i class="ri-instagram-line text-slate-300 hover:text-yellow-500"></i>
//                             <i class="ri-linkedin-fill text-slate-300 hover:text-yellow-500"></i>
//                         </div>
//                     </div>

//                     <!-- image -->
//                     <div class="w-full lg:w-1/2">
//                         <img src="./assets/images/home.png" alt="home">
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <!-- services -->

//         <div class="bg-white text-green-900 py-20">
//             <div
//                 class="container w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
//                 <!-- card 1 -->
//                 <div class="border border-green-950 p-5 cursor-pointer rounded-lg
//                 hover:shadow-2xl hover:-translate-y-2 duration-300 sm:mb-3 lg:flex-row">
//                     <div class="flex items-center gap-5">
//                         <i class="ri-truck-line text-3xl md:text-4xl xl:text-5xl"></i>
//                         <p class="md:text-lg font-bold">Fast <br> Delivery</p>
//                     </div>
//                     <p class="font-jost">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo facilis aut?
//                     </p>
//                 </div>

//                 <div class="border border-green-950 p-5 cursor-pointer rounded-lg
//                 hover:shadow-2xl hover:-translate-y-2 duration-300 sm:mb-3">
//                     <div class="flex items-center gap-5">
//                         <i class="ri-truck-line text-3xl md:text-4xl xl:text-5xl"></i>
//                         <p class="md:text-lg font-bold">Fast <br> Delivery</p>
//                     </div>
//                     <p class="font-jost">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo facilis aut?
//                     </p>
//                 </div>

//                 <div class="border border-green-950 p-5 cursor-pointer rounded-lg
//                 hover:shadow-2xl hover:-translate-y-2 duration-300 sm:mb-3">
//                     <div class="flex items-center gap-5">
//                         <i class="ri-truck-line text-3xl md:text-4xl xl:text-5xl"></i>
//                         <p class="md:text-lg font-bold">Fast <br> Delivery</p>
//                     </div>
//                     <p class="font-jost">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo facilis aut?
//                     </p>
//                 </div>

//                 <div class="border border-green-950 p-5 cursor-pointer rounded-lg
//                 hover:shadow-2xl hover:-translate-y-2 duration-300 sm:mb-3">
//                     <div class="flex items-center gap-5">
//                         <i class="ri-truck-line text-3xl md:text-4xl xl:text-5xl"></i>
//                         <p class="md:text-lg font-bold">Fast <br> Delivery</p>
//                     </div>
//                     <p class="font-jost">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo facilis aut?
//                     </p>
//                 </div>
//             </div>
//         </div>


//         <!-- about us -->

//         <section id="about" class="relative overflow-hidden">


//             <div class="absolute -top-8 -right-12 opacity-20">
//                 <img src="./assets/images/leaf-3.png" alt="" class="w-40 md:w-52 lg:w-64">
//             </div>


//             <div class="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
//                 <h2 class="title">About Us</h2>
//                 <p class="max-w-2xl">Follow Instruction for more Information</p>
//             </div>

//             <div class="container space-y-10 xl:space-y-0">
//                 <!-- item 1 -->
//                 <div class="flex flex-col items-center lg:flex-row gap-5">
//                     <!-- image -->
//                     <div class="w-full lg:w-1/2">
//                         <img src="./assets/images/plant-1.png" alt="" class="w-full sm:w-2/3 lg:w-full xl:w-2/3">
//                     </div>

//                     <!-- content -->
//                     <div class="w-full lg:w-1/2">
//                         <div class="space-y-5">
//                             <h3> Make Your <span class="text-yellow-500">Organic</span> garden </h3>
//                             <p class="text-slate-300 font-jost">Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                 Nihil, itaque eius. Nostrum, ad?
//                                 Quos repudiandae dicta labore error quibusdam unde est magni nemo minima tempore.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <!-- item 2 -->

//                 <div class="flex flex-col items-center lg:flex-row-reverse gap-5">
//                     <!-- image -->
//                     <div class="w-full lg:w-1/2">
//                         <img src="./assets/images/plant-2.png" alt="" class="w-full sm:w-2/3 lg:w-full xl:w-2/3">
//                     </div>

//                     <!-- content -->

//                     <div class="w-full lg:w-1/2">
//                         <div class="space-y-5">
//                             <h3> Make Your <span class="text-yellow-500">Organic</span> garden </h3>
//                             <p class="text-slate-300 font-jost">Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                 Nihil, itaque eius. Nostrum, ad?
//                                 Quos repudiandae dicta labore error quibusdam unde est magni nemo minima tempore.</p>
//                         </div>
//                     </div>
//                 </div>


//             </div>
//         </section>


//         <!-- popular -->

//         <section id="popular" class="bg-green-900">
//             <div class="flex flex-col items-center gap-3 text-center mb-40">
//                 <h2 class="title pb-1">Popular Products</h2>
//                 <p class="max-w-2xl">Follow Instruction for more Information</p>
//             </div>

//             <div
//                 class="container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
//                 <!-- card 1 -->
//                 <div class="popularcard bg-green-950 p-10 pt-24 rounded-md relative">
//                     <img src="./assets/images/cart-1.png" alt=""
//                         class="w-56 absolute -top-5 left-1/2  transform -translate-x-1/2 -translate-y-1/2">
//                     <p class="italic">Nephrolepis Exaltat</p>
//                     <h3>Boston Fern</h3>

//                     <div class="flex items-center justify-between">
//                         <p class="pt-2 text-2xl">50$</p>
//                         <button class="bg-yellow-400 px-2 py-1 text-xl rounded-sm">
//                             <a href="#"><i class="ri-shopping-cart-line text-black"></i></a>
//                         </button>
//                     </div>
//                 </div>

//                 <div class="popularcard bg-green-950 p-10 pt-24 rounded-md relative">
//                     <img src="./assets/images/cart-2.png" alt=""
//                         class="w-56 absolute -top-5 left-1/2  transform -translate-x-1/2 -translate-y-1/2">
//                     <p class="italic">Nephrolepis Exaltat</p>
//                     <h3>Boston Fern</h3>

//                     <div class="flex items-center justify-between">
//                         <p class="pt-2 text-2xl">50$</p>
//                         <button class="bg-yellow-400 px-2 py-1 text-xl rounded-sm">
//                             <a href="#"><i class="ri-shopping-cart-line text-black"></i></a>
//                         </button>
//                     </div>
//                 </div>

//                 <div class="popularcard bg-green-950 p-10 pt-24 rounded-md relative">
//                     <img src="./assets/images/cart-3.png" alt=""
//                         class="w-56 absolute -top-5 left-1/2  transform -translate-x-1/2 -translate-y-1/2">
//                     <p class="italic">Nephrolepis Exaltat</p>
//                     <h3>Boston Fern</h3>

//                     <div class="flex items-center justify-between">
//                         <p class="pt-2 text-2xl">50$</p>
//                         <button class="bg-yellow-400 px-2 py-1 text-xl rounded-sm">
//                             <a href="#"><i class="ri-shopping-cart-line text-black"></i></a>
//                         </button>
//                     </div>
//                 </div>

//                 <div class="popularcard bg-green-950 p-10 pt-24 rounded-md relative">
//                     <img src="./assets/images/cart-4.png" alt=""
//                         class="w-56 absolute -top-5 left-1/2  transform -translate-x-1/2 -translate-y-1/2">
//                     <p class="italic">Nephrolepis Exaltat</p>
//                     <h3>Boston Fern</h3>

//                     <div class="flex items-center justify-between">
//                         <p class="pt-2 text-2xl">50$</p>
//                         <button class="bg-yellow-400 px-2 py-1 text-xl rounded-sm">
//                             <a href="#"><i class="ri-shopping-cart-line text-black"></i></a>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>


//         <!-- review section -->

//         <section id="reviews" class="relative mb-20 md:mb-20 overflow-hidden">

//             <div class="absolute -top-8 -left-12 opacity-20">
//                 <img src="./assets/images/leaf-4.png" alt="" class="w-40 md:w-52 xl:w-64">
//             </div>


//             <div class="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
//                 <h2 class="title">Customer Reviews</h2>
//                 <p class="max-w-2xl">Follow Instruction for more Information</p>
//             </div>

//             <div class="container">
//                 <div class="swiper py-12">
//                     <ul class="swiper-wrapper">
//                         <li class="swiper-slide">
//                             <div class="flex flex-col gap-5 bg-green-900 rounded-md p-6">
//                                 <p>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam
//                                     obcaecati natus praesentium distinctio repellendus impedit sit consequatur
//                                     architecto amet.
//                                 </p>
//                                 <div class="flex items-center">
//                                     <img src="./assets/images/review-1.jpg" alt="" class="w-12 h-12 rounded-full">
//                                     <div class="ml-4">
//                                         <p class="text-yellow-400 uppercase">Alice</p>
//                                         <p>Desiger</p>
//                                     </div>
//                                     <i class="ri-double-quotes-r text-4xl ml-auto"></i>
//                                 </div>
//                             </div>
//                         </li>
//                         <li class="swiper-slide">
//                             <div class="flex flex-col gap-5 bg-green-900 rounded-md p-6">
//                                 <p>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam
//                                     obcaecati natus praesentium distinctio repellendus impedit sit consequatur
//                                     architecto amet.
//                                 </p>
//                                 <div class="flex items-center">
//                                     <img src="./assets/images/review-2.jpg" alt="" class="w-12 h-12 rounded-full">
//                                     <div class="ml-4">
//                                         <p class="text-yellow-400 uppercase">Alice</p>
//                                         <p>Desiger</p>
//                                     </div>
//                                     <i class="ri-double-quotes-r text-4xl ml-auto"></i>
//                                 </div>
//                             </div>
//                         </li>
//                         <li class="swiper-slide">
//                             <div class="flex flex-col gap-5 bg-green-900 rounded-md p-6">
//                                 <p>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam
//                                     obcaecati natus praesentium distinctio repellendus impedit sit consequatur
//                                     architecto amet.
//                                 </p>
//                                 <div class="flex items-center">
//                                     <img src="./assets/images/review-3.jpg" alt="" class="w-12 h-12 rounded-full">
//                                     <div class="ml-4">
//                                         <p class="text-yellow-400 uppercase">Alice</p>
//                                         <p>Desiger</p>
//                                     </div>
//                                     <i class="ri-double-quotes-r text-4xl ml-auto"></i>
//                                 </div>
//                             </div>
//                         </li>
//                         <li class="swiper-slide">
//                             <div class="flex flex-col gap-5 bg-green-900 rounded-md p-6">
//                                 <p>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam
//                                     obcaecati natus praesentium distinctio repellendus impedit sit consequatur
//                                     architecto amet.
//                                 </p>
//                                 <div class="flex items-center">
//                                     <img src="./assets/images/review-4.jpg" alt="" class="w-12 h-12 rounded-full">
//                                     <div class="ml-4">
//                                         <p class="text-yellow-400 uppercase">Alice</p>
//                                         <p>Desiger</p>
//                                     </div>
//                                     <i class="ri-double-quotes-r text-4xl ml-auto"></i>
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>
//                     <div class="swiper-pagination"></div>
//                 </div>
//             </div>
//         </section>


//     </main>



//     <footer class="bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative">


//         <div class="container absolute top-0 right-0 left-0 text-white -translate-y-1/2">
//             <div class="bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md">
//                 <h3>
//                     <span class="text-yellow-500">Subscribe</span> to our newsletter
//                 </h3>
//                 <div class="flex flex-col md:flex-row gap-1">
//                     <input type="email" placeholder="Email"
//                         class="w-full px-5 py-3  text-green-900 rounded-md outline-none">
//                     <button
//                         class="flex items-center justify-center gap-1 bg-green-950 px-5 py-3 rounded-md hover:opacity-80 duration-300"><span>Subscribe</span><i
//                             class="ri-send-plane-2-line"></i></button>
//                 </div>
//             </div>
//         </div>


//         <div class="container mt-16 mb-10">
//             <div class="border-b border-green-500 relative">
//                 <div class="absolute top-0 left-0 right-0 transform -translate-y-1/2 max-w-36 mx-auto">
//                     <div class="bg-yellow-100 text-lg text-center">
//                         <a href="#">
//                             <i class="ri-facebook-fill text-black hover:text-yellow-500"></i>
//                         </a>
//                         <a href="#">
//                             <i class="ri-twitter-x-line text-black hover:text-yellow-500"></i>
//                         </a>
//                         <a href="#">
//                             <i class="ri-instagram-line text-black hover:text-yellow-500"></i>
//                         </a>
//                         <a href="#">
//                             <i class="ri-linkedin-fill text-black hover:text-yellow-500"></i>
//                         </a>

//                     </div>
//                 </div>
//             </div>
//         </div>


//         <div
//             class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
//             <!-- item1 -->
//             <div>
//                 <div class="text-7xl text-green-700 text-center inline-block">
//                     <a href="#"> <i class="ri-leaf-fill"></i>
//                         <p class="text-xl sm:text-2xl">Indore Plants</p>
//                     </a>
//                 </div>
//             </div>

//             <div>
//                 <p class="font-bold mb-5 text-xl">Quick Links</p>
//                 <div class="flex flex-col gap-1">
//                     <a href="">Plants</a>
//                     <a href="">Flowers</a>
//                     <a href="">Gardening</a>
//                     <a href="">Seeds</a>
//                     <a href="">Shipping</a>
//                 </div>
//             </div>

//             <div>
//                 <p class="font-bold mb-5 text-xl">Popular Services</p>
//                 <div class="flex flex-col gap-1">
//                     <a href="">Tree Planting</a>
//                     <a href="">Grass Cutting</a>
//                     <a href="">Weeds Control</a>
//                 </div>
//             </div>

//             <div>
//                 <p class="font-bold mb-5 text-xl">Contact Us</p>
//                 <div class="flex flex-col gap-1">
//                     <a href="">0000-0000-0000</a>
//                     <a href="">1234567@gmail.com</a>
//                     <a href="">Lahore Lahore Lahore Lahore Lahore Lahore Lahore Lahore</a>
//                 </div>
//             </div>
//         </div>

//         <div class="container">
//             <p class="text-center mt-10 opacity-50">Copyright &copy; 2024 tailwind. All rights reserved</p>
//         </div>

//         <div class="absolute bottom-0 left-0 pointer-events-none opacity-10">
//             <img src="./assets/images/floral-1.png" alt="" class="w-full">
//         </div>

//     </footer>

//     <a href="#" class="fixed -bottom-1/2 right-5 bg-yellow-500 rounded-lg shadow-sm inline-block px-3 py-1 md:py-2 text-lg z-50 hover:bg-green-950
//     hover:-translate-y-1 duration-300" id="scroll-up"><i class="ri-arrow-up-line"></i></a>

//     <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
//     <script src="main.js"></script>
// </body>

// </html>`,
//         csscode: ``,
//         jscode: `// toggle menu 

// const navMenu = document.getElementById("nav-menu");
// const navLink = document.querySelectorAll(".nav-link");
// const hamburger = document.getElementById("hamburger");

// hamburger.addEventListener("click", () => {
//     navMenu.classList.toggle("left-[0]");
//     hamburger.classList.toggle("ri-close-large-line");
// })

// navLink.forEach(Link => {
//     Link.addEventListener("click", () => {
//         navMenu.classList.toggle("left-[0]");
//         hamburger.classList.toggle("ri-close-large-line");
//     })
// })

//     const swiper = new Swiper('.swiper', {
//         speed: 400,
//         spaceBetween: 30,
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//         },

//         pagination: {
//             el: '.swiper-pagination',
//         },
//         grabCursor: true,
//         breakpoints: {
//             640: {
//                 slidesPerView: 1,
//             },
//             768: {
//                 slidesPerView: 2,
//             },
//             1024: {
//                 slidesPerView: 3,
//             },
//         },
//     });

// const scrollup = () => {
//     const scrollupbtn = document.getElementById("scroll-up")
//     if (this.scrollY >= 250) {
//         scrollupbtn.classList.remove("-bottom-1/2");
//         scrollupbtn.classList.add("bottom-4");
//     }
//     else {
//         scrollupbtn.classList.add("-bottom-1/2");
//         scrollupbtn.classList.remove("bottom-4");
//     }
// }

// window.addEventListener("scroll", scrollup)


// const scrollheader = () => {
//     const header = document.getElementById("navbar")
//     if (this.scrollY >= 50) {
//         header.classList.add("border-b", "border-green-100");
//     }
//     else {
//         header.classList.remove("border-b", "border-green-100");
//     }
// }

// window.addEventListener("scroll", scrollheader)


// const navactive = () => {
//     const sections = document.querySelectorAll('section');
//     const links = document.querySelectorAll(".nav-link");

//     let current = "home";
//     sections.forEach(section => {
//         const sectiontop = section.offsetTop;

//         if (this.scrollY >= sectiontop - 60) {
//             current = section.getAttribute("id");
//         }
//     })

//     links.forEach(item => {
//         item.classList.remove("active");
//         if (item.href.includes(current)) {
//             item.classList.add('active');
//         }
//     })
// }

// window.addEventListener("scroll", navactive);
// `
//     },
//     {
//         w_no: 7,
//         w_name: "E-COMMERCE with React",
//         w_img: ecom,
//         htmlcode: ``,
//         csscode: ``,
//         jscode: ``
//     },
//     {
//         w_no: 8,
//         w_name: "Al Saudia Tibbi foundation with VUE JS",
//         w_img: alsaudia,
//         htmlcode: ``,
//         csscode: ``,
//         jscode: ``
//     },
//     {
//         w_no: 9,
//         w_name: "North State Environemental",
//         w_img: northState,
//         htmlcode: ``,
//         csscode: ``,
//         jscode: ``
//     },
//     {
//         w_no: 10,
//         w_name: "Netflix clone using React and Firebase",
//         w_img: netflix,
//         htmlcode: ``,
//         csscode: ``,
//         jscode: ``
//     }

//     // for 6th item template
//     // {
//     //     w_no: 9,
//     //     w_name: "BroadWay at ESP INSPIRE",
//     //     w_img: broadway,
//     //     htmlcode: ``,
//     //     csscode: ``,
//     //     jscode: ``
//     // }
// ]

// export default mywork_data;