AniLink = "";
BnrLink = 'null';

setTimeout(function() {
	AniLink = document.querySelector('.external-links > a').href;
	AniLink = AniLink.replace("https://anilist.co/anime/", "");
	AniLink = +AniLink
	
	fetchanimdata(AniLink)
}, 250);

// console.log(AniLink);

// document.querySelector(".navbar-brand img").src = "https://svgshare.com/i/15Sq.svg"







async function fetchanimdata(animid){
    var query = `
    query ($animeid: Int) {
        Media(id: $animeid) {
            bannerImage
        }
    }
    `;
    var variables = {
        animeid: animid
    };
    var url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };

    const response = await fetch(url, options);
    alanime = await response.json();
    // console.log(alanime);
    
    BnrLink = alanime.data.Media.bannerImage;
    
    if (BnrLink!=null) {
    	document.querySelector('.anime-cover').style.backgroundImage = "url(" + BnrLink + ")";
    }
}
