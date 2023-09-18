// import {add} from './add.rs';

// console.log(add(1, 2));

import { dlopen, FFIType, suffix } from "bun:ffi";

const path = `libadd.${suffix}`;

const lib = dlopen(path, {
  add: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
});

const res = lib.symbols.add(1, 2);

console.log(res);
