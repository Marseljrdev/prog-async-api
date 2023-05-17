// SINTAXE - new Promise (resolve e reject)

interface User {
  id: string;
  nome: string;
  idade: number;
}

function obterUsuarioApi(id: string) {
  return new Promise<User>((resolve, reject) => {
    console.log("Chamada iniciada");
    setTimeout(() => {
      if (id !== "1") {
        reject(`O ${id} não é permitido`);
        return;
      }

      resolve({
        id,
        nome: "Marsel",
        idade: 25,
      });
    }, 3000);
  });
}

function imprimirUsuario(usuario: any) {
  console.log(usuario);
}

async function obterUserAsyncAwait() {
  try {
    let usuario = await obterUsuarioApi("1");
    usuario = await addIdade(usuario);
    usuario = await trocarNome(usuario);
    console.log(usuario);
  } catch (error) {
    console.log(error);
  }
}

function addIdade(usuario: any) {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      usuario.idade += 1;
      console.log("idade incrementada");
      resolve(usuario);
    }, 2000);
  });
}
function trocarNome(usuario: any) {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      usuario.nome += " Novo nome";
      console.log("nome alterado");
      resolve(usuario);
    }, 2000);
  });
}

obterUserAsyncAwait();
