import {DOMListener} from '../index'
import {mount} from 'enzyme'
import React from 'react'

const TESTS = [
  {
    desc: 'when not capture, once, or passive',
    props: {},
  },
  {
    desc: 'when capture',
    props: {capture: true},
  },
  {
    desc: 'when once',
    props: {once: true},
  },
  {
    desc: 'when passive',
    props: {passive: true},
  },
  {
    desc: 'when capture and once',
    props: {capture: true, once: true},
  },
  {
    desc: 'when capture and passive',
    props: {capture: true, passive: true},
  },
  {
    desc: 'when once and passive',
    props: {once: true, passive: true},
  },
  {
    desc: 'when capture, once, and passive',
    props: {capture: true, once: true, passive: true},
  },
]

describe('DOMListener', () => {
  TESTS.forEach(({desc, props}) => {
    describe(desc, () => {
      let listener, target, wrapper

      beforeEach(() => {
        listener = jest.fn()
        target = {
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        }
        wrapper = mount(
          <DOMListener
            {...props}
            listener={listener}
            target={target}
            type="click"
          />,
        )
      })

      it('should function as expected when mounted', () => {
        expect(wrapper).toMatchSnapshot()
      })

      it('should function as expected when unmounted', () => {
        wrapper.unmount()
        expect({target, wrapper}).toMatchSnapshot()
      })

      describe('when capture changed', () => {
        beforeEach(() => {
          wrapper.setProps({capture: !props.capture})
        })

        it('should remove original listener and add new listener', () => {
          expect(wrapper).toMatchSnapshot()
        })
      })

      describe('when listener changed', () => {
        beforeEach(() => {
          wrapper.setProps({listener: jest.fn()})
        })

        it('should remove original listener and add new listener', () => {
          expect(wrapper).toMatchSnapshot()
        })
      })

      describe('when once changed', () => {
        beforeEach(() => {
          wrapper.setProps({once: !props.once})
        })

        it('should remove original listener and add new listener', () => {
          expect(wrapper).toMatchSnapshot()
        })
      })

      describe('when passive changed', () => {
        beforeEach(() => {
          wrapper.setProps({passive: !props.passive})
        })

        it('should remove original listener and add new listener', () => {
          expect(wrapper).toMatchSnapshot()
        })
      })

      describe('when target changed', () => {
        let newTarget

        beforeEach(() => {
          newTarget = {
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
          }

          wrapper.setProps({target: newTarget})
        })

        it('should remove original listener and add new listener', () => {
          expect({newTarget, target, wrapper}).toMatchSnapshot()
        })
      })

      describe('when type changed', () => {
        beforeEach(() => {
          wrapper.setProps({type: 'keyup'})
        })

        it('should remove original listener and add new listener', () => {
          expect(wrapper).toMatchSnapshot()
        })
      })

      describe('when updated with no changes', () => {
        beforeEach(() => {
          wrapper.setProps({})
        })

        it('should not add/remove any listeners', () => {
          expect(wrapper).toMatchSnapshot()
        })
      })
    })
  })
})
