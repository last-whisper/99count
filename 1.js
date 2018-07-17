window.onload=function (ev) {
    var box=document.getElementById('box');
    var colors=["#ff3f40","#ff9441","#fde948","#46fe50","#44a9ff","#7b45ff","#cd44f4"];
    var boxWarpper=document.getElementById('box-warpper');
    var btn=document.getElementById('change');
    matrix(box,9)
    var onoff=true;
    btn.onclick=function (ev2) {
        if (onoff){
            onoff = !onoff;
            box.innerHTML='';
            matrix2(box,9)
        }else {
            onoff = !onoff;
            box.innerHTML='';
            matrix(box,9)
        }
    }

    boxWarpper.onmouseover=function () {
        boxWarpper.onmousemove=function (ev) {
            var disX=ev.clientX-this.offsetLeft
            var disY=ev.clientY-this.offsetTop
            setPerspective(this,disX,disY)
        }
    }
    
    function setPerspective(obj,disx,disy) {
        var x,y;
        var auls=document.getElementsByTagName('ul');
        x =disx/1430*3400-1000;
        y = disy/700*2000-700;

        if (x<700){
            for (var i=0;i<auls.length;i++){
                auls[i].style.zIndex=auls.length-i;
            }
        }else {
            for (var i=0;i<auls.length;i++){
                auls[i].style.zIndex=i;
            }
        }

        if (y<300){
            for (var i=0;i<auls.length;i++){
               for(var j=0;j<auls[i].children.length;j++){
                   auls[i].children[j].style.zIndex=auls[i].children.length-j;
               }
            }
        }else {
            for (var i=0;i<auls.length;i++){
                for(var j=0;j<auls[i].children.length;j++){
                    auls[i].children[j].style.zIndex=j;
                }
            }
        }
        obj.style.perspectiveOrigin=x+'px '+y+'px';

    }

    function matrix(obj,num) {

        for (var i=1;i<=num;i++){

            var ul=document.createElement('ul');
                ul.style.left = (i-1)*150+'px';
                ul.style.top = (i-1)*70+'px';
                ul.style.width = 150+'px';
                obj.appendChild(ul)
            for (var j=i;j<=num ;j++){

                var li=document.createElement('li');
                ul.appendChild(li)
                for (var k=0;k<6;k++){
                    var div=document.createElement('div');
                    if (k === 0 ){
                        div.innerHTML=i+'x'+j+'='+i*j;
                        div.style.backgroundColor=colors[Math.round(Math.random()*6)]
                    }

                    li.appendChild(div);

                }

            }

        }
    }

    function matrix2(obj,num) {

        for (var i=1;i<=num;i++){

            var ul=document.createElement('ul');

            ul.style.top = (i-1)*70+'px';
            ul.style.width = '100%';
            obj.appendChild(ul)
            for (var j=i;j<=num ;j++){

                var li=document.createElement('li');
                li.style.cssFloat='left';
                ul.appendChild(li)
                for (var k=0;k<6;k++){
                    var div=document.createElement('div');
                    if (k === 0 ){
                        div.innerHTML=i+'x'+j+'='+i*j;
                        div.style.backgroundColor=colors[Math.round(Math.random()*6)]
                    }

                    li.appendChild(div);

                }

            }

        }
    }




}