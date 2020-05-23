import ava from 'ava';
import { sleep } from '@klasa/utils';
import { Stopwatch } from '../src';

ava('duration(running)', async (test): Promise<void> => {
	const stopwatch = new Stopwatch();

	const first = stopwatch.duration;

	await sleep(1000);
	stopwatch.stop();
	const second = stopwatch.duration;

	test.true(first < second);
});
