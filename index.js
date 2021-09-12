// run `node index.js` in the terminal

import BackpPack from './backpack.js';

const backpack = new BackpPack('NIKE', 50, 'Black', 4, 4, 8, true, "24 Jan 2019");
console.log(backpack);
console.log(backpack.dateElapsed() + " Years");
