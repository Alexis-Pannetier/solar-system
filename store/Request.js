// All stars
export async function getAllStar() {
  return fetch('https://api.le-systeme-solaire.net/rest/bodies/')
    .then((response) => response.json())
    .then((json) => json.bodies)
}

// star by id
export async function getStar(id) {
  return fetch('https://api.le-systeme-solaire.net/rest/bodies/'+id)
    .then((response) => response.json())
    .then((json) => json)
}
