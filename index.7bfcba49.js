function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}var t=document.querySelector("table"),e=t.tHead.rows[0],n=t.tBodies[0],o=t.tBodies[0].rows;function a(r){return+r.replace(/[^0-9]/g,"")}e.addEventListener("click",function(t){if("TH"===t.target.tagName){var e=t.target.innerText.toLowerCase(),i=t.target.cellIndex,u=[],c=!0,l=!1,f=void 0;try{for(var s,y=o[Symbol.iterator]();!(c=(s=y.next()).done);c=!0){var d=s.value;u.push(d.cells[i])}}catch(r){l=!0,f=r}finally{try{c||null==y.return||y.return()}finally{if(l)throw f}}(function(t,e){var n=function(t){if(Array.isArray(t))return r(t)}(t)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();switch(e){case"name":case"position":n.sort(function(r,t){return r.innerText.localeCompare(t.innerText)});break;case"age":n.sort(function(r,t){return+r.innerText-+t.innerText});break;case"salary":n.sort(function(r,t){return a(r.innerText)-a(t.innerText)})}return n})(u,e).map(function(r){return r.closest("tr")}).forEach(function(r){return n.append(r)})}});
//# sourceMappingURL=index.7bfcba49.js.map
