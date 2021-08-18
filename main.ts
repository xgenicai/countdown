for (let index = 0; index <= 2; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - index)
}
music.playTone(523, music.beat(BeatFraction.Breve))
basic.showString("Go")
music.playMelody("C5 G B A F A C5 B ", 263)
basic.forever(function () {
	
})
