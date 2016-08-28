#!/usr/bin/env node

"use strict";

/////////////////////////////////// LEARNING ///////////////////////////////////
// At this point I cannot run the file with only "02.js" in terminal and get
// ..."zsh: command not found: 02.js" as the output message while 
// ...entering "node 02.js" WILL work (as expected)

// If I add "./" before "02.js" it will still not work, but this time around
// ...I get a new message: "zsh: permission denied: ./02.js" instead!

// prior to adding "chmod +x 02.js" when using ls -l we had:
  // -rw-r--r--  1 EricD  staff    51 Aug 26 10:00 02.js
// entering "chmod +x 02.js" makes it executable via permission change and yields:
  // -rwxr-xr-x  1 EricD  staff   583 Aug 26 10:53 02.js


//////////////////////////// EXECUTE with "./02.js" ////////////////////////////
process.stdout.write("Jello Mold!\n")   // I CAN'T do "Hello World" EVERY TIME ;)


/////////////////////////////////// PRACTICE ///////////////////////////////////
// process.stdout.write("Jello Mold 2"+"\n MO MOLD\n")

// process.stdout.write(`Jello Mold 3\n The Molding\n`)

// let msg = "variably moldy"
// process.stdout.write(`${msg}\n${msg}++\n`)
