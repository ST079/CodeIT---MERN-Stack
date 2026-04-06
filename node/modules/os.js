//os ko details haru thapauna sakxa
import os from 'os';

// os module chai operating system sanga sambandhit details haru provide garne ho,
// jasto ki system ko architecture, platform, memory, cpu, etc.

console.log(os.totalmem()); // total memory in bytes
console.log(os.freemem()); // free memory in bytes / available memory in bytes

console.log(os.cpus()); // cpu details haru

console.log(os.arch()); // system architecture
console.log(os.platform()); // operating system platform
console.log(os.version()); // operating system version
console.log(os.userInfo()); // user information