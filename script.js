let darkBg = document.createElement("div");
let whiteBg = document.createElement("div");
let welcome = document.createElement("h5");
let mainText = document.createElement("h1");
let mainTextDiv = document.createElement("div");
let mainSubText = document.createElement("h4");
let quoteBtn = document.createElement("button");
let learnMoreBtn = document.createElement("button");
let btnDiv = document.createElement("div");
let cardDiv = document.createElement("div");
let leftCard = document.createElement("div");
let middleCard = document.createElement("div");
let rightCard = document.createElement("div");
let leftCardIcon = document.createElement("img");
let leftCardTitle = document.createElement("h3");
let leftCardLine = document.createElement("div");
let leftCardDescription = document.createElement("p");
let middleCardIcon = document.createElement("img");
let middleCardTitle = document.createElement("h3");
let middleCardLine = document.createElement("div");
let middleCardDescription = document.createElement("p");
let rightCardIcon = document.createElement("img");
let rightCardTitle = document.createElement("h3");
let rightCardLine = document.createElement("div");
let rightCardDescription = document.createElement("p");
let advice = document.createElement("h6");
let whiteBgText = document.createElement("div");
let whiteBgTitle = document.createElement("h2");
let whiteBgDescription = document.createElement("p");
let inputBtn = document.createElement("div");
let input = document.createElement("input");
let btn = document.createElement("button");

darkBg.style.backgroundColor = "#252B42";
darkBg.style.display = "flex";
darkBg.style.justifyContent = "center";

// mainTextDiv.style.display = "flex";
// mainTextDiv.style.justifyContent = "center";
// mainTextDiv.style.margin = "auto";

welcome.innerHTML = "Welcome";
welcome.style.fontSize = "16px";
welcome.style.color = "#23A6F0";
welcome.style.fontFamily = "Montserrat";
welcome.style.fontWeight = "700";
welcome.style.margin = "220px 0px 40px";
welcome.style.display = "flex";
welcome.style.justifyContent = "center";

mainText.innerHTML = "Selling on the internet like a pro";
mainText.style.fontSize = "58px";
mainText.style.display = "flex";
mainText.style.justifyContent = "center";
mainText.style.margin = "auto";
mainText.style.color = "white";
mainText.style.fontFamily = "Montserrat";
mainText.style.textAlign = "center";
mainText.style.width = "542px";
mainText.style.marginBottom = "40px";

mainSubText.innerHTML =
  "We know how large objects will act, but things on a small scale just do not act that way.";
mainSubText.style.color = "white";
mainSubText.style.fontFamily = "Montserrat";
mainSubText.style.fontSize = "20px";
mainSubText.style.fontWeight = "400";
mainSubText.style.textAlign = "center";
mainSubText.style.width = "542px";
mainSubText.style.display = "flex";
mainSubText.style.justifyContent = "center";
mainSubText.style.margin = "auto";
mainSubText.style.marginBottom = "40px";

quoteBtn.innerHTML = "Get Quote Now";
quoteBtn.style.borderRadius = "5px";
quoteBtn.style.border = "none";
quoteBtn.style.color = "#FFFFFF";
quoteBtn.style.backgroundColor = "#23A6F0";
quoteBtn.style.width = "193px";
quoteBtn.style.height = "52px";
quoteBtn.style.fontFamily = "Montserrat";
quoteBtn.style.fontWeight = "700";
quoteBtn.style.textAlign = "center";
quoteBtn.style.fontSize = "14px";

learnMoreBtn.innerHTML = "Learn More";
learnMoreBtn.style.width = "193px";
learnMoreBtn.style.height = "52px";
learnMoreBtn.style.borderRadius = "5px";
learnMoreBtn.style.backgroundColor = "#252B42";
learnMoreBtn.style.border = "1px solid  #23A6F0";
learnMoreBtn.style.fontFamily = "Montserrat";
learnMoreBtn.style.fontSize = "14px";
learnMoreBtn.style.fontWeight = "700";
learnMoreBtn.style.color = "#23A6F0";
learnMoreBtn.style.letterSpacing = "0.2px";

