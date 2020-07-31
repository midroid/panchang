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

const PAKSHO = [
	"शुक्ल",
	"कृष्ण"
];

exports.getMonths = function() {
	return MONTHS;
}

exports.getMonths = function() {
	return TITHIYA;
}

exports.getPaksho = function() {
	return PAKSHO;
}
