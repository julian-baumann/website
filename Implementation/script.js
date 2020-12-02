
const currentDate = new Date();
const year = currentDate.getFullYear();
console.info(`incredible, it's ${year} and we still don't have flying cars :(`);

const footerTextElement = document.getElementById("FooterText");
footerTextElement.innerHTML = `Copyright © Julian Baumann ${year}`;

const v = [
    "j6vypLEjLh8",
    "IdoD2147Fik",
    "dWnVUIeMcoI",
    "f0oM5xivl6Y",
    "S_A2yvxNY_M",
    "VIICn7U7VVk",
    "DRZ3F5VqseU",
    "T28LyXf8MlU",
    "H1fnLcva28g",
    "LZgeIReY04c",
    "iH1pVJiHiu0",
    "0TNSfe4OWzk",
    "hs5oLYiB2Cg",
    "pFjlW_OkMl8",
    "YSKF1Ka-qIc"
]

function DazzleMe()
{
    const random = v[Math.floor(Math.random() * v.length)];
    window.open(`https://www.youtube.com/watch?v=${random}`);
}