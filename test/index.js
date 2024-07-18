function showAlert(text) {
    const alertBox = document.createElement("div");
    alertBox.style.position = "fixed";
    alertBox.style.bottom = "45px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.background = "rgb(7, 214, 34, 0.8)";
    alertBox.style.padding = "10px";
    alertBox.style.borderRadius = "5px";
    alertBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    alertBox.style.zIndex = "1000";
    alertBox.innerHTML = text;
  
    document.body.appendChild(alertBox);
  
    setTimeout(() => {
      alertBox.style.opacity = "0";
    }, 3000);
  
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 3500);
}