// День путешествия

import {createEventLayout} from './event';

const EVENTS_AMOUNT = 3;

export const createDayLayout = () => {

  const eventsLayout = new Array(EVENTS_AMOUNT).fill(``).map(() => {
    return `${createEventLayout()}`;
  }).join(``);

  const layout =
    `<li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">1</span>
      <time class="day__date" datetime="2019-03-18">MAR 18</time>
    </div>
    <ul class="trip-events__list">
    ${eventsLayout}
    </ul>
    </li>`;

  return layout;
};
