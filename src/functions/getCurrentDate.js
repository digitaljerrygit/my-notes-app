function getCurrentDate() {
  return new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
}

export default getCurrentDate;