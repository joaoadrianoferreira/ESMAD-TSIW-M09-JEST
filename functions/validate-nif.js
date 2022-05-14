function isNif(nif) {
    if(isNaN(nif)) {
        return false; 
    } else {
        if(nif.toString().length == 9) {
            return true;
        } else {
            return false; 
        }
    }
}

module.exports = isNif;
    