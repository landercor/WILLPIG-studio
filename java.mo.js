document.addEventListener("DOMContentLoaded", () => {
  const filtroEdad = document.getElementById("edad");
  const filtroTematica = document.getElementById("tematica");
  const libros = document.querySelectorAll(".libro");

  function filtrar() {
    const edad = filtroEdad.value;
    const tematica = filtroTematica.value;

    libros.forEach(libro => {
      const libroEdad = libro.dataset.edad;
      const libroTematica = libro.dataset.tematica;

      // Mostrar solo si coincide con los filtros seleccionados
      if ((edad === "" || edad === libroEdad) &&
          (tematica === "" || tematica === libroTematica)) {
        libro.style.display = "block";
      } else {
        libro.style.display = "none";
      }
    });
  }

  filtroEdad.addEventListener("change", filtrar);
  filtroTematica.addEventListener("change", filtrar);
});
