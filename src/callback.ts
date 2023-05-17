// //SINTAXE COM .CALL - callback hell

// function obterUsuarioApi(callback: any) {
//   console.log("Chamada iniciada...");

//   setTimeout(() => {
//     callback.call(null, {
//       id: 1,
//       idade: 25,
//       nome: "Marsel",
//     });
//   }, 3000);

//   console.log("Chamada finalizada");
// }

// function imprimirUsuario(usuario: any) {
//   console.log(usuario);
// }

// function addIdade(usuario: any, callback: any) {
//   setTimeout(() => {
//     usuario.idade += 1;
//     console.log("idade incrementada");

//     callback(usuario);
//   }, 2000);
// }
// function trocarNome(usuario: any, callback: any) {
//   setTimeout(() => {
//     usuario.nome += " Novo nome";
//     console.log("nome alterado");

//     callback(usuario);
//   }, 2000);
// }

// obterUsuarioApi((usuario: any) => {
//   addIdade(usuario, (usuario: any) => {
//     addIdade(usuario, (usuario: any) => {
//       trocarNome(usuario, imprimirUsuario);
//     });
//   });
// });
