window.addEventListener('load', function() {
    fixEmbedHeight();
    createCountUps();
});

window.addEventListener('resize', function() {
    fixEmbedHeight();
})

function fixEmbedHeight() {
    document.querySelectorAll('.screamable-embeds iframe').forEach(function (embed) {
        embed.height = (Math.ceil(embed.clientWidth * 9 / 16)) + 'px';
    });
}


function createCountUps() {
    var elements = document.querySelectorAll('.countup');
    setInterval(function() {
        elements.forEach(function (el) {
            var diff = Date.now() - new Date(parseInt(el.attributes['data-timestamp'].value));
            console.log(el.attributes['data-timestamp'].value)
            el.innerHTML = formatDateDif(diff);
        }, 500);
    })
}

function formatDateDif(diff) {
    var seconds = Math.floor(diff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    return `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`;
}
