window.disableScroll = function() {
    const widthScroll = window.innerWidth - document.body.offsetWidth
    document.body.dbscroll = window.scrollY
    document.body.style.cssText = `
    position: relative;
    overflow: hidden;
    height: 100vh;
    left: 0;
    top: ${-window.scrollY}px;
    width: 100%;
    padding-right: ${widthScroll}px;
    `
}

window.enableScroll = function() {
    document.body.style.cssText = `position: relative;`
    window.scroll({top: document.body.dbscroll})
}