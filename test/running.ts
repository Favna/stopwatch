import ava from 'ava';
import { Stopwatch } from '../src';

ava('stopped', (test): void => {
	const stopwatch = new Stopwatch().stop();

	test.false(stopwatch.running);
});

ava('running(constructor)', (test): void => {
	const stopwatch = new Stopwatch();

	test.true(stopwatch.running);
});

ava('running(method)', (test): void => {
	const stopwatch = new Stopwatch().start();

	test.true(stopwatch.running);
});
