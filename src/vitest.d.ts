// The interface below exists only to merge matcher types into vitest's.
/* oxlint-disable no-empty-object-type */
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

// jest-dom's own `@testing-library/jest-dom/vitest` types augment
// `Assertion<T>`, but vitest 5 declares `Assertion<R, T>`, so that
// augmentation no longer merges. Augment vitest's `Matchers<R, T>` instead.
declare module 'vitest' {
  interface Matchers<R extends void | Promise<void> = void | Promise<void>, T = unknown> extends TestingLibraryMatchers<
    unknown,
    R
  > {}
}
