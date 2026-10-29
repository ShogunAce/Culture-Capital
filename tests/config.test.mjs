import test from 'node:test';
import assert from 'node:assert/strict';
import {qlooOrigin} from '../lib/config.mjs';
test('accepts only exact hackathon HTTPS origin',()=>{assert.equal(qlooOrigin(), 'https://hackathon.api.qloo.com');assert.equal(qlooOrigin('https://hackathon.api.qloo.com/'),qlooOrigin());for(const url of ['https://api.qloo.com','https://staging.api.qloo.com','http://hackathon.api.qloo.com','https://hackathon.api.qloo.com.evil.com','https://user:pass@hackathon.api.qloo.com','https://hackathon.api.qloo.com/search'])assert.throws(()=>qlooOrigin(url));});
