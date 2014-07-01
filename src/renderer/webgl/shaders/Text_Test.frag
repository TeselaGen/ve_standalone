// Text_Test.frag
precision mediump float;



uniform vec2 uSize;
uniform sampler2D uSampler;
uniform float uNumChars;

varying vec2 vTextureCoord;
varying float vChar;


void main(void) {
	// vec4 texelColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
	vec4 texelColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));


	gl_FragColor = texelColor;
	// gl_FragColor = (vec4(1) - texelColor) * vec4(1,0,0,1);

}











