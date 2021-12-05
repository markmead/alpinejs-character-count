function n(l){l.directive("count",(r,{expression:i,modifiers:o},{evaluateLater:u,effect:a})=>{let t=o[0]||!1,c=u(i);a(()=>{c(f=>{let e=f.length;r.innerText=t?t-e:e})})})}var d=n;export{d as default};
