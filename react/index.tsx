import { canUseDOM } from 'vtex.render-runtime'

import type { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {

  const { appId } = window;

  console.log(`[LOG] - Event Name: ${e.data.eventName}, AppId: ${appId}`);

  window.testeAlert('TESTEEE');

  switch (e.data.eventName) {
    case 'vtex:pageView': {
      console.log(`Página: ${e.data.pageTitle}`);
      break
    }

    default: {
      break
    }
  }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
