let playlist = [
  {
    nombre: "Oldies To Sing Out Loud",
    genero: "clasicos",
    ruta: "https://open.spotify.com/embed/playlist/54gibrYeY2jqubh5Nuddqc?utm_source=generator",
  },
  {
    nombre: "Classical Music",
    genero: "clasica",
    ruta: "https://open.spotify.com/embed/playlist/05GvxtaYflMggJW7NnF3Sd?utm_source=generator&theme=0",
  },
  {
    nombre: "Techno",
    genero: "edm",
    ruta: "https://open.spotify.com/embed/playlist/3FqxgacGZOiEzFs5OsOZkJ?utm_source=generator",
  },
];

let mainGender = prompt(
  `Cual es tu genero musical favorito?\nPrueba eligiendo entre Clasicos - Clasica - EDM`
);
let mainGenderinput = mainGender.toLowerCase();
if (mainGenderinput === "clasicos") {
  document.getElementById("playlistsrc").src = playlist[0].ruta;
} else if (mainGenderinput === "clasica") {
  document.getElementById("playlistsrc").src = playlist[1].ruta;
} else if (mainGenderinput === "edm") {
  document.getElementById("playlistsrc").src = playlist[2].ruta;
} else {
  alert(`Suena genial!, pero no esta entre las opciones\nIntenta nuevamente.`);
}
