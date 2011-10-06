# code kata 2: karate chop
#

# Returns the index of needle in haystack, or -1 if
# needle cannot be found
#
# needle - an integer
# haystack - a sorted array of integers
#
# Version 3 - using Ruby methods
def chop(needle, haystack)
  if haystack.include?(needle)
    return haystack.index(needle)
  end

  return -1
end

