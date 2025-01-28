"use strict";
(self["webpackChunkremote_app"] = self["webpackChunkremote_app"] || []).push([["src_Home_Home_js"],{

/***/ "./src/Home/Appoinment.js":
/*!********************************!*\
  !*** ./src/Home/Appoinment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Appoinment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Assets_appoinment_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/appoinment.jpg */ "./src/Assets/appoinment.jpg");


function Appoinment() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundImage: "url(".concat(_Assets_appoinment_jpg__WEBPACK_IMPORTED_MODULE_1__, ")")
    },
    className: "sm:w-full  md:h-[500px] w-auto bg-cover overflow-hidden flex-col flex flex-wrap  "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-[#000000a6] flex justify-between items-center h-full flex-wrap "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sm:auto md:w-[700px] mt-36 sm:m-8 ml-5 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-4xl text-white font-bold l opacity-100 leading-snug"
  }, "Customer relations with transparent communication ..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-3xl text-white font-normal l opacity-100 leading-normal"
  }, "Kar Ai Solutions can help you get there"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "bg-red-600 border-2 border-red-600 rounded-full px-7 py-3 mt-10 mb-2 text-white font-semibold text-lg hover:bg-transparent hover:duration-500"
  }, "Get appoinment"))));
}

/***/ }),

/***/ "./src/Home/Carousel.js":
/*!******************************!*\
  !*** ./src/Home/Carousel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "../../node_modules/react-icons/bs/index.mjs");
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/rx */ "../../node_modules/react-icons/rx/index.mjs");
/* harmony import */ var _Assets_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/1.jpg */ "./src/Assets/1.jpg");
/* harmony import */ var _Assets_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Assets/2.jpg */ "./src/Assets/2.jpg");






function Carousel() {
  const slides = [{
    img: _Assets_1_jpg__WEBPACK_IMPORTED_MODULE_1__
  }, {
    img: _Assets_2_jpg__WEBPACK_IMPORTED_MODULE_2__
  }];
  const [currentIndex, setcurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };
  const goToSlide = slideIndex => {
    setcurrentIndex(slideIndex);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const interval = setInterval(() => {
      setcurrentIndex(prevIndex => prevIndex === slides.length - 1 ? 0 : prevIndex + 1);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full m-auto relative group object-cover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundImage: "url(".concat(slides[currentIndex].img, ")")
    },
    className: "w-full h-[25vh] sm:h-[35vh] md:h-[40vh] lg:h-[70vh] bg-center bg-cover duration-500"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsChevronCompactLeft, {
    onClick: prevSlide,
    size: 30
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsChevronCompactRight, {
    onClick: nextSlide,
    size: 30
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center absolute bottom-3 left-0 right-0 py-2"
  }, slides.map((slide, slideIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: slideIndex,
    onClick: () => goToSlide(slideIndex),
    className: "text-2xl cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_rx__WEBPACK_IMPORTED_MODULE_4__.RxDotFilled, null)))));
}

/***/ }),

/***/ "./src/Home/Cloud.js":
/*!***************************!*\
  !*** ./src/Home/Cloud.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cloud)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Assets_aboutus1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/aboutus1.png */ "./src/Assets/aboutus1.png");


function Cloud() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-around flex-wrap bg-white mt-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sm:w-auto md:w-[600px] "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-4xl font-bold m-5"
  }, "Cloud Services for your business"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "h-1 w-16 bg-yellow-400 m-5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "m-5 leading-8 text-lg text-gray-600 font-semibold "
  }, " Our Cloud Platform Services is an open business platform designed to help you innovate, integrate and enlarge applications with agility, flexibility and choice for transformation to Cloud with standardized tools, technologies and processes. It helps business to grow fast, to set the smooth connections among all systems and automate processes across the enterprise."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/cloudservice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "m-5 border-2 rounded-full px-9 py-2 border-red-600 text-red-600 font-bold text-xl hover:bg-red-600 hover:text-white"
  }, "Know more"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: " pl-4 mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _Assets_aboutus1_png__WEBPACK_IMPORTED_MODULE_1__,
    className: "md:h-[500px] w-[600px]",
    alt: ""
  })));
}

/***/ }),

/***/ "./src/Home/Contact.js":
/*!*****************************!*\
  !*** ./src/Home/Contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Assets_contact_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/contact.jpg */ "./src/Assets/contact.jpg");


