function Home()
{
    window.open("https://julian-baumann.com", "_self");
}

const ids = [
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

const random = ids[Math.floor(Math.random() * ids.length)];

function DazzleMe()
{
    const videoFrame = document.getElementById("VideoFrame");
    videoFrame.src = `https://www.youtube.com/embed/${random}?autoplay=1`;
}

function OpenVideo()
{
    window.open(`https://www.youtube.com/watch?v=${random}`, "_self");
}

DazzleMe();