// Load the YouTube IFrame Player API asynchronously
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    // Create the YouTube player once the API code downloads
    player = new YT.Player('player-container', {
        height: '360',
        width: '640',
        videoId: '', // This will be set dynamically
        playerVars: {
            'autoplay': 0, // Auto-play disabled
            'controls': 1, // Show player controls
            'rel': 0, // No related videos at end
            'showinfo': 0 // Hide video title/info
        }
    });
}

function loadVideo() {
    var videoLink = document.getElementById('video-link').value;
    var videoId = getYouTubeID(videoLink);

    if (videoId) {
        player.loadVideoById(videoId);
    } else {
        alert('Invalid YouTube URL');
    }
}

function getYouTubeID(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return false;
    }
}
