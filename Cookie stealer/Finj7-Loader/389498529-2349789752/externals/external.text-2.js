var objectfile = {};

function getfilecontent(Url){
    var cli = new XMLHttpRequest();

    cli.onload = function(){
         if((this.status == 200 || this.status == 0) && this.responseText != null) {
        var r = this.responseText;
        var b=(r.indexOf('\n')?'\n':r.indexOf('\r')?'\r':'');
        if(b.length){
        if(b=='\n'){var j=r.toString().replace(/\r/gi,'');}else{var j=r.toString().replace(/\n/gi,'');}
        r=j.split(b);
        r=r.filter(function(val){if( val == '' || val == NaN || val == undefined || val == null ){return false;}return true;});
        r = r.map(f => f.trim());
        }
        if(r.length > 0){
            for(var i=0; i<r.length; i++){
                var m = r[i].split(':');
                if(m.length>1){
                        var mname = m[0];
                        var n = m.shift();
                        var ivalue = m.join(':');
                        objectfile[mname]=ivalue;
                }
            }
        }
        }
    }
cli.open("GET", url);
cli.send();
}