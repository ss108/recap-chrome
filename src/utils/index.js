export * from './dom';
export * from './chrome';
export * from './fetch';
export * from './components';
export * from './background';
export * from './backgroundFetch';
export * from './backgroundNotifier';
export * from './toolbarButton';
// Debug logging function.
// First argument is a debug level, remainder are variable args for console.log
// If the global debug level matches the first arg, calls console.log().
// Example usage:
//    debug(5, "This message is only seen when debug is %d or higher.", 5);
// Debug levels:
//   1   General informational
//   3   Developer debugging
global.DEBUGLEVEL = 1;

export const debug = (level, varargs) => {
  if (DEBUGLEVEL >= level) {
    var args = Array.prototype.slice.call(arguments, 1);
    args[0] = `RECAP debug [${level}]: ` + args[0];
    return console.log.apply(this, args);
  }
};
