import { canUseDOM } from 'vtex.render-runtime'

import type { PixelMessage } from './typings/events'

console.log('aeeeeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');

export function handleEvents(e: PixelMessage) {

  console.log(`[LOG] - Event Name: ${e.data.eventName}`);

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
