import { FETCH_WEATHER } from "../actions/index";

import moment from 'moment';

const initialState = {}

export default function(currentState = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      const days = new Map() // use Map as need we to maintain insertion order
      const city = action.payload.data.city.name;
      action.payload.data.list.forEach(el => {
        const day = moment(el.dt*1000).format("dddd Do MMMM");
        var local = moment(el.dt*1000).local().format('YYYY-MM-DD HH:mm:ss');
        el.dt_txt = `${local}`
        if( !days[day] ) days[day] = []
        days[day].push(el)
      });
      return Object.assign({}, currentState, {
        days: days,
        city: city
      });
  }
  return currentState;
}