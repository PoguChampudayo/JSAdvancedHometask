export function sortInfo(obj, firstFields) {
  const result = [];
  const info = { ...obj };
  /* eslint-disable-next-line */
  for (const field of firstFields) {
    result.push({ key: field, value: info[field] });
    delete info[field];
  }
  /* eslint-disable-next-line */
  for (const rest of Object.keys(info).sort()) {
    result.push({ key: rest, value: info[rest] });
  }
  //   console.log(result)
  return result;
}

// sortInfo({name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}, ["name", "level"])

export function getSpecials(character) {
  const result = [];
  const { special } = character;
  /* eslint-disable-next-line */
  for (let ability of special) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = ability;
    result.push({
      id, name, description, icon,
    });
  }
  return result;
}
