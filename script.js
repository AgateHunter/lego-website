function askName() {
  let usersName = prompt('Hey Lego Maniac, what's your  name?');
  console.log(usersName);
  document.write("It's awesome you're ready to join Lego Fans of the World " + usersName);
  return usersName;
}

function askLego() {
  let usersAnswer = prompt('Does 's' belong at the end of the word Lego? Type yes or no.');

  console.log('User typed: ' + usersAnswer);

  if (usersAnswer == 'no') {
    document.write('Ding ding ding!');
  } else if (usersAnswer == 'I'm not sure') {
    document.write('That's okay, we'll help you');
  } else if (usersAnswer == 'yes') {            
    usersAnswer = prompt('Let's try that again? Do you think Lego should have an 's'');
    
    }
  }
}
