//This uses Complex.js from Rawify :3

function fourRoot({ FOUR, CUBE, QUAD, LINE, CONST, SOLVE}) { //Let's quartic!
	//The first five inputs are the coefficients of the quartic
	//SOLVE determines which of the four solutions to return (for now, it goes from 0 to 3)

if (FOUR === 0) { //Lacks x^4?
  return "Not a quartic equation" //Goodbye
  }; //o well
  const sg1 = 2 * (SOLVE & 1) - 1; //cool bit hack
  const sg2 = 2 * ((SOLVE >> 1) & 1) - 1; //cool bit hack 2

  const b = Complex(CUBE).div(FOUR); //Normalize
  const c = Complex(QUAD).div(FOUR); //All
  const d = Complex(LINE).div(FOUR); //Of
  const e = Complex(CONST).div(FOUR); //Them

  const a1 = b.mul(-0.375).add(c); //Nice value
  const b1 = b.pow(3).mul(0.125).sub(b.mul(c).mul(0.5)).add(d); //Long value
  const y1 = b.pow(4).mul(-0.01171875).add(b.mul(0.25).pow(2).mul(c)).sub(b.mul(d).mul(0.25)).add(e); //Wierd value

  if (b1.equals(Complex.ZERO)) { //To skip the slow stuff
  const z = a1.mul(a1).sub(y1.mul(4)).sqrt().mul(sg1).sub(a1).div(2).sqrt().mul(sg2).sub(b.mul(0.25)); //disaster
  return z; //Nice
  }; //guess we won't

  const P = a1.mul(a1).mul(-0.25/3).sub(y1); //Let's cubic!
  const Q = a1.pow(3).mul(0.25/27).add(a1.mul(y1).div(3)).sub(b.mul(b).mul(0.125)); //For what?
  const R = P.pow(3).div(27).add(Q.mul(Q).mul(0.25)).sqrt().sub(Q.mul(0.5)); //To solve quartic!

  let y; //This a silly y. Why?
  if (R.equals(Complex.ZERO)) { //Well, she doesn't want to have Complex-ity
	  y = a1.mul(-5/6).add(Q.pow(1/3).neg()).toString(); //We will force her
  } else { //or else...
	  y = a1.mul(-5/6).add(R.pow(1/3).sub(P.div(R.pow(1/3).mul(3)))).toString(); //But how? you may ask
  }; //IDK either
  const y0 = Complex(y) //Good luck y0
  
  const W = y0.mul(2).add(a1).sqrt().mul(sg1); //Remember sg1? It means "sign 1"

  const x = a1.mul(-3).sub(y1.mul(2)).sub(b1.mul(2).div(W)).sqrt().mul(sg2).add(W).mul(0.5).sub(b.mul(0.25)); //smth from wikipedia
  return x.toString(); //One, and only one.
}