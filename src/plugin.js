import { createPinia } from 'pinia';
import { storePlugin } from 'pinia-plugin-store';
import Utf8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';

const plugin = createPinia();

function encrypt(value) {
  return Base64.stringify(Utf8.parse(value));
}

function decrypt(value) {
  return Base64.parse(value).toString(Utf8);
}

const myplugin = storePlugin({
  stores: ['testsimple'],
  storage: localStorage,
  encrypt,
  decrypt,
});

plugin.use(myplugin);

export default plugin;