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
export function isDocker(): boolean;