btnDiv.style.display = "flex";
btnDiv.style.gap = "10px";
btnDiv.style.justifyContent = "center";
btnDiv.style.marginBottom = "120px";

cardDiv.style.display = "flex";
cardDiv.style.gap = "30px";
cardDiv.style.marginBottom = "80px";

leftCard.style.backgroundColor = "white";
leftCard.style.width = "328px";
leftCard.style.height = "292px";
leftCard.style.padding = "35px 40px";

middleCard.style.backgroundColor = "white";
middleCard.style.width = "328px";
middleCard.style.height = "292px";
middleCard.style.padding = "35px 40px";

rightCard.style.backgroundColor = "#23A6F0";
rightCard.style.width = "328px";
rightCard.style.height = "292px";
rightCard.style.padding = "35px 40px";

leftCardIcon.src = "./assets/fixed-width.svg";
leftCardTitle.innerHTML = "training Courses";
leftCardTitle.style.fontFamily = "Montserrat";
leftCardTitle.style.fontSize = "16px";
leftCardTitle.style.fontWeight = "700";
leftCardTitle.style.color = "#252B42";
leftCardTitle.style.margin = "20px 0";

leftCardLine.style.backgroundColor = "#E74040";
leftCardLine.style.width = "50px";
leftCardLine.style.height = "2px";
leftCardLine.style.border = "none";
leftCardLine.style.marginBottom = "20px";

leftCardDescription.innerHTML =
  "The gradual accumulation of information about atomic and small-scale behaviour...";
leftCardDescription.style.fontSize = "14px";
leftCardDescription.style.fontFamily = "Montserrat";
leftCardDescription.style.color = "#737373";
leftCardDescription.style.fontWeight = "400";
leftCardDescription.style.lineHeight = "20px";
leftCardDescription.style.letterSpacing = "0.2px";

middleCardIcon.src = "./assets/fixed-width (1).svg";
middleCardTitle.innerHTML = "2,769 online courses";
middleCardTitle.style.fontFamily = "Montserrat";
middleCardTitle.style.fontSize = "16px";
middleCardTitle.style.fontWeight = "700";
middleCardTitle.style.color = "#252B42";
middleCardTitle.style.margin = "20px 0";

middleCardLine.style.backgroundColor = "#E74040";
middleCardLine.style.width = "50px";
middleCardLine.style.height = "2px";
middleCardLine.style.border = "none";
middleCardLine.style.marginBottom = "20px";

middleCardDescription.innerHTML =
  "The gradual accumulation of information about atomic and small-scale behaviour...";
middleCardDescription.style.fontSize = "14px";
middleCardDescription.style.fontFamily = "Montserrat";
middleCardDescription.style.color = "#737373";
middleCardDescription.style.fontWeight = "400";
middleCardDescription.style.lineHeight = "20px";
middleCardDescription.style.letterSpacing = "0.2px";

rightCardIcon.src = "./assets/fixed-width (2).svg";
rightCardTitle.innerHTML = "training Courses";
rightCardTitle.style.fontFamily = "Montserrat";
rightCardTitle.style.fontSize = "16px";
rightCardTitle.style.fontWeight = "700";
rightCardTitle.style.color = "#FFFFFF";
rightCardTitle.style.margin = "20px 0";

rightCardLine.style.backgroundColor = "#FFFFFF";
rightCardLine.style.width = "50px";
rightCardLine.style.height = "2px";
rightCardLine.style.border = "none";
rightCardLine.style.marginBottom = "20px";

rightCardDescription.innerHTML =
  "The gradual accumulation of information about atomic and small-scale behaviour...";
rightCardDescription.style.fontSize = "14px";
rightCardDescription.style.fontFamily = "Montserrat";
rightCardDescription.style.color = "#FFFFFF";
rightCardDescription.style.fontWeight = "400";
rightCardDescription.style.lineHeight = "20px";
rightCardDescription.style.letterSpacing = "0.2px";

