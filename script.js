function clock (){
    const areaDoRelogio = document.querySelector('.relogio');
    const horaAgora = new Date(); // tudo que se refere a tempo, graças a isso ele sabe a hora.
    const horas = horaAgora.getHours (); // vai pegar apenas a hora da constante horaAgora.
    const minutos = horaAgora.getMinutes(); // vai pegar apenas os minutos da constante horaAgora.
    const segundos = horaAgora.getSeconds(); // vai pegar apenas os segundos da constante horaAgora.
    const formatoHoras = horas.toString().padStart (2, '0'); //para definir o começo da string, quantos caracteres terá e por onde ela vai começar.
    const formatoMinutos = minutos.toString().padStart (2, '0');
    const formatoSegundos = segundos.toString().padStart (2, '0');

    areaDoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}`;  //a crase serve para usar placeholder(maneira mais fácil de concatenar).
}

setInterval(clock, 1000);  //intervalo.