function Contact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative h-[650px] md:h-[350px] bg-fixed bg-cover bg-center z-0",
    style: {
      backgroundImage: "url(".concat(_Assets_contact_jpg__WEBPACK_IMPORTED_MODULE_1__, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-[#000000ee] opacity-85 h-[650px] md:h-[350px] "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative z-10 p-10 m-4 w-auto text-center   bg-opacity-100  mx-auto bg-transparent "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-5xl font-bold mb-2 text-white"
  }, "We are passionate about our work &"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-4xl font-thin mb-4 my-7 text-[#28ffad] tracking-wider"
  }, "make growth of your business"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center flex-wrap gap-10 my-11"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-3xl  text-yellow-600"
  }, "+91 8870345676"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("vr", {
    className: "h-[50px] w-[2px] bg-white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/contact"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "bg-red-700 text-white py-2 px-4 rounded-full w-40 hover:bg-transparent border-2 border-red-700"
  }, "Contact Us"))))));
}

/***/ }),

/***/ "./src/Home/Home.js":
/*!**************************!*\
  !*** ./src/Home/Home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel */ "./src/Home/Carousel.js");
/* harmony import */ var _Mission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mission */ "./src/Home/Mission.js");
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Service */ "./src/Home/Service.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contact */ "./src/Home/Contact.js");
/* harmony import */ var _Cloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cloud */ "./src/Home/Cloud.js");
/* harmony import */ var _Appoinment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Appoinment */ "./src/Home/Appoinment.js");







function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Mission__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Service__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Contact__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Cloud__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Appoinment__WEBPACK_IMPORTED_MODULE_6__["default"], null));
}

/***/ }),

/***/ "./src/Home/Mission.js":
/*!*****************************!*\
  !*** ./src/Home/Mission.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mission)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Mission() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-center items-center flex-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: " flex flex-col justify-center items-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: " sm:lg md:text-2xl font-medium font-Robot  text-center leading-10 p-5 mx-10 my-5"
  }, "Get solutions that meet your industry's specific needs - no matter the size of your organization. We design data-driven digital transformation results with our market-leading enterprise cloud data management solutions tailored for your industry. We are a cutting-edge company with a team of professionals working tirelessly to achieve the desired results. We fulfil your business needs and ensure overall success for your endeavour. To us, success lies in excellence!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "h-[3px] w-20 bg-yellow-500"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "  flex flex-row justify-center flex-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: " sm:w-[300px] h-[320px] md:w-[300px] p-2 bg-[#ffff] shadow-[1px_0px_10px_1px] shadow-slate-500 m-4 hover:-translate-y-4 duration-500 hover:shadow-[0px_3px_10px_0px]  "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-3xl font-bold mt-4 px-3"
  }, "Our Vision"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: " sm:h-auto sm:w-auto md:text-lg font-semibold text-gray-700 mt-3 p-3"
  }, "Our vision is to become the most notable global IT service provider offering Software Development services to businesses worldwide."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-4 text-lg font-semibold text-[#3b8aff] p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/company"
  }, "Read more"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sm:w-[300px] h-[320px] md:w-[300px] p-2 bg-[#ffff] shadow-[1px_0px_30px_1px]  shadow-slate-500 m-4 hover:-translate-y-4 duration-500 hover:shadow-[0px_3px_10px_0px] "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-3xl font-bold mt-4 px-3"
  }, "Our Mission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg font-semibold text-gray-700 mt-3 p-3"
  }, "To make IT simple for our customers, replacing the burden of high contact IT services with intelligently designed solutions that span from consultancy,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-4 text-lg font-semibold text-[#3b8aff] p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/vision"
  }, "Read more"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sm:w-[300px]  h-[320px]  md:w-[300px] p-2 bg-[#ffff] shadow-[1px_0px_30px_1px]  shadow-slate-500 m-4 hover:-translate-y-4 duration-500 hover:shadow-[0px_3px_10px_0px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-3xl font-bold mt-4 px-3"
  }, "OUR EXPERTISE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg font-semibold text-gray-700 mt-3 p-3"
  }, "We see ourselves as IT Champions for our customers, providing not only reactive support but also proactive guidance on how IT can best"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-4 text-lg font-semibold text-[#3b8aff] p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/careers"
  }, "Read more")))));
}

/***/ }),

