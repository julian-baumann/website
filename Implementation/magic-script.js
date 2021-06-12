let playlistLength = 5;
let magicConfiguration;
let index = 0;

function Home()
{
    window.open("/", "_self");
}

function GetJsonData()
{
    return new Promise((resolve) =>
    {
        fetch("magic-configuration.json").then((response) =>
        {
            response.json().then((result) =>
            {
                magicConfiguration = result;
                index = Math.floor(Math.random() * magicConfiguration.length);
                resolve();
            })
        })
    })
}

function DazzleMe()
{
    const videoFrame = document.getElementById("VideoFrame");

    videoFrame.src = `https://www.youtube.com/embed/?list=${magicConfiguration.playlistId}&index=${index}&autoplay=1`;
}

function OpenVideo()
{
    if (magicConfiguration)
    {
        window.open(`https://www.youtube.com/playlist?list=${magicConfiguration.playlistId}`, "_self");
    }
}

GetJsonData().then(DazzleMe);
