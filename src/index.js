/**
 * @flow
 */

import React, {type Node} from 'react'

type DOMListenerProps =
  | {|
      capture?: boolean,
      listener: AnimationEventListener,
      once?: boolean,
      passive?: boolean,
      target: EventTarget,
      type: AnimationEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: DragEventListener,
      once?: boolean,
      passive?: boolean,
      target: EventTarget,
      type: DragEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: KeyboardEventListener,
      once?: boolean,
      passive?: boolean,
      target: EventTarget,
      type: KeyboardEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: MouseEventListener,
      once?: boolean,
      passive?: boolean,
      target: EventTarget,
      type: MouseEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: ProgressEventListener,
      once?: boolean,
      passive?: boolean,
      target: EventTarget,
      type: ProgressEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: TouchEventListener,
      once?: boolean,
      passive?: boolean,
      target: EventTarget,
      type: TouchEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: WheelEventListener,
      once?: boolean,
      passive?: boolean,
      target: EventTarget,
      type: WheelEventTypes,
    |}
  | {|
      capture?: boolean,
      listener: EventListener,
      once?: boolean,
      passive?: boolean,
      target: EventTarget,
      type: string,
    |}

type DOMListenerState = {|
  options: EventListenerOptionsOrUseCapture,
|}

export default class DOMListener extends React.Component<
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

    // eslint-disable-next-line flowtype/no-weak-types
    target.addEventListener(type, (listener: any), this.state.options)
  }

  componentWillUnmount() {
    const {listener, target, type} = this.props

    // eslint-disable-next-line flowtype/no-weak-types
    target.removeEventListener(type, (listener: any), this.state.options)
  }

  render(): Node {
    return null
  }
}
