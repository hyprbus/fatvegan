// set html element background
// 0 = none, 1... = predefined images in css

function setHTMLBackground(imgStyleNr) {
    const htmlElementId = "allHTML";
    const noBkg = "noBackground";
    let bkgStr = "background";
    if (imgStyleNr === 0) {
        bkgStr = noBkg;
    } else {
        bkgStr = bkgStr + imgStyleNr;
    }
    document.getElementById(htmlElementId).className = bkgStr;
}

export default setHTMLBackground;
