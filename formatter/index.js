function validate_areacode (area) {
    const re = new RegExp("[A-Z]{1,2}$")
    return re.test(area)
}

function validate_districtcode (district) {
    const re = new RegExp("[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA")
    return re.test(district)
}

function validate_sectorcode (sector) {
    const re = new RegExp("[0-9]")
    console.log(sector)
    return re.test(sector)
}

function validate_unitcode (unit) {
    const re = new RegExp("[A-Z]{2}$")
    return re.test(unit)
}


function formatter(area, district, sector, unit) {
    if(!validate_areacode(area)){
        throw Error('Invalid area postcode')
    }
    if(!validate_districtcode(district)){
        throw Error('Invalid district postcode')
    }
    if(!validate_sectorcode(sector)){
        throw Error('Invalid sector postcode')
    }
    if(!validate_unitcode(unit)){
        throw Error('Invalid unit postcode')
    } 

    const outward_code = area + district
    const inward_code = sector + unit

    return outward_code + " " + inward_code
}

module.exports = formatter;