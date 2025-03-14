#!/usr/bin/env node -r ts-node/register

const time = process.hrtime.bigint();
console.log(`Current time in nanoseconds: ${time}`);
