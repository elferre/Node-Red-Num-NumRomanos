
module.exports = function(RED) {

    function NumRomano(config){
        RED.nodes.createNode(this,config);
        var node=this;
        console.log("Inicializando.....");

        node.on('input',function(msg){
            msg.payload =  convertirRomano(parseInt(msg.payload),config);
            if (config.config==true){
               msg.config = config;
            }
            node.send(msg);
        });

        node.on('close',function (){
            console.log("Cerrando.....");
        });

    }

RED.nodes.registerType("num-romano",NumRomano);
}

function convertirRomano(num,kk){ 

    var conversion = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    };

    var romano = '';
    for(i in conversion){ 
        while(num >= conversion[i]){ 
            romano += i;
            num -= conversion[i]; 
        } 
    } 
    return romano; 

}

/* for(j=1;j<101;j++){
    console.log("El número "+ j + " en romano es: "+convertirRomano(j));
} */
