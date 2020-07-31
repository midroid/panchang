const MONTHS = [
	"चैत्र",
	"वैशाख",
	"ज्येष्ठ",
	"आषाढ",
	"श्रावण",
	"भाद्रपद",
	"आश्विन:",
	"कार्तिक:",
	"मार्गशीर्ष:",
	"पौष:",
	"माघ:",
	"फाल्गुन:"
];

const TITHIYA = [
	"प्रतिपदा",
	"द्वितीया",
	"तृतीया",
	"चतुर्थी",
	"पंचमी",
	"षष्ठी",
	"सप्तमी",
	"अष्टमी",
	"नवमी",
	"दशमी",
	"एकादशी",
	"द्वादशी",
	"त्रयोदशी",
	"चतुर्दशी",
	"पूर्णिमा",
	"अमावस्या"
];

const PAKSH = [
	"शुक्ल",
	"कृष्ण"
];

const YUG = [
	"सत्य",
	"त्रेता",
	"द्वापर",
	"कलि"
]

exports.getMonths = function() {
	return MONTHS;
}

exports.getTithiya = function() {
	return TITHIYA;
}

exports.getAllPaksh = function() {
	return PAKSH;
}

exports.getAllYug = function() {
	return YUG
}
