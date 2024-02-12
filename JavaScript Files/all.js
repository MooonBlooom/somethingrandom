let colorCSSOld = document.getElementById("colors").href;
// Creating a cookie (if the user is ok with it)
if(localStorage.getItem("userPick") == null)
{
    console.log("This person hasn't chosen an option yet.");
    let userPick = confirm("This website uses cookies to make sure your experience is the best it can possibly be. Are you ok with this?");
    let cookieChange = "Click the 'Reset Cookie Choice' button and refresh if you change your mind.";
    if(userPick == false)
    {
        alert("That's ok!\n" + cookieChange);
        localStorage.setItem("userPick", "no");
    }
    else
    {
        alert("Ok, yay!\n" + cookieChange);
        localStorage.setItem("userPick", "yes");
        localStorage.setItem("mode", "light");
    }
}
else
{
    console.log("Hey, friendo!");
    console.log("Option chosen: " + localStorage.getItem("userPick"));
    if(localStorage.getItem("userPick") == "yes")
    {
        console.log("Mode: " + localStorage.getItem("mode"));
        if(localStorage.getItem("mode") == "light")
        {
            document.getElementById("colors").href = colorCSSOld;
            console.log("You are visiting this page for the first time and I set it to light for u.");
        }
        else if(localStorage.getItem("mode") == "dark")
        {
            document.getElementById("colors").href = "";
            console.log("You are visiting this page for the first time and I set it to dark for u.");
        }
    }
}

// Setting up the advertisement
// In theses first two lines we're getting the name of the current page
// The contact.html page should not have an ad as to not obscure the form from
// the reader's view.
let path = window.location.pathname;
let page = path.split("/").pop();
if(page != "contact.html")
{
    let random = Math.floor(Math.random() * 6);
    decideAd(random);
    let adCloseButton = document.getElementById("x");
    adCloseButton.addEventListener("click", closeAd);
}

// Setting up the light and dark mode buttons
let lightButton = document.getElementById("lightModeButton");
let darkButton = document.getElementById("darkModeButton");
lightButton.addEventListener("click", makeLight);
darkButton.addEventListener("click", makeDark);

function decideAd(random)
{
    let adImg = document.getElementById("ad_img");
    let adLink = document.getElementById("ad_link");
    if(random == 0)
    {
        adImg.src = "../Images/ads/coastal_ad.jpg";
        adLink.href = "https://www.coastal.edu/index.php";
    }
    else if(random == 1)
    {
        adImg.src = "../Images/ads/troye_ad.jfif";
        adLink.href = "https://www.troyesivan.com/";
    }
    else if(random == 2)
    {
        adImg.src = "../Images/ads/aj_ad.jfif";
        adLink.href = "https://classic.animaljam.com/en";
    }
    else if(random == 3)
    {
        adImg.src = "../Images/ads/trans_tape_ad.jpg";
        adLink.href = "https://transtape.life/";
    }
    else if(random == 4)
    {
        adImg.src = "../Images/ads/sunbelt_ad.jpg";
        adLink.href = "https://www.sunbeltrentals.com/";
    }
    else
    {
        adImg.src = "../Images/ads/box_jelly_ad.png";
        adLink.href = "https://www.youtube.com/watch?v=xBgF8l08SR4";
    }
}

function closeAd()
{
    let ad = document.getElementById("ad");
    ad.classList.add("closed");
}

function makeLight()
{
    document.getElementById("colors").href = colorCSSOld;
    localStorage.setItem("mode", "light");
}

function makeDark()
{
    document.getElementById("colors").href = "";
    localStorage.setItem("mode", "dark");
}