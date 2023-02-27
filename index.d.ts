/**
Check if the process is running inside a Docker container.
@example
```
import { isDocker } from 'isdocker';

if (isDocker()) {
	console.log('In Docker');
}
```
*/
export function isDocker(): boolean;
