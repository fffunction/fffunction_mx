//REFERENCE
//http://quojs.tapquo.com/

var env = $$.environment();

env.browser     //[STRING] Browser of your mobile device
env.isMobile    //[BOOLEAN]
env.os.name     //[STRING] iOS, Android, Blackberry...
env.os.version  //[STRING] Versión of OS
env.screen      //[OBJECT] With properties: width & height

console.log('Browser:' + env.browser);
console.log('Is Mobile:' + env.isMobile);
console.log('OS Name:' + env.os.name);
console.log('OS Version:' + env.os.version);
console.log('Screen Width & Height:' + env.screen);