import fs from "node:fs";

/**
Check if the process is running inside a Docker container.
@example
```
import { isDocker } from 'isdocker';
if (isDocker()) {
	console.log('Running inside a Docker container');
}
```
*/
export function isDocker(): boolean {
  try {
    fs.statSync("/.dockerenv");
    return true;
  } catch {
    try {
      return fs.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
    } catch {
      return false;
    }
  }
}
