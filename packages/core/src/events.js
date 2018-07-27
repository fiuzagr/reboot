import { HasNoEventFunctionsError } from '@local/errors';

const hasEventFunctions = () =>
  typeof window !== 'undefined' &&
  window.addEventListener &&
  window.dispatchEvent &&
  CustomEvent;

export const createEventChannel = (eventChannelCreator, eventName) =>
  eventChannelCreator(emitter => listenEvent(eventName, emitter));

export const dispatchEvent = (eventName, data = {}) => {
  if (!hasEventFunctions()) {
    throw new HasNoEventFunctionsError();
  }

  window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
};

export const addEvent = (type, callback) => {
  if (!hasEventFunctions()) {
    throw new HasNoEventFunctionsError();
  }

  window.addEventListener(type, callback, false);
};

export const removeEvent = (type, callback) => {
  window.removeEventListener(type, callback, false);
};

export const listenEvent = (eventName, listener) => {
  if (!hasEventFunctions()) {
    throw new HasNoEventFunctionsError();
  }

  const listenerWrap = e => listener(e.detail);

  addEvent(eventName, listenerWrap);
  return () => removeEvent(eventName, listenerWrap);
};
