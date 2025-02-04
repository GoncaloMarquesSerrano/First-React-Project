const url = process.env.REACT_APP_SHEETY_URL;

export async function post(data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.error("Erro ao realizar o POST:", error.message);
    throw error;
  }
}

export async function get() {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error("Erro ao realizar o GET:", error.message);
    throw error;
  }
}

export async function put(id, item) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    console.log("Item atualizado:", data);
  } catch (error) {
    console.error("Erro ao atualizar item:", error);
  }
}

export async function del(id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("Item apagado com sucesso");
    } else {
      console.error("Erro ao apagar item:", response.statusText);
    }
  } catch (error) {
    console.error("Erro ao apagar item:", error);
  }
}

export async function checkUserExists(Logindata) {
  try {
    const data = await get(); 
    const { user, password } = Logindata.folha1;

    const userExists = data.folha1.some(
      (item) => item.user === user && item.password === password
    );
    return userExists;
  } catch (error) {
    console.error("Erro ao verificar se o utilizador existe:", error);
    throw error;
  }
}

export async function checkRepeatedUser(user) {
  try{
    const data = await get();
    const userExists = data.folha1.some((item) => item.user === user);
    return userExists;
  } catch (error) {
    console.error("Erro ao verificar se o utilizador existe:", error);
    throw error;
  }
}
