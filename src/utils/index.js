export * from './dom';
export * from './chrome';
export * from './fetch';
export * from './components';
export * from './background';
export * from './backgroundFetch';
export * from './backgroundNotifier';
export * from './toolbarButton';

// debugging no longer needed to be run through set levels in the code
// you can enable vscode debugging by running the launch.json script
// through vscode which runs the test suite, allowing you to view items
// in real time
// https://jestjs.io/docs/en/troubleshooting#debugging-in-vs-code

// for production or development logging, you can insert console commands
// where necessary, which should get removed prior to push

global.DEBUGLEVEL = 1;

export const debug = (level, varargs) => {
  if (DEBUGLEVEL >= level) {
    // we no longer need the below script, especially since the
    // 'this' binding is different in es6
    // however, rather than ripping it out, we stub it to console.debug
    // var args = Array.prototype.slice.call(arguments, 1);
    // args[0] = `RECAP debug [${level}]: ` + args[0];
    // return console.log.apply(this, args);
    return console.debug(`RECAP debug [${level}]: ${varargs}`);
  }
};
