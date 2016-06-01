var thesumofmultiples = function(limit) 
{
  limit = document.getElementById("multiples5n3").value;

  var multiple = 0;

  for (i = 0; i < limit; i++) {
    if(i % 3 === 0 || i % 5 === 0){
      multiple += i;
    }
  }
  document.getElementById("result").innerHTML = multiple;
}

var fibosum = function(limit2)
{
  limit2 = document.getElementById("fibonacci").value;

  var nums = [1,2];
  var sum = 0;
  var i = 1;

  while(nums[i] <= limit2){
    if(nums[i] % 2 === 0){
      sum += nums[i];
    }
    nums[i+1] = nums[i] + nums[i-1];
    i += 1;
  }
    document.getElementById("result2").innerHTML = sum;
}


var largestprime = function(limit3)
{
  limit3 = document.getElementById("prime").value;
  var bigPrime = 0;
  var primes = [];

  for(i = 0; i * i <= limit3; i++) {
    if(limit3 % i === 0){         // on jaollinen
      isprime = true;
      for(j = 2; j < i; j++){
        if(i % j === 0){
          isprime = false;
          break;
          }
        }
      if (isprime){
        primes.push(i);           //logia varten
        bigPrime = i;
      }
    }
  }
  console.log(primes);
  document.getElementById("result3").innerHTML = bigPrime;
}