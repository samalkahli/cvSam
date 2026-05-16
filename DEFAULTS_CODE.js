
let cvData = localStorage.getItem('sam_cv_v2');
if(cvData) {
    let jsCode = "const DEFAULTS = " + JSON.stringify(JSON.parse(cvData), null, 2) + ";";
    let blob = new Blob([jsCode], {type: "text/javascript"});
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "DEFAULTS_CODE.js";
    link.click();
} else {
    alert("لا توجد بيانات محفوظة!");
}