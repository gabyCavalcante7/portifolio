document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    // Monta a mensagem para WhatsApp
    const textoWhatsApp = `Olá, me chamo ${nome}. Meu e-mail é ${email}. Mensagem: ${mensagem}`;
    const numeroWhatsApp = '55SEUNUMERO'; // Coloque seu número no formato 55 + DDD + número (ex: 5511999999999)

    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;

    // Abre o link do WhatsApp
    window.open(linkWhatsApp, '_blank');

    // Mensagem de confirmação
    alert(`Obrigado ${nome}, sua mensagem foi enviada com sucesso!`);

    // Limpa os campos
    document.getElementById('form-contato').reset();

});





