const assert = require('assert');

// We simulate importing the built CJS packages
try {
  const hooks = require('./dist/hooks/index.js');
  const utils = require('./dist/utils/index.js');
  const async = require('./dist/async/index.js');
  const ai = require('./dist/ai/index.js');
  const browser = require('./dist/browser/index.js');

  console.log("✅ Packages imported successfully.");

  assert.ok(hooks.useClickOutside, "useClickOutside missing");
  assert.ok(utils.timeAgo, "timeAgo missing");
  assert.ok(utils.safeParseJSON, "safeParseJSON missing");
  assert.ok(async.retry, "retry missing");
  assert.ok(async.timeoutPromise, "timeoutPromise missing");
  assert.ok(ai.chunkText, "chunkText missing");
  assert.ok(browser.copyToClipboard, "copyToClipboard missing");

  console.log("✅ All exports verified successfully!");
} catch (e) {
  console.error("❌ Export verification failed:", e);
  process.exit(1);
}
