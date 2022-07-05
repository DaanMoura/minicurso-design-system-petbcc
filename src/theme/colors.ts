const base = {
    blue: '#008DB9',
    blueDark: '#017194',
    orange: '#F77D04',
    orangeDark: '#BA5E01',
    white: '#FFFFFF',
    gray: '#E9E9E9',
    grayLight: '#F2F2F2',
    almostBlack: '#4D4D4D'
}

export default {
    ...base,
    primary: base.blue,
    primaryVariation: base.blueDark,
    secundary: base.orange,
    secundaryVariation: base.orangeDark,
    background: base.white,
    stroke: base.gray,
    backgroundVariation: base.grayLight,
    text: base.almostBlack,
    negativeText: base.white
}
