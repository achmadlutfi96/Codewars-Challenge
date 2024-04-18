function combat(health, damage) {
  // Write your code here
  return health <damage ? 0 : health-damage;
  
  // Alternative
  // return Math.max(0, health - damage);
}

console.info(combat(100, 5));