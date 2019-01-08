const person = {
  name: 'Someone',
  fbFriends: {
    count: 'many'
 }
};

const isNil = value =>
  (value === undefined) || (value === null);

const maybe = value =>
  isNil(value) ? [] : [value];

console.log(
  maybe(person.fbFriends)
    .map(x => x.count)
    .map(x => x.length)
);
