 function mostrar(id) {
    document.querySelectorAll('.conteudo').forEach(div => {
        div.style.display = 'none';
    });
     document.getElementById(id).style.display = 'block';
}
window.onload = function() {
    mostrar('apres');
};