"use strict";
(self["webpackChunkhost_app"] = self["webpackChunkhost_app"] || []).push([["src_entry_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _remote_app_src_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../remote-app/src/Nav */ "../remote-app/src/Nav.js");
/* harmony import */ var _remote_app_src_Home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../remote-app/src/Home/Home */ "../remote-app/src/Home/Home.js");




const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_remote_app_src_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_remote_app_src_Home_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ "../../node_modules/react-dom/client.js");



// import ReactDOM from "react-dom";

// // use createRoot
// ReactDOM.render(<App/>, document.getElementById("root"));


const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(document.getElementById('root'));
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], null));

/***/ }),

/***/ "../remote-app/src/Home/Appoinment.js":
/*!********************************************!*\
  !*** ../remote-app/src/Home/Appoinment.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Appoinment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Assets_appoinment_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/appoinment.jpg */ "../remote-app/src/Assets/appoinment.jpg");


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

/***/ "../remote-app/src/Home/Carousel.js":
/*!******************************************!*\
  !*** ../remote-app/src/Home/Carousel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "../../node_modules/react-icons/bs/index.mjs");
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/rx */ "../../node_modules/react-icons/rx/index.mjs");
/* harmony import */ var _Assets_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/1.jpg */ "../remote-app/src/Assets/1.jpg");
/* harmony import */ var _Assets_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Assets/2.jpg */ "../remote-app/src/Assets/2.jpg");






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

/***/ "../remote-app/src/Home/Cloud.js":
/*!***************************************!*\
  !*** ../remote-app/src/Home/Cloud.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cloud)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Assets_aboutus1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/aboutus1.png */ "../remote-app/src/Assets/aboutus1.png");


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

/***/ "../remote-app/src/Home/Contact.js":
/*!*****************************************!*\
  !*** ../remote-app/src/Home/Contact.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Assets_contact_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/contact.jpg */ "../remote-app/src/Assets/contact.jpg");


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

/***/ "../remote-app/src/Home/Home.js":
/*!**************************************!*\
  !*** ../remote-app/src/Home/Home.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel */ "../remote-app/src/Home/Carousel.js");
/* harmony import */ var _Mission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mission */ "../remote-app/src/Home/Mission.js");
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Service */ "../remote-app/src/Home/Service.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contact */ "../remote-app/src/Home/Contact.js");
/* harmony import */ var _Cloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cloud */ "../remote-app/src/Home/Cloud.js");
/* harmony import */ var _Appoinment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Appoinment */ "../remote-app/src/Home/Appoinment.js");







function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Mission__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Service__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Contact__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Cloud__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Appoinment__WEBPACK_IMPORTED_MODULE_6__["default"], null));
}

/***/ }),

/***/ "../remote-app/src/Home/Mission.js":
/*!*****************************************!*\
  !*** ../remote-app/src/Home/Mission.js ***!
  \*****************************************/
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

/***/ "../remote-app/src/Home/Service.js":
/*!*****************************************!*\
  !*** ../remote-app/src/Home/Service.js ***!
  \*****************************************/
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
/* harmony import */ var _Assets_i1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assets/i1.png */ "../remote-app/src/Assets/i1.png");
/* harmony import */ var _Assets_i2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Assets/i2.png */ "../remote-app/src/Assets/i2.png");
/* harmony import */ var _Assets_i3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Assets/i3.png */ "../remote-app/src/Assets/i3.png");
/* harmony import */ var _Assets_i4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Assets/i4.png */ "../remote-app/src/Assets/i4.png");
/* harmony import */ var _Assets_i5_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Assets/i5.png */ "../remote-app/src/Assets/i5.png");
/* harmony import */ var _Assets_i6_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Assets/i6.png */ "../remote-app/src/Assets/i6.png");
/* harmony import */ var _Assets_i7_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Assets/i7.png */ "../remote-app/src/Assets/i7.png");
/* harmony import */ var _Assets_i8_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Assets/i8.png */ "../remote-app/src/Assets/i8.png");











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

/***/ "../remote-app/src/Nav.js":
/*!********************************!*\
  !*** ../remote-app/src/Nav.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Assets_newlogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets/newlogo.png */ "../remote-app/src/Assets/newlogo.png");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "../../node_modules/react-icons/io/index.mjs");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ri */ "../../node_modules/react-icons/ri/index.mjs");




