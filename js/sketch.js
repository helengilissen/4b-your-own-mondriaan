// Opdracht 4B: Your own Mondriaan, Composition n i with red and blue 1931 Piet Mondriaan

function setup () {
  createCanvas (600,600)
  background (240)
}

function draw () {
  strokeWeight (15)
  line (240,0,240,750)

  line (0,355, 750, 355)

  line (525,360, 525,600)

  line (525, 585,250,585)

  strokeWeight (30)
  line (700, 460, 535, 460)

  noStroke ()
  fill (200,0,0)
  rect (0,362, 233, 250)

  fill (0,50,100)
  rect (532, 362, 150, 83)
}

