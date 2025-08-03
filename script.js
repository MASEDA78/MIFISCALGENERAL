function openReplaceModal() {
  document.getElementById('modal').style.display = 'block';
}

function closeReplaceModal() {
  document.getElementById('modal').style.display = 'none';
}

function sendWhatsApp() {
  const mesa = document.getElementById('mesa').value;
  const remplazado = document.getElementById('remplazado').value;

  const mensaje = `Solicitud de remplazo:\nMesa: ${mesa}\nFiscal a remplazar: ${remplazado}`;
  const whatsappLink = `https://wa.me/5491168650195?text=${encodeURIComponent(mensaje)}`;

  window.open(whatsappLink, '_blank');
  closeReplaceModal();
}