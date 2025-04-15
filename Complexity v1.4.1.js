// Name: Complexity
// ID: complexityN
// Description: Epic basic complex thingies
// By Clickertale_2 <https://scratch.mit.edu/users/-Clickertale_2-/> and me, Kenay
// Cool License: MIT AND MPL-2.0
// Thanks "rawify" <https://github.com/rawify> for the complexity
// Nice Source: https://github.com/rawify/Complex.js/tree/main
class ComplexityExtension {
  constructor() {

// Hello! This is the April 2025 version for Complexity! Hope you like it!
// Let's try loading the code

    this.Complex = null;
    this.ready = false;
    this.loadComplexMath();
  }

  async loadComplexMath() {
    const response = await fetch('https://raw.githubusercontent.com/rawify/Complex.js/refs/heads/main/dist/complex.min.js');
    const code = await response.text();
    eval(code);
  }

// Nice! Now... The blocks!

  getInfo(){
	return {
	  id: 'complexityN',
	  name: 'Complexity',
	  color1: '#7d3766',
	  color2: '#995a84',
	  color3: '#4C213E',
	  menuIconURI: 'https://raw.githubusercontent.com/Kenay555/Complexity/8c9664101fb26817dceff5ff0dea6fd1aaaaa4ff/ComplexityIcon.png',
	  blocks: [
		{
		  blockType: Scratch.BlockType.LABEL,
		  text: Scratch.translate("Rectangular Tools"), //a+bi style
		},
		{
		  opcode: 'reComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'Real Part of [COMPLEX]',
		  arguments: {
			COMPLEX: { type: Scratch.ArgumentType.STRING, defaultValue: '1+2i' }
		  }
		},
		{
		  opcode: 'imComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'Im. Part of [COMPLEX]',
		  arguments: {
			COMPLEX: { type: Scratch.ArgumentType.STRING, defaultValue: '1+2i' },
		  }
		},
		{
		  opcode: 'rectComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '[REAL] + [IMAG] 𝙞',
		  arguments: {
			REAL: { type: Scratch.ArgumentType.NUMBER, defaultValue: '3' },
			IMAG: { type: Scratch.ArgumentType.NUMBER, defaultValue: '4' }
		  }
		},
		{
		  opcode: 'conjugateComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'Conjugate of [COMPLEX]',
		  arguments: {
			COMPLEX: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' }
		  }
		},
		{
		  blockType: Scratch.BlockType.LABEL,
		  text: Scratch.translate("Binary operators"), //Two inputs, one output
		},
		{
		  opcode: 'addComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '[COMPLEX1] + [COMPLEX2]',
		  arguments: {
			COMPLEX1: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' },
			COMPLEX2: { type: Scratch.ArgumentType.STRING, defaultValue: '1+2i' }
		  }
		},
		{
		  opcode: 'subtractComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '[COMPLEX1] - [COMPLEX2]',
		  arguments: {
			COMPLEX1: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' },
			COMPLEX2: { type: Scratch.ArgumentType.STRING, defaultValue: '1+2i' }
		  }
		},
		{
		  opcode: 'multiplyComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '[COMPLEX1] × [COMPLEX2]',
		  arguments: {
			COMPLEX1: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' },
			COMPLEX2: { type: Scratch.ArgumentType.STRING, defaultValue: '1+2i' }
		  }
		},
		{
		  opcode: 'divideComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '[COMPLEX1] / [COMPLEX2]',
		  arguments: {
			COMPLEX1: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' },
			COMPLEX2: { type: Scratch.ArgumentType.STRING, defaultValue: '1+2i' }
		  }
		},
		{
		  opcode: 'powComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '[COMPLEX1] ^ [COMPLEX2]',
		  arguments: {
			COMPLEX1: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' },
			COMPLEX2: { type: Scratch.ArgumentType.STRING, defaultValue: '1+2i' }
		  }
		},
		{
		  opcode: 'rootComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '[COMPLEX1] √ [COMPLEX2]',
		  arguments: {
			COMPLEX1: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' },
			COMPLEX2: { type: Scratch.ArgumentType.STRING, defaultValue: '1+2i' }
		  }
		},
		{
		  opcode: 'logComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'log [BASE] [INPUT]',
		  arguments: {
			BASE: { type: Scratch.ArgumentType.STRING, defaultValue: '2+i' },
			INPUT: { type: Scratch.ArgumentType.STRING, defaultValue: '2+11i' }
		  }
		},
		{
		  opcode: 'equalsComplex',
		  blockType: Scratch.BlockType.BOOLEAN,
		  text: '[COMPLEX1] equals [COMPLEX2]?',
		  arguments: {
			COMPLEX1: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' },
			COMPLEX2: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' }
		  }
		},
		{
		  blockType: Scratch.BlockType.LABEL,
		  text: Scratch.translate("Polar Tools"), // re^iq / r*cis(q) style
		},
		{
		  opcode: 'absComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'Magnitude of [COMPLEX]',
		  arguments: {
			COMPLEX: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' }
		  }
		},
		{
		  opcode: 'argComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'Argument of [COMPLEX]',
		  arguments: {
			COMPLEX: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' }
		  }
		},
		{
		  opcode: 'polarComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'Polar [RADIUS] ∠ [ANGLE]',
		  arguments: {
			RADIUS: { type: Scratch.ArgumentType.NUMBER, defaultValue: '5' },
			ANGLE: { type: Scratch.ArgumentType.NUMBER, defaultValue: '0.9273' }
		  }
		},
		{
		  opcode: 'complexSign',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'Sign of [COMPLEX]',
		  arguments: {
			COMPLEX: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' }
		  }
		},
		{
		  opcode: 'cisThingie',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '∠ [ANGLE]',
		  arguments: {
			ANGLE: { type: Scratch.ArgumentType.NUMBER, defaultValue: '0.9273' }
		  }
		},
		{
		  blockType: Scratch.BlockType.LABEL,
		  text: Scratch.translate("Product tools"), //Wanna multiply?
		},
		{
		  opcode: 'sqrtComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'Square Root of [COMPLEX]',
		  arguments: {
			COMPLEX: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' }
		  }
		},
		{
		  opcode: 'expComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '𝑒 [COMPLEX]',
		  arguments: {
			COMPLEX: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' }
		  }
		},
		{
		  opcode: 'lnComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'ln [COMPLEX]',
		  arguments: {
			COMPLEX: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' }
		  }
		},
		{
		  opcode: 'negComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'Negative [COMPLEX]',
		  arguments: {
			COMPLEX: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' }
		  }
		},
		{
		  opcode: 'inverseComplex',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'Inverse of [COMPLEX]',
		  arguments: {
			COMPLEX: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' }
		  }
		},
		{
		  opcode: 'ComplexTimesI',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '[COMPLEXY] 𝙞',
		  arguments: {
			COMPLEXY: { type: Scratch.ArgumentType.STRING, defaultValue: '3+4i' }
		  }
		},
		{
		  blockType: Scratch.BlockType.LABEL,
		  text: Scratch.translate("Solvers"), //Solve basic equations
		},
		{
		  opcode: 'quadraticRoot',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'quadratic [QUAD] x² + [LIN] x + [CONST]',
		  arguments: {
			QUAD: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
			LIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 },
			CONST: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
		  }
		},
		{
		  opcode: 'depressedRoot',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'depressed X³ + [LINE]x = [CONST] ',
		  arguments: {
			LINE: { type: Scratch.ArgumentType.NUMBER, defaultValue: -3 },
			CONST: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
		  }
		},
		{
		  blockType: Scratch.BlockType.LABEL,
		  text: Scratch.translate("Constants"), //They never change
		},
		{
		  opcode: 'getI',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '𝙞',
		},
		{
		  opcode: 'getPI',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '𝜋',
		},
		{
		  opcode: 'getE',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '𝑒 1',
		},
		{
		  opcode: 'getTwoPI',
		  blockType: Scratch.BlockType.REPORTER,
		  text: '2𝜋',
		},
		{
		  opcode: 'getZero',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'Zer0',
		},
		{
		  opcode: 'getOne',
		  blockType: Scratch.BlockType.REPORTER,
		  text: 'One',
		},
	  ],
	};
  }

