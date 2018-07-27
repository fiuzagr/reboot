import isArray from 'lodash/isArray';

export function AbstractError(message, ...args) {
  this.name = 'Error';
  this.message = message;
  this.stack = new Error(message).stack;
  this.args = args;
  this.toJSON = () => {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      args: this.args
    };
  };
}
AbstractError.prototype = new Error();

export function HasNoEventFunctionsError() {
  this.name = 'HasNoEventFunctionsError';
  this.message = 'The current environment has no event functions.';
}
HasNoEventFunctionsError.prototype = new AbstractError();

export function InvalidDateError(message) {
  this.name = 'InvalidDateError';
  this.message = `Invalid date: ${message}.`;
}
InvalidDateError.prototype = new AbstractError();

export function ApiError(message, args) {
  this.name = 'ApiError';
  this.args = args;
  this.message = `An error occurred in API: ${message}.`;
}
ApiError.prototype = new AbstractError();
