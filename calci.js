document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const buttonContent = button.textContent;
        const displayContent = display.textContent;
        switch (buttonContent) {
          case "AC":
            display.textContent = "0";
            break;
          case "<-":
            display.textContent = displayContent.slice(0, -1);
            break;
          case "pi":
            const pi = 3.14;
            display.textContent =
              displayContent === "0" ? pi : displayContent + pi;
            break;
          case "=":
            try {
              display.textContent = eval(displayContent);
            } catch (err) {
              display.textContent = err;
            }
            break;
          default:
            display.textContent =
              displayContent === "0"
                ? buttonContent
                : displayContent + buttonContent;
            break;
        }
        console.log(buttonContent);
        console.log(displayContent);
      });
    });
  });