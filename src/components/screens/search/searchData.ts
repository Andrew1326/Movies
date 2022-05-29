import { TSelectOption } from "../../../appTypes";

//* rating
export const getPossibleRating = (): number[] => {
    let arr: number[] = []
    for (let i = 1; i <= 10; i += 0.1) arr.push(+i.toFixed(1))

    return arr
}

//* genres
export const genres: string[] = ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film-Noir', 'Game-Show', 'History', 'Horror', 'Music', 'Musical', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']

//* companies
export const companies: string[] = ['20th Century Fox', 'Sony', 'Dream', 'Works', 'MGM', 'Paramount', 'Universal', 'Walt Disney', 'Warner Bros.']

//* countries
export const countries: TSelectOption[] = [
    {
        "name": "Afghanistan",
        "value": "af"
    },
    {
        "name": "Åland Islands",
        "value": "ax"
    },
    {
        "name": "Albania",
        "value": "al"
    },
    {
        "name": "Algeria",
        "value": "dz"
    },
    {
        "name": "American Samoa",
        "value": "as"
    },
    {
        "name": "Andorra",
        "value": "ad"
    },
    {
        "name": "Angola",
        "value": "ao"
    },
    {
        "name": "Anguilla",
        "value": "ai"
    },
    {
        "name": "Antarctica",
        "value": "aq"
    },
    {
        "name": "Antigua and Barbuda",
        "value": "ag"
    },
    {
        "name": "Argentina",
        "value": "ar"
    },
    {
        "name": "Armenia",
        "value": "am"
    },
    {
        "name": "Aruba",
        "value": "aw"
    },
    {
        "name": "Australia",
        "value": "au"
    },
    {
        "name": "Austria",
        "value": "at"
    },
    {
        "name": "Azerbaijan",
        "value": "az"
    },
    {
        "name": "Bahamas",
        "value": "bs"
    },
    {
        "name": "Bahrain",
        "value": "bh"
    },
    {
        "name": "Bangladesh",
        "value": "bd"
    },
    {
        "name": "Barbados",
        "value": "bb"
    },
    {
        "name": "Belarus",
        "value": "by"
    },
    {
        "name": "Belgium",
        "value": "be"
    },
    {
        "name": "Belize",
        "value": "bz"
    },
    {
        "name": "Benin",
        "value": "bj"
    },
    {
        "name": "Bermuda",
        "value": "bm"
    },
    {
        "name": "Bhutan",
        "value": "bt"
    },
    {
        "name": "Bolivia",
        "value": "bo"
    },
    {
        "name": "Bonaire, Sint Eustatius and Saba",
        "value": "bq"
    },
    {
        "name": "Bosnia and Herzegovina",
        "value": "ba"
    },
    {
        "name": "Botswana",
        "value": "bw"
    },
    {
        "name": "Bouvet Island",
        "value": "bv"
    },
    {
        "name": "Brazil",
        "value": "br"
    },
    {
        "name": "British Indian Ocean Territory",
        "value": "io"
    },
    {
        "name": "British Virgin Islands",
        "value": "vg"
    },
    {
        "name": "Brunei Darussalam",
        "value": "bn"
    },
    {
        "name": "Bulgaria",
        "value": "bg"
    },
    {
        "name": "Burkina Faso",
        "value": "bf"
    },
    {
        "name": "Burundi",
        "value": "bi"
    },
    {
        "name": "Cambodia",
        "value": "kh"
    },
    {
        "name": "Cameroon",
        "value": "cm"
    },
    {
        "name": "Canada",
        "value": "ca"
    },
    {
        "name": "Cape Verde",
        "value": "cv"
    },
    {
        "name": "Cayman Islands",
        "value": "ky"
    },
    {
        "name": "Central African Republic",
        "value": "cf"
    },
    {
        "name": "Chad",
        "value": "td"
    },
    {
        "name": "Chile",
        "value": "cl"
    },
    {
        "name": "China",
        "value": "cn"
    },
    {
        "name": "Christmas Island",
        "value": "cx"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "value": "cc"
    },
    {
        "name": "Colombia",
        "value": "co"
    },
    {
        "name": "Comoros",
        "value": "km"
    },
    {
        "name": "Congo",
        "value": "cg"
    },
    {
        "name": "Cook Islands",
        "value": "ck"
    },
    {
        "name": "Costa Rica",
        "value": "cr"
    },
    {
        "name": "Côte d'Ivoire",
        "value": "ci"
    },
    {
        "name": "Croatia",
        "value": "hr"
    },
    {
        "name": "Cuba",
        "value": "cu"
    },
    {
        "name": "Cyprus",
        "value": "cy"
    },
    {
        "name": "Czech Republic",
        "value": "cz"
    },
    {
        "name": "Democratic Republic of the Congo",
        "value": "cd"
    },
    {
        "name": "Denmark",
        "value": "dk"
    },
    {
        "name": "Djibouti",
        "value": "dj"
    },
    {
        "name": "Dominica",
        "value": "dm"
    },
    {
        "name": "Dominican Republic",
        "value": "do"
    },
    {
        "name": "Ecuador",
        "value": "ec"
    },
    {
        "name": "Egypt",
        "value": "eg"
    },
    {
        "name": "El Salvador",
        "value": "sv"
    },
    {
        "name": "Equatorial Guinea",
        "value": "gq"
    },
    {
        "name": "Eritrea",
        "value": "er"
    },
    {
        "name": "Estonia",
        "value": "ee"
    },
    {
        "name": "Ethiopia",
        "value": "et"
    },
    {
        "name": "Falkland Islands",
        "value": "fk"
    },
    {
        "name": "Faroe Islands",
        "value": "fo"
    },
    {
        "name": "Federated States of Micronesia",
        "value": "fm"
    },
    {
        "name": "Fiji",
        "value": "fj"
    },
    {
        "name": "Finland",
        "value": "fi"
    },
    {
        "name": "France",
        "value": "fr"
    },
    {
        "name": "French Guiana",
        "value": "gf"
    },
    {
        "name": "French Polynesia",
        "value": "pf"
    },
    {
        "name": "French Southern Territories",
        "value": "tf"
    },
    {
        "name": "Gabon",
        "value": "ga"
    },
    {
        "name": "Gambia",
        "value": "gm"
    },
    {
        "name": "Georgia",
        "value": "ge"
    },
    {
        "name": "Germany",
        "value": "de"
    },
    {
        "name": "Ghana",
        "value": "gh"
    },
    {
        "name": "Gibraltar",
        "value": "gi"
    },
    {
        "name": "Greece",
        "value": "gr"
    },
    {
        "name": "Greenland",
        "value": "gl"
    },
    {
        "name": "Grenada",
        "value": "gd"
    },
    {
        "name": "Guadeloupe",
        "value": "gp"
    },
    {
        "name": "Guam",
        "value": "gu"
    },
    {
        "name": "Guatemala",
        "value": "gt"
    },
    {
        "name": "Guernsey",
        "value": "gg"
    },
    {
        "name": "Guinea",
        "value": "gn"
    },
    {
        "name": "Guinea-Bissau",
        "value": "gw"
    },
    {
        "name": "Guyana",
        "value": "gy"
    },
    {
        "name": "Haiti",
        "value": "ht"
    },
    {
        "name": "Heard Island and McDonald Islands",
        "value": "hm"
    },
    {
        "name": "Holy See (Vatican City State)",
        "value": "va"
    },
    {
        "name": "Honduras",
        "value": "hn"
    },
    {
        "name": "Hong Kong",
        "value": "hk"
    },
    {
        "name": "Hungary",
        "value": "hu"
    },
    {
        "name": "Iceland",
        "value": "is"
    },
    {
        "name": "India",
        "value": "in"
    },
    {
        "name": "Indonesia",
        "value": "id"
    },
    {
        "name": "Iran",
        "value": "ir"
    },
    {
        "name": "Iraq",
        "value": "iq"
    },
    {
        "name": "Ireland",
        "value": "ie"
    },
    {
        "name": "Isle of Man",
        "value": "im"
    },
    {
        "name": "Israel",
        "value": "il"
    },
    {
        "name": "Italy",
        "value": "it"
    },
    {
        "name": "Jamaica",
        "value": "jm"
    },
    {
        "name": "Japan",
        "value": "jp"
    },
    {
        "name": "Jersey",
        "value": "je"
    },
    {
        "name": "Jordan",
        "value": "jo"
    },
    {
        "name": "Kazakhstan",
        "value": "kz"
    },
    {
        "name": "Kenya",
        "value": "ke"
    },
    {
        "name": "Kiribati",
        "value": "ki"
    },
    {
        "name": "Kuwait",
        "value": "kw"
    },
    {
        "name": "Kyrgyzstan",
        "value": "kg"
    },
    {
        "name": "Laos",
        "value": "la"
    },
    {
        "name": "Latvia",
        "value": "lv"
    },
    {
        "name": "Lebanon",
        "value": "lb"
    },
    {
        "name": "Lesotho",
        "value": "ls"
    },
    {
        "name": "Liberia",
        "value": "lr"
    },
    {
        "name": "Libya",
        "value": "ly"
    },
    {
        "name": "Liechtenstein",
        "value": "li"
    },
    {
        "name": "Lithuania",
        "value": "lt"
    },
    {
        "name": "Luxembourg",
        "value": "lu"
    },
    {
        "name": "Macao",
        "value": "mo"
    },
    {
        "name": "Madagascar",
        "value": "mg"
    },
    {
        "name": "Malawi",
        "value": "mw"
    },
    {
        "name": "Malaysia",
        "value": "my"
    },
    {
        "name": "Maldives",
        "value": "mv"
    },
    {
        "name": "Mali",
        "value": "ml"
    },
    {
        "name": "Malta",
        "value": "mt"
    },
    {
        "name": "Marshall Islands",
        "value": "mh"
    },
    {
        "name": "Martinique",
        "value": "mq"
    },
    {
        "name": "Mauritania",
        "value": "mr"
    },
    {
        "name": "Mauritius",
        "value": "mu"
    },
    {
        "name": "Mayotte",
        "value": "yt"
    },
    {
        "name": "Mexico",
        "value": "mx"
    },
    {
        "name": "Moldova",
        "value": "md"
    },
    {
        "name": "Monaco",
        "value": "mc"
    },
    {
        "name": "Mongolia",
        "value": "mn"
    },
    {
        "name": "Montenegro",
        "value": "me"
    },
    {
        "name": "Montserrat",
        "value": "ms"
    },
    {
        "name": "Morocco",
        "value": "ma"
    },
    {
        "name": "Mozambique",
        "value": "mz"
    },
    {
        "name": "Myanmar",
        "value": "mm"
    },
    {
        "name": "Namibia",
        "value": "na"
    },
    {
        "name": "Nauru",
        "value": "nr"
    },
    {
        "name": "Nepal",
        "value": "np"
    },
    {
        "name": "Netherlands",
        "value": "nl"
    },
    {
        "name": "Netherlands Antilles",
        "value": "an"
    },
    {
        "name": "New Caledonia",
        "value": "nc"
    },
    {
        "name": "New Zealand",
        "value": "nz"
    },
    {
        "name": "Nicaragua",
        "value": "ni"
    },
    {
        "name": "Niger",
        "value": "ne"
    },
    {
        "name": "Nigeria",
        "value": "ng"
    },
    {
        "name": "Niue",
        "value": "nu"
    },
    {
        "name": "Norfolk Island",
        "value": "nf"
    },
    {
        "name": "North Korea",
        "value": "kp"
    },
    {
        "name": "Northern Mariana Islands",
        "value": "mp"
    },
    {
        "name": "Norway",
        "value": "no"
    },
    {
        "name": "Oman",
        "value": "om"
    },
    {
        "name": "Pakistan",
        "value": "pk"
    },
    {
        "name": "Palau",
        "value": "pw"
    },
    {
        "name": "Palestinian Territory",
        "value": "ps"
    },
    {
        "name": "Panama",
        "value": "pa"
    },
    {
        "name": "Papua New Guinea",
        "value": "pg"
    },
    {
        "name": "Paraguay",
        "value": "py"
    },
    {
        "name": "Peru",
        "value": "pe"
    },
    {
        "name": "Philippines",
        "value": "ph"
    },
    {
        "name": "Poland",
        "value": "pl"
    },
    {
        "name": "Portugal",
        "value": "pt"
    },
    {
        "name": "Pitcairn",
        "value": "pn"
    },
    {
        "name": "Puerto Rico",
        "value": "pr"
    },
    {
        "name": "Qatar",
        "value": "qa"
    },
    {
        "name": "Republic of Macedonia",
        "value": "mk"
    },
    {
        "name": "Réunion",
        "value": "re"
    },
    {
        "name": "Romania",
        "value": "ro"
    },
    {
        "name": "Russia",
        "value": "ru"
    },
    {
        "name": "Rwanda",
        "value": "rw"
    },
    {
        "name": "Saint Barthélemy",
        "value": "bl"
    },
    {
        "name": "Saint Helena",
        "value": "sh"
    },
    {
        "name": "Saint Kitts and Nevis",
        "value": "kn"
    },
    {
        "name": "Saint Lucia",
        "value": "lc"
    },
    {
        "name": "Saint Martin (French part)",
        "value": "mf"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "value": "pm"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "value": "vc"
    },
    {
        "name": "Samoa",
        "value": "ws"
    },
    {
        "name": "San Marino",
        "value": "sm"
    },
    {
        "name": "Sao Tome and Principe",
        "value": "st"
    },
    {
        "name": "Saudi Arabia",
        "value": "sa"
    },
    {
        "name": "Senegal",
        "value": "sn"
    },
    {
        "name": "Serbia",
        "value": "rs"
    },
    {
        "name": "Seychelles",
        "value": "sc"
    },
    {
        "name": "Sierra Leone",
        "value": "sl"
    },
    {
        "name": "Singapore",
        "value": "sg"
    },
    {
        "name": "Slovakia",
        "value": "sk"
    },
    {
        "name": "Slovenia",
        "value": "si"
    },
    {
        "name": "Solomon Islands",
        "value": "sb"
    },
    {
        "name": "Somalia",
        "value": "so"
    },
    {
        "name": "South Africa",
        "value": "za"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "value": "gs"
    },
    {
        "name": "South Korea",
        "value": "kr"
    },
    {
        "name": "Spain",
        "value": "es"
    },
    {
        "name": "Sri Lanka",
        "value": "lk"
    },
    {
        "name": "Sudan",
        "value": "sd"
    },
    {
        "name": "Suriname",
        "value": "sr"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "value": "sj"
    },
    {
        "name": "Swaziland",
        "value": "sz"
    },
    {
        "name": "Sweden",
        "value": "se"
    },
    {
        "name": "Switzerland",
        "value": "ch"
    },
    {
        "name": "Syria",
        "value": "sy"
    },
    {
        "name": "Taiwan",
        "value": "tw"
    },
    {
        "name": "Tajikistan",
        "value": "tj"
    },
    {
        "name": "Tanzania",
        "value": "tz"
    },
    {
        "name": "Thailand",
        "value": "th"
    },
    {
        "name": "Timor-Leste",
        "value": "tl"
    },
    {
        "name": "Togo",
        "value": "tg"
    },
    {
        "name": "Tokelau",
        "value": "tk"
    },
    {
        "name": "Tonga",
        "value": "to"
    },
    {
        "name": "Trinidad and Tobago",
        "value": "tt"
    },
    {
        "name": "Tunisia",
        "value": "tn"
    },
    {
        "name": "Turkey",
        "value": "tr"
    },
    {
        "name": "Turkmenistan",
        "value": "tm"
    },
    {
        "name": "Turks and Caicos Islands",
        "value": "tc"
    },
    {
        "name": "Tuvalu",
        "value": "tv"
    },
    {
        "name": "U.S. Virgin Islands",
        "value": "vi"
    },
    {
        "name": "Uganda",
        "value": "ug"
    },
    {
        "name": "Ukraine",
        "value": "ua"
    },
    {
        "name": "United Arab Emirates",
        "value": "ae"
    },
    {
        "name": "United Kingdom",
        "value": "gb"
    },
    {
        "name": "United States",
        "value": "us"
    },
    {
        "name": "United States Minor Outlying Islands",
        "value": "um"
    },
    {
        "name": "Uruguay",
        "value": "uy"
    },
    {
        "name": "Uzbekistan",
        "value": "uz"
    },
    {
        "name": "Vanuatu",
        "value": "vu"
    },
    {
        "name": "Venezuela",
        "value": "ve"
    },
    {
        "name": "Vietnam",
        "value": "vn"
    },
    {
        "name": "Wallis and Futuna",
        "value": "wf"
    },
    {
        "name": "Western Sahara",
        "value": "eh"
    },
    {
        "name": "Yemen",
        "value": "ye"
    },
    {
        "name": "Zambia",
        "value": "zm"
    },
    {
        "name": "Zimbabwe",
        "value": "zw"
    }
]