const human = Object.create(null);
human.name = "Sam";
human.age = 27;
human.city = "Masis";
human.greeting = function () {
  return `Welcome ${this.name}`;
}

export {human};