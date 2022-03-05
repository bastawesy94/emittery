const Emittery = require('emittery');
// Emittery.isDebugEnabled = true; //Enable debug for all events
const emitter = new Emittery({debug:
  {
    name : "toggle debug .",
    enabled: true, //enable or disable default debugger
    
  }
});

emitter.on(['myAction1','myAction2'], (data)=>{
  console.log(`welcome to my demo ${data}`);
});

//call my event
emitter.emit('myAction1', 'mohamed');
emitter.emit('myAction2', 'bastawesy');

//off means remove event subscribtions from emmiter 
const listener = data => console.log(data);
(async () => {
	emitter.on(['🦄', '🐶', '🦊'], listener);
	await emitter.emit('🦄', 'a');
	await emitter.emit('🐶', 'b');
	await emitter.emit('🦊', 'c');
	emitter.off('🦄', listener);
	emitter.off(['🐶', '🦊'], listener);
	await emitter.emit('🦄', 'a'); // Nothing happens
	await emitter.emit('🐶', 'b'); // Nothing happens
	await emitter.emit('🦊', 'c'); // Nothing happens
})();//self function invoke