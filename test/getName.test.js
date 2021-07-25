import getName from '../src/js/actions/getName';

it('returns the value found in the form input element', () => {
  document.body.innerHTML = '<input value="John">';
  expect(getName()).toBe('John');
});

it('Checks for the form proper input value', () => {
  document.body.innerHTML = '<input value="Ralph">';
  expect(getName()).not.toBe('John');
});

it('returns unknown if the value found in the form input element is an empty string', () => {
  document.body.innerHTML = '<input>';
  expect(getName()).toBe('unknown');
});