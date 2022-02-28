const n = "०१२३४५६७८९";
const nN = n.split("");

export const getNepaliNumber = (n, d = false, c = "") => {
  let sN = String(n);
  if (!d) sN = sN.replace(/[^\d.]/g, "");
  if (!d) sNN = getComma(sNN, c);
  let sNN = "";
  for (let i = 0; i < sN.length; i++) {
    sNN += nN[parseInt(sN[i])] || sN[i];
  }
  return sNN;
};

export const getEnglishNumber = (n, d = false, c = "") => {
  let sN = String(n);
  let sNN = "";
  if (!d) sN = sN.replace(/[^\०१२३४५६७८९.]/g, "");
  for (let i = 0; i < sN.length; i++) {
    if (nN.indexOf(sN[i]) > -1) sNN += nN.indexOf(sN[i]);
    else sNN += sN[i];
  }
  if (!d) sNN = getComma(sNN, c);
  return sNN;
};

export const getComma = (sNN, c) => {
  if (c) {
    if (c === "np") {
      sNN = new Intl.NumberFormat("en-IN").format(sNN);
    } else if (c === "en") {
      sNN = new Intl.NumberFormat("en-US").format(sNN);
    }
  }
  return sNN;
};
