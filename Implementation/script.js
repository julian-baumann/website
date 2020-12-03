
const currentDate = new Date();
const year = currentDate.getFullYear();
console.info(`incredible, it's ${year} and we still don't have flying cars :(`);

const footerTextElement = document.getElementById("FooterText");
footerTextElement.innerHTML = `Copyright © Julian Baumann ${year}`;
