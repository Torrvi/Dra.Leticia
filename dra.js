function mostrar(id) {
    document.querySelectorAll('.conteudo').forEach(div => {
        div.style.display = 'none';
    });
    let elemento = document.getElementById(id);
    if (elemento) {
        elemento.style.display = 'block';
    }
}
document.addEventListener("DOMContentLoaded", () => {
    mostrar('apres');
});