/***/ "./src/Home/Service.js":
/*!*****************************!*\
  !*** ./src/Home/Service.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Service)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ "webpack/sharing/consume/default/react-multi-carousel/react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "../../node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var _Assets_i1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assets/i1.png */ "./src/Assets/i1.png");
/* harmony import */ var _Assets_i2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Assets/i2.png */ "./src/Assets/i2.png");
/* harmony import */ var _Assets_i3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Assets/i3.png */ "./src/Assets/i3.png");
/* harmony import */ var _Assets_i4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Assets/i4.png */ "./src/Assets/i4.png");
/* harmony import */ var _Assets_i5_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Assets/i5.png */ "./src/Assets/i5.png");
/* harmony import */ var _Assets_i6_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Assets/i6.png */ "./src/Assets/i6.png");
/* harmony import */ var _Assets_i7_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Assets/i7.png */ "./src/Assets/i7.png");
/* harmony import */ var _Assets_i8_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Assets/i8.png */ "./src/Assets/i8.png");











function Service() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1400
      },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: {
        max: 1400,
        min: 670
      },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: {
        max: 670,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-4xl font-bold mx-10 my-5"
  }, "Service We Offer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl font-semibold mx-10"
  }, " Kar Ai Solutions is the best counseling accomplice for startup innovation organizations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "bg-yellow-500 h-1 w-20 mx-10 mt-5"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default()), {
    className: "m-12  z-0",
    partialVisbile: true,
    swipeable: false,
    draggable: false,
    showDots: false,
    responsive: responsive,
    ssr: true // means to render carousel on server-side.
    ,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 500,
    keyBoardControl: true,
    customTransition: "all 2s",
    transitionDuration: 2000,
    arrows: true,
    removeArrowOnDeviceType: "mobile,tablet",
    focusOnSelect: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-black flex flex-col justify-evenly items-center m-8 sm:h-[400px] h-[600px] hover:bg-red-600 group hover:text-black "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _Assets_i1_png__WEBPACK_IMPORTED_MODULE_3__,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-white text-base sm:text-xl  font-bold"
  }, "Cloud Service"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white text-center text-md leading-8 mx-5"
  }, "Cloud Platform Services is an open business platform designed to help you innovate, integrate and enlarge applications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-red-700 text-lg font-medium mt-5 group-hover:text-black "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/cloudservice"
  }, "Read more"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-black flex flex-col justify-evenly items-center m-8 sm:h-[400px] h-[600px]  hover:bg-red-600 group hover: text-black "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "",
    src: _Assets_i2_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-white text-base sm:text-xl  font-bold"
  }, "CMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white text-center text-md leading-8 mx-5"
  }, "A content management system is a web application designed to make it accessible for non-technical users to add, edit and maintain a website."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-red-700 text-lg mt-5   font-medium group-hover:text-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/cms"
  }, "Read more"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-black flex flex-col justify-evenly items-center m-8 sm:h-[400px] h-[600px] hover:bg-red-600 group hover: text-black "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _Assets_i3_png__WEBPACK_IMPORTED_MODULE_5__,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-white text-base sm:text-xl font-bold"
  }, "DevOps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white text-center text-md leading-8 mx-5"
  }, "In simple words, DevOps is an assortment of practices that automates the processes between software development and IT teams,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-red-700 text-lg mt-5  font-medium group-hover:text-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/devops"
  }, "Read more"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-black flex flex-col justify-evenly items-center m-8 sm:h-[400px] h-[600px] hover:bg-red-600 group hover: text-black "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _Assets_i4_png__WEBPACK_IMPORTED_MODULE_6__,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-white text-base sm:text-xl font-bold"
  }, "E-Commerce"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white text-center text-md leading-8 mx-5"
  }, "E-commerce has completely revolutionized the process of online shopping and has modified the way consumers purchase their goods"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-red-700 text-lg mt-5  font-medium group-hover:text-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/ecommerce"
  }, "Read more"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-black flex flex-col justify-evenly items-center m-8 sm:h-[400px] h-[600px]  hover:bg-red-600 group hover: text-black  "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _Assets_i5_png__WEBPACK_IMPORTED_MODULE_7__,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-white text-base sm:text-xl  font-bold"
  }, "Industry Solutions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white text-center text-md leading-8 mx-5"
  }, "Get solutions that meet your industry's specific needs - no matter the size of your organization. We design data-driven"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-red-700 text-lg mt-5  font-medium  group-hover:text-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/industry"
  }, "Read more"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-black flex flex-col justify-evenly items-center m-8 sm:h-[400px] h-[600px]  hover:bg-red-600 group hover: text-black "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _Assets_i6_png__WEBPACK_IMPORTED_MODULE_8__,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-white text-base sm:text-xl  font-bold"
  }, " Internet Of Things"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white text-center text-md leading-8 mx-5"
  }, "As a sturdy solution for enlarging the automation across all the versatile domains, The Internet of things is an incredible vision  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-red-700 text-lg mt-5  font-medium group-hover:text-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/internet"
  }, "Read more"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-black flex flex-col justify-evenly items-center m-8 sm:h-[400px] h-[600px] hover:bg-red-600 group hover: text-black  "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _Assets_i7_png__WEBPACK_IMPORTED_MODULE_9__,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-white text-base sm:text-xl  font-bold text-center"
  }, " IT Infrastructure & Security"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white text-center text-md leading-8 mx-5"
  }, "In an increasingly perilous web environment, server-level security is imperative. Your server and IT infrastructure are vulnerable to "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-red-700 text-lg mt-5  font-medium group-hover:text-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/IT"
  }, "Read more"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-black flex flex-col justify-evenly items-center m-8 sm:h-[400px] h-[600px]  hover:bg-red-600 group hover: text-black "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _Assets_i8_png__WEBPACK_IMPORTED_MODULE_10__,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-white text-base sm:text-xl  font-bold"
  }, "Market Automation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white text-center text-md leading-8 mx-5"
  }, "Marketing automation in simple terms can be interpreted as using software platforms and additional information technology  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-red-700 text-lg mt-5  font-medium group-hover:text-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/marketing"
  }, "Read more")))));
}

