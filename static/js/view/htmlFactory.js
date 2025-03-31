export const htmlTemplates = {
  planetList: "planetList",
  planet: "planet",
};

export const builderFunctions = {
  [htmlTemplates.planetList]: planetListBuilder,
  [htmlTemplates.planet]: planetBuilder,
};

export function htmlFactory(template) {
  if (htmlTemplates.hasOwnProperty(template)) {
    return builderFunctions[template];
  }

  console.error("Undefined template: " + template);

  return () => {
    return "";
  };
}

function planetListBuilder(planetList) {
  return `
    <div class="container mt-3">
        <table class="table table-striped table-hover">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Climate</th>
        <th scope="col">Population</th>
        <th scope="col">URL</th>
        </tr>
    </thead>
    <tbody>
    ${planetList
      .map(
        (row, index) => `
            <tr>
            <td>${index + 1}</td>
            <td>${row.name}</td>
            <td>${row.climate}</td>
            <td>${row.population}</td>
            <td>${row.url}</td>
            </tr>
        `
      )
      .join("")}
    </tbody>
    </table>
</div>
`;
}

function planetBuilder(planet) {
  return `<div class="planet" data-planet-id="${planet.id}">${planet.title}</div>`;
}
