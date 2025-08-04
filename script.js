function openReplaceModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  document.getElementById('mesa').focus();
}

function closeReplaceModal() {
  const modal = document.getElementById('modal');
  const content = modal.querySelector('.modal-content');
  content.classList.add('fade-out');

  setTimeout(() => {
    modal.style.display = 'none';
    content.classList.remove('fade-out');
  }, 300);
}

function sendWhatsApp() {
  const mesa = document.getElementById('mesa').value;
  const remplazado = document.getElementById('remplazado').value;

  if (!mesa || !remplazado) {
    alert("Completá todos los campos antes de enviar.");
    return;
  }

  const mensaje = `Solicitud de reemplazo:\nMesa: ${mesa}\nFiscal a reemplazar: ${remplazado}`;
  const whatsappLink = `https://wa.me/5491168650195?text=${encodeURIComponent(mensaje)}`;
  window.open(whatsappLink, '_blank');
  closeReplaceModal();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeReplaceModal();
});

window.addEventListener("click", (e) => {
  if (e.target === document.getElementById("modal")) closeReplaceModal();
});