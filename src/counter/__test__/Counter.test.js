import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Counter from '../Counter'
import '@testing-library/jest-dom/extend-expect'

test('header renders with correct text', () => {
  const { getByTestId } = render(<Counter />)
  const headerEl = getByTestId('header')
  expect(headerEl.textContent).toBe('My Counter')
})

test('counter initially start with text of 0', () => {
  const { getByTestId } = render(<Counter />)
  const counterEl = getByTestId('counter')
  expect(counterEl.textContent).toBe('0')
})

test('input contains initial value of 1', () => {
  const { getByTestId } = render(<Counter />)
  const inputEl = getByTestId('input')
  expect(inputEl.value).toBe('1')
})

test('add button renders wtih +', () => {
  const { getByTestId } = render(<Counter />)
  const addBtn = getByTestId('add-btn')
  expect(addBtn.textContent).toBe('+')
})
test('substract button renders wtih -', () => {
  const { getByTestId } = render(<Counter />)
  const substractBtn = getByTestId('subtract-btn')
  expect(substractBtn.textContent).toBe('-')
})

test('changing value of input works correctly', () => {
  const { getByTestId } = render(<Counter />)
  const inputEl = getByTestId('input')

  expect(inputEl.value).toBe('1')
  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  })
  expect(inputEl.value).toBe('5')
})

test('clicking on plus btn adds 1 to counter', () => {
  const { getByTestId } = render(<Counter />)
  const addbtnEl = getByTestId('add-btn')
  const counterEl = getByTestId('counter')
  expect(counterEl.textContent).toBe('0')

  fireEvent.click(addbtnEl)
  expect(counterEl.textContent).toBe('1')
})
test('clicking on minus btn subtracts 1 from counter', () => {
  const { getByTestId } = render(<Counter />)
  const subtractbtnEl = getByTestId('subtract-btn')
  const counterEl = getByTestId('counter')
  expect(counterEl.textContent).toBe('0')

  fireEvent.click(subtractbtnEl)
  expect(counterEl.textContent).toBe('-1')
})

test('changing input value then clicking on add btn works correctly', () => {
  const { getByTestId } = render(<Counter />)
  const addbtnEl = getByTestId('add-btn')

  const counterEl = getByTestId('counter')
  const inputEl = getByTestId('input')

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  })
  fireEvent.click(addbtnEl)
  expect(counterEl.textContent).toBe('5')
})

test('changing input value then clicking on subtract btn works correctly', () => {
  const { getByTestId } = render(<Counter />)
  const subtractBtnEl = getByTestId('subtract-btn')

  const counterEl = getByTestId('counter')
  const inputEl = getByTestId('input')

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  })
  fireEvent.click(subtractBtnEl)
  expect(counterEl.textContent).toBe('-5')
})
