import './style.css'

const   COLOR_PALETTE = {
  "#DE3163": "Bright Pink",
  "#FFBF00": "Sunglow",
  "#7FFFD4": "Emerald",
  "#007BA7": "Blue (NCS)",
  "#008B8B": "Midnight Green",
};

const generateOptions = () => {
  const colorOptions = Object.keys(COLOR_PALETTE).map((color) => {
    const colorPickerSelect = document.getElementById("color-picker");
    const option = document.createElement("option");
    option.value = color;
    option.textContent = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.getElementById("color-picker");
  const colorName = document.getElementById("color-name");
  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    const colorNameText = `${newColor} | ${COLOR_PALETTE[newColor]}`;
    colorName.textContent = COLOR_PALETTE[newColor] ? colorNameText : "-";
  });
};

generateOptions();
addEventListenerToColorPicker();