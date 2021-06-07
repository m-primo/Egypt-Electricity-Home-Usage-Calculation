// check year and month
function getYM() {
    const _d = new Date();
    const y = Number(_d.getFullYear());
    const m = Number(_d.getMonth()+1);
    return [y, m];
}

const current_ym = getYM();
const current_y = current_ym[0];
const current_m = current_ym[1];

console.log(current_ym);

const FINAL_YEAR = 2025;
const STATE_MONTH = 7;

function checkUsageYear(y) {
    return current_y <= Number(y) && current_m < STATE_MONTH;
}

function checkFinalYear(y) {
    return current_y >= FINAL_YEAR && current_m >= STATE_MONTH;
}

// core config
function getPricesOfYear(y) {
    y = Number(y);
    let _CURRENT_SEPARATION_YEAR = "";
    let _PRICESLIST = [];
    let ___ = (y >= FINAL_YEAR ? 'final' : '');

    if(y == 2021) {
        _CURRENT_SEPARATION_YEAR = "2020-2021";
        _PRICESLIST = [0.38, 0.48, 0.65, 0.96, 1.18, 1.40, 1.18, 1.45];
    } else if(y == 2022) {
        _CURRENT_SEPARATION_YEAR = "2021-2022";
        _PRICESLIST = [0.48, 0.48, 0.77, 1.06, 1.28, 1.40, 1.28, 1.45];
    } else if(y == 2023) {
        _CURRENT_SEPARATION_YEAR = "2022-2023";
        _PRICESLIST = [0.58, 0.68, 0.83, 1.11, 1.31, 1.40, 1.36, 1.45];
    } else if(y == 2024) {
        _CURRENT_SEPARATION_YEAR = "2023-2024";
        _PRICESLIST = [0.68, 0.68, 0.90, 1.19, 1.35, 1.40, 1.36, 1.45];
    } else if(y == 2025 || ___ == 'final') {
        _CURRENT_SEPARATION_YEAR = "2024-2025";
        _PRICESLIST = [0.71, 0.71, 0.97, 1.23, 1.36, 1.40, 1.36, 1.45];
    }

    return [_PRICESLIST, _CURRENT_SEPARATION_YEAR];
}

const PRECISION = 2;
let PRICESLIST = [];
let CURRENT_SEPARATION_YEAR = "";
let ___ = (checkFinalYear(current_y) ? 'final' : '');

if(___ != 'final') {
    for(let y = FINAL_YEAR; y >= 2021; y--) {
        if(checkUsageYear(y)) [PRICESLIST, CURRENT_SEPARATION_YEAR] = getPricesOfYear(y);
    }
} else {
    [PRICESLIST, CURRENT_SEPARATION_YEAR] = getPricesOfYear(FINAL_YEAR);
}

const USAGELIST = ["0-50", "51-100", "0-200", "201-350", "351-650", "651-1000", "0-999", "1000+"];