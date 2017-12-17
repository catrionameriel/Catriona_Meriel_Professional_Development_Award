### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val
  # val needs brackets
  if val = 1
  # needs ==
  return true
  # tab line
  else
  return false
  # tab line
  end
end

dif max a b
# should be def not dif and brackets around letters, with comma in the middle
  if a > b
      return a
      # tabbed too far
  else
  b
  # missing a return
  end
end
# extra end
end

def looper
  for i in 1..10
  puts i
  # use return not puts
  # move return to out of the for loop
  end
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
# missing end

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
  # mis-spelled failures
end


if failures
  # needs condition -> (greater than zero)
  puts "Test Failed"
else
  puts "Test Passed"
end
