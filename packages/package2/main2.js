import {sum} from "./sum.js"
import { printf } from 'package1'
import React from 'react'

console.log("React.version", React.version);
console.log("package2/main2.js")

sum(1, 2)
console.log("printf", printf('hello, world!'));
