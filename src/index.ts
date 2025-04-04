import '@fluentui/web-components/button.js';
import { setTheme } from '@fluentui/web-components';
import { webLightTheme } from '@fluentui/tokens';

import './repro.js';

setTheme(webLightTheme);

document.body.removeAttribute('hidden')