advice.innerHTML = "Practice Advice";
advice.style.margin = "160px 0px 10px 0px";
advice.style.fontFamily = "Montserrat";
advice.style.fontSize = "14px";
advice.style.fontWeight = "700";
advice.style.color = "#23A6F0";
advice.style.display = "flex";
advice.style.justifyContent = "center";
advice.style.margin = "auto";
advice.style.margin = "160px 0px 10px 0px";

whiteBgTitle.innerHTML = "Featured Products";
whiteBgTitle.style.display = "flex";
whiteBgTitle.style.justifyContent = "center";
whiteBgTitle.style.margin = "auto";
whiteBgTitle.style.fontFamily = "Montserrat";
whiteBgTitle.style.fontSize = "40px";
whiteBgTitle.style.fontWeight = "700";
whiteBgTitle.style.color = "#252B42";

whiteBgDescription.innerHTML =
  "Problems trying to resolve the conflict between </br> the two major realms of Classical physics: Newtonian mechanics ";
whiteBgDescription.style.textAlign = "center";
whiteBgDescription.style.fontFamily = "Montserrat";
whiteBgDescription.style.fontSize = "14px";
whiteBgDescription.style.fontWeight = "400";
whiteBgDescription.style.lineHeight = "20px";
whiteBgDescription.style.letterSpacing = "0.2px";
whiteBgDescription.style.color = "#737373";
whiteBgDescription.style.width = "469px";
whiteBgDescription.style.height = "40px";
whiteBgDescription.style.display = "flex";
whiteBgDescription.style.justifyContent = "center";
whiteBgDescription.style.margin = "auto";
whiteBgDescription.style.marginTop = "10px";
whiteBgDescription.style.marginBottom = "80px";
whiteBgDescription.style.textAlign = "center";

btn.innerHTML = "Subscribe";
btn.style.width = "117px";
btn.style.height = "58px";
btn.style.border = "none";
btn.style.color = "white";
btn.style.backgroundColor = "#23A6F0";
btn.style.borderTopRightRadius = "5px";
btn.style.borderBottomRightRadius = "5px";

inputBtn.style.display = "flex";
inputBtn.style.justifyContent = "center";
inputBtn.style.marginBottom = "120px";

input.style.width = "571px";
input.style.height = "58px";
input.placeholder = "Your Email";
input.style.paddingLeft = "20px";
input.style.border = "1px solid #E6E6E6";
input.style.borderRadius = "0px";
input.style.borderTopLeftRadius = "5px";
input.style.borderBottomLeftRadius = "5px";
input.style.backgroundColor = "#F9F9F9";
input.style.color = "#737373";
input.style.fontFamily = "Montserrat";
input.style.fontWeight = "400";
input.style.fontSize = "14px";

inputBtn.append(input);
inputBtn.append(btn);

whiteBgText.append(advice);
whiteBgText.append(whiteBgTitle);
whiteBgText.append(whiteBgDescription);

leftCard.append(leftCardIcon);
leftCard.append(leftCardTitle);
leftCard.append(leftCardLine);
leftCard.append(leftCardDescription);

middleCard.append(middleCardIcon);
middleCard.append(middleCardTitle);
middleCard.append(middleCardLine);
middleCard.append(middleCardDescription);

rightCard.append(rightCardIcon);
rightCard.append(rightCardTitle);
rightCard.append(rightCardLine);
rightCard.append(rightCardDescription);

cardDiv.append(leftCard);
cardDiv.append(middleCard);
cardDiv.append(rightCard);

mainTextDiv.append(welcome);
mainTextDiv.append(mainText);
mainTextDiv.append(mainSubText);

btnDiv.append(quoteBtn);
btnDiv.append(learnMoreBtn);

mainTextDiv.append(btnDiv);
mainTextDiv.append(cardDiv);
darkBg.append(mainTextDiv);

whiteBg.append(whiteBgText);
whiteBg.append(inputBtn);

document.body.append(darkBg);
document.body.append(whiteBg);
