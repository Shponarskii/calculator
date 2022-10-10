function calculator() {
    let c = document.getElementById("cos");
    let a = document.getElementById("kol-vo");
    let r = document.getElementById("res");
    let re = new RegExp('^[0-9]*[.,]?[0-9]+$');
    let td = c.value.match(re);
    let ta = a.value.match(re);
    if (c.value === "" || a.value === "")
        r.innerHTML = "Введите данные";
    else if (td && ta)
        r.innerHTML = ("Стоимость заказа: " + parseFloat(c.value) * parseInt(a.value));
    else r.innerHTML = "Ошибка: неверный формат записи чисел";
}
window.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById("b-calc");
    button.addEventListener("click", calculator);
});