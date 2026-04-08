import { act, renderHook } from '@testing-library/react';

import { useIsMobile } from './use-mobile';

let listeners: Record<string, Set<() => void>>;

beforeEach(() => {
  listeners = {};
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });
  vi.spyOn(window, 'matchMedia').mockImplementation(
    (query: string) =>
      ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: (event: string, handler: EventListenerOrEventListenerObject) => {
          const set = listeners[event] ?? new Set();
          set.add(handler as () => void);
          listeners[event] = set;
        },
        removeEventListener: (event: string, handler: EventListenerOrEventListenerObject) => {
          listeners[event]?.delete(handler as () => void);
        },
        dispatchEvent: () => true,
        addListener: () => {},
        removeListener: () => {},
      }) as MediaQueryList,
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('useIsMobile', () => {
  it('returns false when window width is >= 768', () => {
    Object.defineProperty(window, 'innerWidth', { value: 1024 });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it('returns true when window width is < 768', () => {
    Object.defineProperty(window, 'innerWidth', { value: 500 });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it('returns false when window width is exactly 768', () => {
    Object.defineProperty(window, 'innerWidth', { value: 768 });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it('updates when window is resized to mobile width', () => {
    Object.defineProperty(window, 'innerWidth', { value: 1024 });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 500 });
      listeners.change?.forEach((fn) => fn());
    });

    expect(result.current).toBe(true);
  });

  it('updates when window is resized to desktop width', () => {
    Object.defineProperty(window, 'innerWidth', { value: 500 });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);

    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 1024 });
      listeners.change?.forEach((fn) => fn());
    });

    expect(result.current).toBe(false);
  });

  it('cleans up event listener on unmount', () => {
    const { unmount } = renderHook(() => useIsMobile());
    expect(listeners.change?.size).toBe(1);

    unmount();
    expect(listeners.change?.size).toBe(0);
  });
});
