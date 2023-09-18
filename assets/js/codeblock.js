var codeBlocks = document.querySelectorAll("pre.highlight")

codeBlocks.forEach(function (codeBlock) {
  var copyButton = document.createElement("button")
  copyButton.className = "btn btn-primary"
  copyButton.type = "button"
  copyButton.ariaLabel = "Copy code to clipboard"
  copyButton.innerText = "Copy"

  codeBlock.append(copyButton)

  copyButton.addEventListener("click", function () {
    var code = codeBlock.querySelector("code").innerText.trim()
    window.navigator.clipboard.writeText(code)

    copyButton.innerText = "Nice! You copied that shit."
    var fourSeconds = 3000

    setTimeout(function () {
      copyButton.innerText = "Copy"
    }, fourSeconds)
  })
})
