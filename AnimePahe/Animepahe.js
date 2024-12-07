AniLink = '';
BnrLink = 'null';

setTimeout(function () {
    AniLink = document.querySelector('.external-links > a').href;
    AniLink = AniLink.replace('https://anilist.co/anime/', '');
    AniLink = +AniLink;

    fetchanimdata(AniLink);
}, 250);

// console.log(AniLink);

// document.querySelector(".navbar-brand img").src = "https://svgshare.com/i/15Sq.svg"

async function fetchanimdata(animid) {
    var query = `
    query ($animeid: Int) {
        Media(id: $animeid) {
            bannerImage
        }
    }
    `;
    var variables = {
        animeid: animid,
    };
    var url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables,
            }),
        };

    const response = await fetch(url, options);
    alanime = await response.json();
    // console.log(alanime);

    BnrLink = alanime.data.Media.bannerImage;

    if (BnrLink != null) {
        document.querySelector('.anime-cover').style.backgroundImage =
            'url(' + BnrLink + ')';
    }
}

x = document.querySelector('input[name="q"]');

document.body.onload = function () {
    document.querySelector('.click-to-load').click();
    // y = document.querySelector("iframe.embed-responsive-item")
    // y.focus();
    setTimeout(()=>{
        document.querySelector('iframe.embed-responsive-item').focus();
    },1000)
};

// Animepahe API
// https://animepahe.ru/api?m=search&l=12&q=march

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.ctrlKey && evt.keyCode == 75) {
        evt.preventDefault();
        x.focus();
    }
    else if (evt.altKey && evt.keyCode == 65) {
        window.location.href = 'https://animepahe.ru/a/5515';
    }
    else if (evt.altKey && evt.keyCode == 66) {
        window.location.href = 'https://animepahe.ru/a/5436';
    }
    else if (evt.altKey && evt.keyCode == 67) {
        window.location.href = 'https://animepahe.ru/a/5457';
    }
    else if (evt.keyCode == 188) {
        document.querySelector('.prequel').firstElementChild.click();
    }
    else if (evt.keyCode == 190) {
        document.querySelector('.sequel').firstElementChild.click();
    }
    else if (evt.altKey && evt.keyCode == 77) {
        window.location.href = 'https://animepahe.ru/a/1360';
    }
    else if (evt.altKey && evt.keyCode == 78) {
        window.location.href = 'https://animepahe.ru/a/2330';
    }
};