/***/ }),

/***/ "./src/Assets/1.jpg":
/*!**************************!*\
  !*** ./src/Assets/1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9e8bf80222cecba2b0b.jpg";

/***/ }),

/***/ "./src/Assets/2.jpg":
/*!**************************!*\
  !*** ./src/Assets/2.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99c2ec362d2ba7b59f73.jpg";

/***/ }),

/***/ "./src/Assets/aboutus1.png":
/*!*********************************!*\
  !*** ./src/Assets/aboutus1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f2232e1f66fdf707bfb.png";

/***/ }),

/***/ "./src/Assets/appoinment.jpg":
/*!***********************************!*\
  !*** ./src/Assets/appoinment.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f9f309d3d677a06ee0a.jpg";

/***/ }),

/***/ "./src/Assets/contact.jpg":
/*!********************************!*\
  !*** ./src/Assets/contact.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "358f47af4b87a50f78a5.jpg";

/***/ }),

/***/ "./src/Assets/i1.png":
/*!***************************!*\
  !*** ./src/Assets/i1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cde1977e14b97a1d0a5.png";

/***/ }),

/***/ "./src/Assets/i2.png":
/*!***************************!*\
  !*** ./src/Assets/i2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecc36931577aaa94ffda.png";

/***/ }),

/***/ "./src/Assets/i3.png":
/*!***************************!*\
  !*** ./src/Assets/i3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "349cc84c04ed0c16e50b.png";

/***/ }),

/***/ "./src/Assets/i4.png":
/*!***************************!*\
  !*** ./src/Assets/i4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d55b4b56c71b7cd8b1d.png";

/***/ }),

/***/ "./src/Assets/i5.png":
/*!***************************!*\
  !*** ./src/Assets/i5.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "536859b59be7245bb1c7.png";

/***/ }),

/***/ "./src/Assets/i6.png":
/*!***************************!*\
  !*** ./src/Assets/i6.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d63e9140c292ac115b9.png";

/***/ }),

/***/ "./src/Assets/i7.png":
/*!***************************!*\
  !*** ./src/Assets/i7.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cfd8dfa6d386f6ee416.png";

/***/ }),

/***/ "./src/Assets/i8.png":
/*!***************************!*\
  !*** ./src/Assets/i8.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecd144b0f42fd097313f.png";

/***/ })

}]);
//# sourceMappingURL=src_Home_Home_js.js.map