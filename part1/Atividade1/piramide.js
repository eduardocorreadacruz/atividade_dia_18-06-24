function calcularVolumePiramide() {
    let ladoBase = Number(document.getElementById('ladoBase').value);
    let altura = Number(document.getElementById('altura').value);

    let areaBase = ladoBase * ladoBase;
    let volume = (areaBase * altura) / 3;

    document.getElementById('resultado').textContent = "O volume da pirâmide é: " + volume;
}