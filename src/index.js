/**
 * NOTE: Not typing target property to "EventTarget" because it causes issues
 * in the generated Flow types that are output to the lib directory.
 *
 * @flow
 */

import React from 'react'

type DOMListenerProps =
  | {|
      capture?: boolean,
      listener: AnimationEventListener,
      once?: boolean,
      passive?: boolean,
      target: any, // eslint-disable-line flowtype/no-weak-types
      type: AnimationEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: DragEventListener,
      once?: boolean,
      passive?: boolean,
      target: any, // eslint-disable-line flowtype/no-weak-types
      type: DragEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: KeyboardEventListener,
      once?: boolean,
      passive?: boolean,
      target: any, // eslint-disable-line flowtype/no-weak-types
      type: KeyboardEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: MouseEventListener,
      once?: boolean,
      passive?: boolean,
      target: any, // eslint-disable-line flowtype/no-weak-types
      type: MouseEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: ProgressEventListener,
      once?: boolean,
      passive?: boolean,
      target: any, // eslint-disable-line flowtype/no-weak-types
      type: ProgressEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: TouchEventListener,
      once?: boolean,
      passive?: boolean,
      target: any, // eslint-disable-line flowtype/no-weak-types
      type: TouchEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: WheelEventListener,
      once?: boolean,
      passive?: boolean,
      target: any, // eslint-disable-line flowtype/no-weak-types
      type: WheelEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: EventListener,
      once?: boolean,
      passive?: boolean,
      target: any, // eslint-disable-line flowtype/no-weak-types
      type: string,
    |}

type DOMListenerState = {|
  options: EventListenerOptionsOrUseCapture,
|}

/* eslint-disable flowtype/no-weak-types */
function addListener(
  target: any,
  type: any,
  listener: any,
  options: EventListenerOptionsOrUseCapture,
) {
  target.addEventListener(type, listener, options)
}

function removeListener(
  target: any,
  type: any,
  listener: any,
  options: EventListenerOptionsOrUseCapture,
) {
  target.removeEventListener(type, listener, options)
}
/* eslint-enable flowtype/no-weak-types */

export class DOMListener extends React.Component<
  DOMListenerProps,
  DOMListenerState,
> {
  static getDerivedStateFromProps(
    nextProps: DOMListenerProps,
    prevState: DOMListenerState,
  ): DOMListenerState {
    const {capture, once, passive} = nextProps

    if (once !== undefined || passive !== undefined) {
      return {
        options: {
          capture,
          once,
          passive,
        },
      }
    }

    return {
      options: !!capture,
    }
  }

  state = {
    options: false,
  }

  componentDidMount() {
    const {listener, target, type} = this.props
    addListener(target, type, listener, this.state.options)
  }

  componentDidUpdate(prevProps: DOMListenerProps, prevState: DOMListenerState) {
    const {capture, listener, once, passive, target, type} = this.props
    const {options} = this.state

    if (
      capture !== prevProps.capture ||
      listener !== prevProps.listener ||
      once !== prevProps.once ||
      passive !== prevProps.passive ||
      target !== prevProps.target ||
      type !== prevProps.type
    ) {
      removeListener(
        prevProps.target,
        prevProps.type,
        prevProps.listener,
        prevState.options,
      )

      addListener(target, type, listener, options)
    }
  }

  componentWillUnmount() {
    const {listener, target, type} = this.props
    removeListener(target, type, listener, this.state.options)
  }

  render(): null {
    return null
  }
}
