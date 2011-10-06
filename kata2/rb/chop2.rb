# code kata 2: karate chop
#

# Returns the index of needle in haystack, or -1 if
# needle cannot be found
#
# needle - an integer
# haystack - a sorted array of integers
#
# Version 2 - using iterative programming
def chop(needle, haystack)
  index = 0 
  if !haystack.empty?
    haystack.each { |h|
      if h == needle
        return index
      else
        index += 1
      end
    }
  end
  index = -1
end

