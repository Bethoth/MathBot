function pythagoreOtherSide(hypotenuse, knownSide) {
    return Math.round((Math.sqrt((hypotenuse * hypotenuse) - (knownSide * knownSide))) * 1000) / 1000;
}

function inverseOfPythagoreTheorem(referenceSide, otherSide1, otherSide2) {
    let squaredReferenceSide = referenceSide * referenceSide;
    let squaredOtherSide1 = otherSide1 * otherSide1;
    let squaredOtherSide2 = otherSide2 * otherSide2;
    return squaredReferenceSide === (squaredOtherSide1 + squaredOtherSide2);
}

function thalesWithUnknownNumerator(knownFractionNumerator, knownFractionDenominator, knownDenominator) {
    return Math.round(((knownFractionNumerator * knownDenominator) / knownFractionDenominator) * 1000) / 1000;
}

function thalesWithUnknownDenominator(knownFractionNumerator, knownFractionDenominator, knownNumerator) {
    return Math.round(((knownFractionDenominator * knownNumerator) / knownFractionNumerator) * 1000) / 1000;
}

module.exports = {
    pythagoreOtherSide : pythagoreOtherSide,
    inverseOfPythagoreTheorem : inverseOfPythagoreTheorem,
    thalesWithUnknownNumerator : thalesWithUnknownNumerator,
    thalesWithUnknownDenominator : thalesWithUnknownDenominator
}
