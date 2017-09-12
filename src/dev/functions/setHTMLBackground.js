// set html element background

function setHTMLBackground(imgStyleNr) {
    const htmlElementId = "allHTML"
    let bkgStr = "background"
    document.getElementById(htmlElementId).className = bkgStr + imgStyleNr
}

export default setHTMLBackground
