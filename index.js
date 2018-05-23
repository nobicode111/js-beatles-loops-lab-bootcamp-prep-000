function theBeatlesPlay(musicians, instruments) {
  var muAndInst = []
  for (var i = 0; i < musicians.length; i++) {
    muAndInst.push(musicians[i] + 'plays' + instruments[i])
  }
  return muAndInst
}