// cInstance, parseFloat, c2... ClickerTale_2's really been working!

   reComplex({ COMPLEX }) 
   {
	try {
	  const cInstance = new this.Complex(COMPLEX);
	  return cInstance.re;
	} catch (e) {
	  return null;
	}
  }
  
   imComplex({ COMPLEX }) 
   {
	try {
	  const cInstance = new this.Complex(COMPLEX);
	  return cInstance.im;
	} catch (e) {
	  return null;
	}
  }
  
  rectComplex({ REAL, IMAG }) 
  {
	try {
	  const cInstance = new this.Complex(parseFloat(REAL), parseFloat(IMAG));
	  return cInstance.toString();
	} catch (e) {
	  return "Error creating complex number";
	}
  }
  
  polarComplex({ RADIUS, ANGLE }) 
  {
  try {
    let radius = parseFloat(RADIUS);
    let argument = parseFloat(ANGLE);
    const cInstance = new this.Complex({ arg: argument, abs: radius });
    return cInstance.toString();
  } catch (e) {
    return "Error creating complex number";
  }
}

 cisThingie({ ANGLE }) 
  {
  try {
    let angly = parseFloat(ANGLE); //Meet my creation!
    const cInstance = new this.Complex({ phi: angly, r: 1 });
    return cInstance.toString();
  } catch (e) {
    return "Polar cis() Error";
  }
}

  addComplex({ COMPLEX1, COMPLEX2 }) 
  {
	try {
	  const c1 = new this.Complex(COMPLEX1);
	  const c2 = new this.Complex(COMPLEX2);
	  const result = c1.add(c2);
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error adding complex numbers";
	}
  }

  subtractComplex({ COMPLEX1, COMPLEX2 }) 
  {
	try {
	  const c1 = new this.Complex(COMPLEX1);
	  const c2 = new this.Complex(COMPLEX2);
	  const result = c1.sub(c2);
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error subtracting complex numbers";
	}
  }

  multiplyComplex({ COMPLEX1, COMPLEX2 }) 
  {
	try {
	  const c1 = new this.Complex(COMPLEX1);
	  const c2 = new this.Complex(COMPLEX2);
	  const result = c1.mul(c2);
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error multiplying complex numbers";
	}
  }

  ComplexTimesI({ COMPLEXY }) 
  {
	try {
	  const c1 = new this.Complex(COMPLEXY);
	  const result = c1.mul(Complex.I);
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error multiplying complex numbers";
	}
  }

  divideComplex({ COMPLEX1, COMPLEX2 }) 
  {
	try {
	  const c1 = new this.Complex(COMPLEX1);
	  const c2 = new this.Complex(COMPLEX2);
	  const result = c1.div(c2);
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error dividing complex numbers";
	}
  }

  powComplex({ COMPLEX1, COMPLEX2 }) 
  {
	try {
	  const c1 = new this.Complex(COMPLEX1);
	  const c2 = new this.Complex(COMPLEX2);
	  const result = c1.pow(c2);
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error raising complex number to a power";
	}
  }

  rootComplex({ COMPLEX1, COMPLEX2 }) 
  {
	try {
	  const c1 = new this.Complex(COMPLEX2);
	  const c2 = new this.Complex(COMPLEX1).inverse();
	  const result = c1.pow(c2);
	  return result.toString().replace(/\s+/g, ''); //Meet my... other creations!
	} catch (e) {
	  return "Error. Just an error.";
	}
  }

  sqrtComplex({ COMPLEX }) 
  {
	try {
	  const cInstance = new this.Complex(COMPLEX);
	  const result = cInstance.sqrt();
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error taking square root";
	}
  }
  
  logComplex({ BASE, INPUT }) 
  {
	try {
	  let cBase = Complex(BASE)
	  let cInput = Complex(INPUT)
	  let result = cInput.log().div(cBase.log())
	  result = result.toString()
	  return result.replace(/\s+/g, '')
	} catch (e) {
		return "Error computing log";
	}
  }
  
  quadraticRoot({ QUAD, LIN, CONST }) 
  {
	try {
	let sqart = new this.Complex(LIN * LIN - 4 * QUAD * CONST).sqrt() //Yep, it's sqart. Not sqrt
	let x1 = new this.Complex(-LIN).add(sqart).div(2 * QUAD)
	let x2 = new this.Complex(-LIN).sub(sqart).div(2 * QUAD)
	return '{' + x1 + ', ' + x2 + '}'
	} catch (e) {
		return "Error computing Quadratic"
	}
  }
  
