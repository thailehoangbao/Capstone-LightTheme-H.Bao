document.getElementById('moon').onclick = function () {
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'inline-block';
};

document.getElementById('sun').onclick = function () {
    document.getElementById('sun').style.display = 'none';
    document.getElementById('moon').style.display = 'inline-block';
};