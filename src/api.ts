import axios from "axios";
import { error } from "console";

const api = axios.create({
  baseURL: "https://reqres.in/api",
});

export async function listarUserAsyncAwait() {
  try {
    const result = await api.get("/asddhagb");
    if (result.status === 200) {
      console.log("A requisicao deu certo");
      console.log(result.data.data[0]);
    }
  } catch (error) {
    console.log("Ocorreu algum erro", error);
  }
}

export function listarUser() {
  api
    .get("/asddhagb")
    .then((result) => {
      if (result.status === 200) {
        console.log("A requisicao deu certo");
      }
      console.log(result.data.data[1]);
    })
    .catch((error) => {
      console.log("Ocorreu algum tipo de erro", error);
    });
}


