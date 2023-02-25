//buscar links salvos.
export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linkSaves = JSON.parse(myLinks) || [];

  return linkSaves;
}
//Salvar no storage.
export async function saveLink(key, newLink) {
  let linkStored = await getLinksSave(key);

  const hasLink = linkStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log("link já existe");
    return;
  }

  linkStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linkStored));
  console.log("Link salvo com sucesso.");
}

// deletar link salvo
export function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("@encurtaLink", JSON.stringify(myLinks));
  console.log("LINK DELETADO COM SUCESSO!");

  return myLinks;
}
