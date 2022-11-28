// If the string starts with R, execute specific console.log.

function areYouPlayingBanjo(name) {
    if (name.toLowerCase().charAt(0) == 'r') {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

// Probably another way to code this with startsWith method?
