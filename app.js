
const { crearArchivo,listarTabla } = require("./multiplicar/multiplicar");
const argv= require('./config/cfg').argv
// let argv2=process.argv;
// let proc = process.argv[2];
// let base = proc.split("=")[1];
// console.log(argv);
// console.log(argv.base);
// console.log(argv.limite);


let comando=argv._[0];
switch(comando){
    case 'listar':listarTabla(argv.base,argv.limite);
    break;
    case 'crear':crearArchivo(argv.base)
    .then(archivo => {
      console.log("se creo el archivo", archivo);
    })
    .catch(err => {
      console.log(err);
    });break;
    default:console.log('comando no reconocido');
}

