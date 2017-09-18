// set html element background

export default function setHTMLBackground(imgStyleNr) {
    const htmlElementId = "allHTML"
    let bkgStr = "background"
    document.getElementById(htmlElementId).className = bkgStr + imgStyleNr
}

