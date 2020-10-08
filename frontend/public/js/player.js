var video = document.getElementById('video');
var source = document.getElementById('source');

source.setAttribute('src', 'content/Series/Mr.Robot.Sociedade.Hacker.S01E01.720p.BluRay.5.1.x264.DUAL-WWW.BLUDV.COM.mkv');

video.appendChild(source);
video.play();

setTimeout(function() {  
    video.pause();

    source.setAttribute('src', 'http://www.tools4movies.com/trailers/1012/Despicable%20Me%202.mp4'); 

    video.load();
    video.play();
}, 3000);