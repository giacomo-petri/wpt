// META: global=worker,shadowrealm
// META: timeout=long

// Note: This test doesn't cover the Window context, see idlharness.window.js
// for that coverage and why it can't be merged into this test.

'use strict';

/*
idl_test(
  ['dom'],
  ['html'],
  idl_array => {
    idl_array.add_objects({
      EventTarget: ['new EventTarget()'],
      Event: ['new Event("foo")'],
      CustomEvent: ['new CustomEvent("foo")'],
      AbortController: ['new AbortController()'],
      AbortSignal: ['new AbortController().signal'],
    });
  }
);
*/
test(() => {
  assert_true(true);
});
test(() => {
  assert_true(false);
});
done();
