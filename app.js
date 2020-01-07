'use strict'; 

var childhood = prompt('Did I grow up in Seattle?');
if(childhood.toLowerCase() === 'yes'){
  alert('No I did not');
}else{
  alert('you are correct');
}

var job = prompt('Have I worked in tech before?');
if(job.toUpperCase() === 'YES'){
  alert('You are incorrect');
}else{
  alert('You are correct');
}

var age = prompt('Am I 26 years of age?');
if(age.toLowerCase() === 'yes'){
  alert('You are correct');
}else{
  alert('You are incorrect');
}

var school = prompt('Did I attend College?');
if(school.toLowerCase() === 'yes'){
  alert('You are correct');
}else{
  alert('You are incorrect');
}

var employer = prompt('Is my ideal employer Lockheed?');
if(employer.toUpperCase() === 'YES'){
  alert('You are correct');
}else{
  alert('You are incorrect');
}
