import DOMListener from '../index'
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
            listener={listener}
            target={target}
            type="click"
            {...props}
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
    })
  })
})
