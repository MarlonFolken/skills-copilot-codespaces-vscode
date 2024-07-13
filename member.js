function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 25,
    skills: ['HTML', 'CSS', 'JS'],
    greet: function() {
      console.log('Hi, I am ' + this.name);
    }
  };
  return member;
}