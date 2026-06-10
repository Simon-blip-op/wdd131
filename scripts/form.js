const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {

    const select = document.querySelector("#product");

    if (select) {
        products.forEach(product => {

            const option = document.createElement("option");

            option.value = product.id;
            option.textContent = product.name;

            select.appendChild(option);
        });
    }

    const year = document.querySelector("#currentyear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const lastModified = document.querySelector("#lastModified");

    if (lastModified) {
        lastModified.textContent =
            `Last Modified: ${document.lastModified}`;
    }

    const count = document.querySelector("#count");

    if (count) {

        let reviewCount =
            Number(localStorage.getItem("reviewCount")) || 0;

        reviewCount++;

        localStorage.setItem("reviewCount", reviewCount);

        count.textContent = reviewCount;
    }
});