function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = dropdown => {
    setIsDropdownOpen(isDropdownOpen === dropdown ? null : dropdown);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "Navbar",
    className: "bg-white lg:flex-row xl:flex justify-around items-center flex-wrap sticky top-[-1%]  p-3 z-10 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center gap-3 mt-3 flex-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _Assets_newlogo_png__WEBPACK_IMPORTED_MODULE_1__,
    alt: "img",
    href: true,
    className: "h-[50px] mt-3 hover:text-gray-950"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-row justify-center xl:flex-col "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-2xl font-bold"
  }, "KarAi ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: toggleMenu,
    className: "md:hidden  bg-yellow-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosMenu, {
    className: "text-3xl text-white"
  }))), isMenuOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "lg:hidden bg-[#424141]   shadow-lg font-bold absolute top-full left-0 w-full z-50 overflow-y-auto transition-all duration-700 ease-in-out  cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b-2 border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b-2 bg-[#424141] border-white hover:text-white relative ",
    onClick: () => toggleDropdown("about")
  }, "About Us", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform cursor-pointer ".concat(isDropdownOpen === "about" ? "rotate-180  " : ""),
    style: {
      color: "white",
      border: "2px solid white",
      padding: "2px"
    }
  }, isDropdownOpen === "about" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiArrowDropDownLine, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiArrowDropDownLine, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "absolute top-full left-0 w-full z-50 bg-[#424141] text-gray-800 shadow-lg duration-1000   ".concat(isDropdownOpen === "about" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b-2 border-white bg-[#424141] hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/company"
  }, "Company Overview")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b border-white bg-[#424141] hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/vision"
  }, "Company Vision and Mission")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b border-white bg-[#424141] hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "careers"
  }, "Company Careers")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b-2 bg-[#424141] border-white hover:text-white relative",
    onClick: () => toggleDropdown("cloud")
  }, "Cloud Applications", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform cursor-pointer ".concat(isDropdownOpen === "cloud" ? "rotate-180" : ""),
    style: {
      color: "white",
      border: "2px solid white",
      padding: "2px"
    }
  }, isDropdownOpen === "cloud" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiArrowDropDownLine, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiArrowDropDownLine, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "absolute top-full left-0 w-full z-50 bg-[#424141] text-gray-800 shadow-lg transition-all duration-700 ease-in-out ".concat(isDropdownOpen === "cloud" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/resource"
  }, "Enterprise Resource Planning (ERP)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/performance"
  }, "Enterprise Performance Management (EPM)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/supply"
  }, "Supply Chain & Manufacturing (SCM)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/human"
  }, "Human Capital Management (HCM)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/advertise"
  }, "Advertising and Customer Experience (CX)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b-2 bg-[#424141] border-white hover:text-white relative",
    onClick: () => toggleDropdown("service")
  }, "service", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform cursor-pointer ".concat(isDropdownOpen === "service" ? "rotate-180" : ""),
    style: {
      color: "white",
      border: "2px solid white",
      padding: "2px"
    }
  }, isDropdownOpen === "service" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiArrowDropDownLine, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiArrowDropDownLine, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "absolute top-full left-0 w-full z-50 bg-[#424141] text-gray-800 shadow-lg transition-all duration-700 ease-in-out ".concat(isDropdownOpen === "service" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/cloudservice"
  }, "Cloud Service")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/devops"
  }, "DevOps")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/cms"
  }, "Content Management System (CMS)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/ecommerce"
  }, "E-Commerce")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/industry"
  }, "Industry Solutions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/internet"
  }, "Internet of Things")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "IT"
  }, "IT Infrastructure & Security")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/marketing"
  }, "Marketing Automation")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "p-2 border-b-2 bg-[#424141] border-white hover:text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/contact"
  }, "Contact Us"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hidden md:flex mt-10 mx-8 justify-center items-center flex-wrap xl:mt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex gap-7 flex-wrap   "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "text-xl font-semibold  text-black   hover:text-red-600 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/",
    className: "   hover:text-red-600"
  }, " Home ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "dropdown cursor-pointer inline-block relative text-xl  font-semibold text-black hover:text-red-600 group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "   hover:text-red-600"
  }, "About Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "dropdown-menu pt-9 absolute hidden group-hover:block w-60 text-gray-700 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "border-b bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/company"
  }, "Company Overview")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "border-b bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/vision"
  }, "Company Vision and Mission")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "border-b bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/careers"
  }, "Company Careers")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: " dropdown  cursor-pointer inline-block relative text-xl font-semibold text-black hover:text-red-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "   hover:text-red-600"
  }, "Cloud Applications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    class: "dropdown-menu absolute hidden   pt-9  w-60  text-gray-700  "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: " "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/resource"
  }, "Enterprise Resource Planning (ERP)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/performance"
  }, "Enterprise Performance Management (EPM)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/supply"
  }, "Supply Chain & Manufacturing (SCM)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/human"
  }, "Human Capital Management (HCM)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/advertise"
  }, "Advertising and Customer Experience (CX)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: " dropdown  cursor-pointer inline-block relative text-xl font-semibold text-black hover:text-red-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: " hover:text-red-600"
  }, "Service & Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    class: "dropdown-menu absolute hidden    pt-9   w-60  text-gray-700  "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: " "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "border-b border-b-white text-base  bg-red-500 hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/cloudservice"
  }, "Cloud Service")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "border-b border-b-white text-base  bg-red-500 hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/devops"
  }, "DevOps")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "border-b border-b-white text-base  bg-red-500 hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/cms"
  }, "Content Management System (cms)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "border-b border-b-white text-base  bg-red-500 hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/ecommerce"
  }, "E - Commerce")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "border-b border-b-white text-base  bg-red-500 hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/industry"
  }, "Industry Solutions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "border-b border-b-white  bg-red-500 text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/internet"
  }, "Internet of Things")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "border-b border-b-white  bg-red-500 text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/IT"
  }, "IT Infrastructure & Security")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "border-b border-b-white  bg-red-500 text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap",
    href: "/marketing"
  }, "Marketing Automation")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "text-xl font-semibold text-black "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/contact",
    className: "hover:text-red-500"
  }, "Contact Us"))))));
}

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  `, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":";AACA;IACI,SAAS;IACT;;gBAEY;IACZ,mCAAmC;IACnC,kCAAkC;EACpC;;EAEA;IACE;eACW;EACb","sourcesContent":["\nbody {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "../../node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../remote-app/src/Assets/1.jpg":
/*!**************************************!*\
  !*** ../remote-app/src/Assets/1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9e8bf80222cecba2b0b.jpg";

/***/ }),

/***/ "../remote-app/src/Assets/2.jpg":
/*!**************************************!*\
  !*** ../remote-app/src/Assets/2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99c2ec362d2ba7b59f73.jpg";

/***/ }),

/***/ "../remote-app/src/Assets/aboutus1.png":
/*!*********************************************!*\
  !*** ../remote-app/src/Assets/aboutus1.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f2232e1f66fdf707bfb.png";

/***/ }),

/***/ "../remote-app/src/Assets/appoinment.jpg":
/*!***********************************************!*\
  !*** ../remote-app/src/Assets/appoinment.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f9f309d3d677a06ee0a.jpg";

/***/ }),

/***/ "../remote-app/src/Assets/contact.jpg":
/*!********************************************!*\
  !*** ../remote-app/src/Assets/contact.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "358f47af4b87a50f78a5.jpg";

/***/ }),

/***/ "../remote-app/src/Assets/i1.png":
/*!***************************************!*\
  !*** ../remote-app/src/Assets/i1.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cde1977e14b97a1d0a5.png";

/***/ }),

/***/ "../remote-app/src/Assets/i2.png":
/*!***************************************!*\
  !*** ../remote-app/src/Assets/i2.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecc36931577aaa94ffda.png";

/***/ }),

/***/ "../remote-app/src/Assets/i3.png":
/*!***************************************!*\
  !*** ../remote-app/src/Assets/i3.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "349cc84c04ed0c16e50b.png";

/***/ }),

/***/ "../remote-app/src/Assets/i4.png":
/*!***************************************!*\
  !*** ../remote-app/src/Assets/i4.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d55b4b56c71b7cd8b1d.png";

/***/ }),

/***/ "../remote-app/src/Assets/i5.png":
/*!***************************************!*\
  !*** ../remote-app/src/Assets/i5.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "536859b59be7245bb1c7.png";

/***/ }),

/***/ "../remote-app/src/Assets/i6.png":
/*!***************************************!*\
  !*** ../remote-app/src/Assets/i6.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d63e9140c292ac115b9.png";

/***/ }),

/***/ "../remote-app/src/Assets/i7.png":
/*!***************************************!*\
  !*** ../remote-app/src/Assets/i7.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cfd8dfa6d386f6ee416.png";

/***/ }),

/***/ "../remote-app/src/Assets/i8.png":
/*!***************************************!*\
  !*** ../remote-app/src/Assets/i8.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecd144b0f42fd097313f.png";

/***/ }),

/***/ "../remote-app/src/Assets/newlogo.png":
/*!********************************************!*\
  !*** ../remote-app/src/Assets/newlogo.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec3b4ebd45a3466f1d62.png";

/***/ })

}]);
//# sourceMappingURL=src_entry_js.js.map