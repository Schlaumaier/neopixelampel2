/**
 * Ampelfunktion von einer Ampel
 */
let LEDBAND1 = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
/**
 * Ausgabe rot ab LEDNummer 14 bis 19 Der Streifen hat 20 LEDs, also 0 bis 19
 */
/**
 * Ausgabe gelb an den LEDs 7 bis 13 (7Stück)
 */
/**
 * Den Streifen löschen  ->Rot und Gelb wird ausgeschaltet
 */
/**
 * Grün auf den LEDs 0 bis 6 anzeigen (7 Stück)
 */
/**
 * Grün ausschalten
 */
/**
 * Gelb anzeigen
 */
/**
 * Gelb ausschalten
 */
basic.forever(function () {
    for (let xLED = 0; xLED <= 5; xLED++) {
        LEDBAND1.setPixelColor(xLED + 14, neopixel.colors(NeoPixelColors.Red))
        LEDBAND1.show()
    }
    basic.pause(2000)
    for (let xLED = 0; xLED <= 6; xLED++) {
        LEDBAND1.setPixelColor(xLED + 7, neopixel.colors(NeoPixelColors.Yellow))
        LEDBAND1.show()
    }
    basic.pause(500)
    LEDBAND1.clear()
    LEDBAND1.show()
    for (let xLED = 0; xLED <= 6; xLED++) {
        LEDBAND1.setPixelColor(xLED + 0, neopixel.colors(NeoPixelColors.Green))
        LEDBAND1.show()
    }
    basic.pause(1500)
    LEDBAND1.clear()
    LEDBAND1.show()
    for (let xLED = 0; xLED <= 6; xLED++) {
        LEDBAND1.setPixelColor(xLED + 7, neopixel.colors(NeoPixelColors.Yellow))
        LEDBAND1.show()
    }
    basic.pause(500)
    LEDBAND1.clear()
    LEDBAND1.show()
})
