// created by cellerchan
// 2018.03.15

var carPrefixes = {}

/**
 * getCodeList, 根据省份名称获取该省车牌号前缀
 * params
 * province 省份名称, string
 */
carPrefixes.getCodeList = function ( province ) {
    for ( var i=0; i<carPrefixes.codeList.length; i++ ) {
        if ( carPrefixes.codeList[i]['province'] == province ) {
            return carPrefixes.codeList[i]['cities']
        }
    }
}

carPrefixes.codeList = [{
    province: '冀',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'R', 'S', 'T']
}, {
    province: '辽',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P']
}, {
    province: '皖',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S']
}, {
    province: '苏',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N']
}, {
    province: '鄂',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S']
}, {
    province: '晋',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'J', 'K', 'L', 'M']
}, {
    province: '吉',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K']
}, {
    province: '粤',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
}, {
    province: '宁',
    cities: ['A', 'B', 'C', 'D', 'E']
}, {
    province: '京',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'Y']
}, {
    province: '豫',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'U']
}, {
    province: '黑',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R']
}, {
    province: '鲁',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'U', 'V', 'Y']
}, {
    province: '浙',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L']
}, {
    province: '桂',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R']
}, {
    province: '蒙',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M']
}, {
    province: '闽',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K']
}, {
    province: '川',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'J', 'K', 'L', 'M', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
}, {
    province: '渝',
    cities: ['A', 'B', 'C', 'F', 'G', 'H']
}, {
    province: '津',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
}, {
    province: '云',
    cities: ['A', 'A', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S']
}, {
    province: '湘',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'U']
}, {
    province: '新',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R']
}, {
    province: '赣',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M']
}, {
    province: '甘',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P']
}, {
    province: '陕',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'V']
}, {
    province: '贵',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J']
}, {
    province: '青',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
}, {
    province: '藏',
    cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J']
}, {
    province: '琼',
    cities: ['A', 'B', 'C', 'D', 'E']
}, {
    province: '沪',
    cities: ['A', 'B', 'C', 'D', 'R']
}]