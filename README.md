```
javascript:(function(){
    var frame = document.createElement("iframe");
    frame.src = "https://www.youtube.com";
    frame.scrolling = "yes";
    frame.style.position = "fixed";
    frame.style.bottom = "10px";
    frame.style.left = "10px";
    frame.style.width = "600px"; /* Adjust the initial width as needed */
    frame.style.height = "400px"; /* Adjust the initial height as needed */
    frame.style.border = "none";
    frame.style.zIndex = "999999";
    frame.style.transform = "scale(0.8)"; /* Adjust the initial scale factor as needed */
    frame.style.transformOrigin = "0 0"; /* Set transform origin to top left corner */
    
    var xInput = document.createElement("input");
    xInput.type = "number";
    xInput.placeholder = "X coordinate";
    xInput.style.position = "fixed";
    xInput.style.bottom = "130px";
    xInput.style.right = "130px";
    xInput.style.padding = "5px";
    xInput.style.border = "1px solid #ccc";
    
    var yInput = document.createElement("input");
    yInput.type = "number";
    yInput.placeholder = "Y coordinate";
    yInput.style.position = "fixed";
    yInput.style.bottom = "100px";
    yInput.style.right = "130px";
    yInput.style.padding = "5px";
    yInput.style.border = "1px solid #ccc";
    
    var linkInput = document.createElement("input");
    linkInput.type = "text";
    linkInput.placeholder = "Enter URL";
    linkInput.style.position = "fixed";
    linkInput.style.bottom = "70px";
    linkInput.style.right = "130px";
    linkInput.style.width = "200px";
    linkInput.style.padding = "5px";
    linkInput.style.border = "1px solid #ccc";
    
    var confirmButton = document.createElement("button");
    confirmButton.innerHTML = "Confirm";
    confirmButton.style.position = "fixed";
    confirmButton.style.bottom = "40px";
    confirmButton.style.right = "130px";
    confirmButton.style.padding = "8px 15px";
    confirmButton.style.cursor = "pointer";
    confirmButton.style.border = "2px solid green";
    confirmButton.style.backgroundColor = "green";
    confirmButton.style.color = "#ffffff";
    confirmButton.style.borderRadius = "5px";
    
    confirmButton.addEventListener("click", function() {
        var newX = parseInt(xInput.value);
        var newY = parseInt(yInput.value);
        if (!isNaN(newX) && !isNaN(newY)) {
            frame.style.left = newX + "px";
            frame.style.bottom = newY + "px";
        }
        if (linkInput.value !== "") {
            frame.src = linkInput.value;
        }
    });

    var minimizeButton = document.createElement("button");
    minimizeButton.innerHTML = "Minimize";
    minimizeButton.style.position = "fixed";
    minimizeButton.style.bottom = "10px";
    minimizeButton.style.right = "10px";
    minimizeButton.style.padding = "8px 15px";
    minimizeButton.style.cursor = "pointer";
    minimizeButton.style.border = "2px solid red";
    minimizeButton.style.backgroundColor = "red";
    minimizeButton.style.color = "#ffffff";
    minimizeButton.style.borderRadius = "5px";
    
    minimizeButton.addEventListener("click", function() {
        if (frame.style.display === "none") {
            frame.style.display = "block";
            minimizeButton.innerHTML = "Minimize";
            xInput.style.display = "block";
            yInput.style.display = "block";
            linkInput.style.display = "block";
            confirmButton.style.display = "block";
        } else {
            frame.style.display = "none";
            minimizeButton.innerHTML = "Maximize";
            xInput.style.display = "none";
            yInput.style.display = "none";
            linkInput.style.display = "none";
            confirmButton.style.display = "none";
        }
    });

    document.body.appendChild(frame);
    document.body.appendChild(minimizeButton);
    document.body.appendChild(xInput);
    document.body.appendChild(yInput);
    document.body.appendChild(linkInput);
    document.body.appendChild(confirmButton);
})();
```