depressedRoot({ LINE, CONST }) //My solver!
  {
  try {
    const w1 = new this.Complex({ r: 1, phi: 2.0943951023931955 }); 
    const w2 = new this.Complex({ r: 1, phi: 4.188790204786391 }); // for extra solutions 

    const sqrtDisc = new this.Complex(CONST * CONST / 4 + LINE * LINE * LINE / 27).sqrt(); // cool triangle
    const diff = new this.Complex(-CONST / 2); // the other thing

    const p1 = diff.add(sqrtDisc).pow(1 / 3); //left 3root 
    const p2 = diff.sub(sqrtDisc).pow(1 / 3); //right 3root

    const x1 = p1.add(p2); //first solution 
    const x2 = p1.mul(w1).add(p2.mul(w2)); //second 
    const x3 = p1.mul(w2).add(p2.mul(w1)); //third

    return `{${x1.toString()}, ${x2.toString()}, ${x3.toString()}}`; //cool string trick
  } catch (e) {
    return "Error computing Cardano";
  }
}

  expComplex({ COMPLEX }) 
  {
	try {
	  const cInstance = new this.Complex(COMPLEX);
	  const result = cInstance.exp();
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error computing exp";
	}
  }

  lnComplex({ COMPLEX }) 
  {
	try {
	  const cInstance = new this.Complex(COMPLEX);
	  const result = cInstance.log();
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error computing log";
	}
  }

  conjugateComplex({ COMPLEX }) 
  {
	try {
	  const cInstance = new this.Complex(COMPLEX);
	  const result = cInstance.conjugate();
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error computing conjugate";
	}
  }

  complexSign({ COMPLEX }) 
  {
    try {
      const cInstance = new this.Complex(COMPLEX);
      const result = cInstance.sign();
      return result.toString().replace(/\s+/g, '');
    } catch (e) {
      return "Error computing sign";
    }
  }

  absComplex({ COMPLEX }) 
  {
	try {
	  const cInstance = new this.Complex(COMPLEX);
	  const result = cInstance.abs();
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error computing log";
	}
  }

  argComplex({ COMPLEX }) 
  {
	try {
	  const cInstance = new this.Complex(COMPLEX);
	  const result = cInstance.arg();
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error computing log";
	}
  }

  inverseComplex({ COMPLEX }) 
  {
	try {
	  const cInstance = new this.Complex(COMPLEX);
	  const result = cInstance.inverse();
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error computing log";
	}
  }

  negComplex({ COMPLEX }) 
  {
	try {
	  const cInstance = new this.Complex(COMPLEX);
	  const result = cInstance.neg();
	  return result.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error computing log";
	}
  }


  getZero() 
  {
	try {
	  return this.Complex.ZERO.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error retrieving ZERO";
	}
  }

  getOne() 
  {
	try {
	  return this.Complex.ONE.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error retrieving ONE";
	}
  }
  
  getI() 
  {
	try {
	  return this.Complex.I.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error retrieving I";
	}
  }
  
  getPI() 
  {
	try {
	  return this.Complex.PI.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error retrieving PI";
	}
  }

  getTwoPI() 
  {
	try {
	  return 6.283185307179586; //Tried loading PI. Didn't work for me :'(
	} catch (e) {
	  return "Error retrieving smth";
	}
  }

  getE() 
  {
	try {
	  return this.Complex.E.toString().replace(/\s+/g, '');
	} catch (e) {
	  return "Error retrieving E";
	}
  }

  equalsComplex({ COMPLEX1, COMPLEX2 }) 
  {
	try {
	  const c1 = new this.Complex(COMPLEX1);
	  const c2 = new this.Complex(COMPLEX2);
	  return c1.equals(c2);
	} catch (e) {
	  return false;
	}
  }
}

Scratch.extensions.register(new ComplexityExtension()); //Let's use these!