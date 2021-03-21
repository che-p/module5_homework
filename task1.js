let inP = +prompt('Введите значение.');
let inPtext;
if ( 'number' === typeof (inP)) {    // как в задании, лишний typeof, всегда true
    if (isFinite(inP) && !isNaN(inP)) {
        inPtext = (inP % 2) == 0 ? 'четное' : 'нечетное';
        console.log(inP + ' - ' + inPtext + ' число.');
    }
    else if (isFinite(inP) && isNaN(inP)) {
        console.log('NaN');
        }
    else {
        console.log('Упс, кажется, вы ошиблись');
        }
    }