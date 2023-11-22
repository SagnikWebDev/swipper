const wrapper = document.querySelector(".wrapper");
const box = document.querySelectorAll(".box");
let curnum = 0;
let curnumforbtn = 0;

/* if you use auto silde feature then uncomment these codes it will
 slide automatically but when you click a btn or swipe pic your mobile then
 it will stop then automation... */

// let autosilde;
// window.addEventListener("load", () => {
//   autosilde = setInterval(() => {
//     if (curnumforbtn < 4) {
//       const currentelement = box[curnumforbtn];
//       const nextelement = box[curnumforbtn + 1];
//       currentelement.style.width = "0";
//       nextelement.style.width = "300px";
//       curnumforbtn++;
//     } else {
//       const currentelement = box[4];
//       const nextelement = box[0];
//       currentelement.style.width = "0";
//       nextelement.style.width = "300px";
//       curnumforbtn = 0;
//     }
//   }, 5000);
// });
wrapper.addEventListener("touchmove", (e) => {
  if (e.isTrusted) {
    if (e.target.className.includes("second")) {
      curnum = Number(e.target.id) - 1;
      if (curnum < 4) {
        const currentelement = box[curnum];
        const nextelement = box[curnum + 1];
        currentelement.style.width = "0";
        nextelement.style.width = "300px";
        curnumforbtn = curnum + 1;
        console.log(curnum);
      }
    }
    if (e.target.className.includes("first")) {
      curnum = Number(e.target.id) - 1;
      if (curnum <= 4 && curnum != 0) {
        const currentelement = box[curnum - 1];
        const nextelement = box[curnum];
        currentelement.style.width = "300px";
        nextelement.style.width = "0";
        curnumforbtn = curnum - 1;
        console.log(curnum);
      }
    }
  }
});
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
btn1.addEventListener("click", (e) => {
  if (curnumforbtn <= 4 && curnumforbtn != 0) {
    const currentelement = box[curnumforbtn - 1];
    const nextelement = box[curnumforbtn];
    currentelement.style.width = "300px";
    nextelement.style.width = "0";
    curnumforbtn--;
  }
  // clearInterval(autosilde);
});
btn2.addEventListener("click", (e) => {
  if (curnumforbtn < 4) {
    const currentelement = box[curnumforbtn];
    const nextelement = box[curnumforbtn + 1];
    currentelement.style.width = "0";
    nextelement.style.width = "300px";
    curnumforbtn++;
  }
  // clearInterval(autosilde);
});
// wrapper.addEventListener("touchstart", () => {
//   clearInterval(autosilde);
// });
