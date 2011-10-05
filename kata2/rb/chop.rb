# code kata 2: karate chop
#

# Returns the index of needle in haystack, or -1 if
# needle cannot be found
#
# needle - an integer
# haystack - a sorted array of integers
def chop(needle, haystack)
  if haystack.empty?
    return -1
  end

  if haystack.size == 1
    return (haystack[0] == needle) ? 0 : -1
  end

  pivot = haystack.size / 2
  if haystack[pivot] == needle
    return pivot
  elsif needle < haystack[pivot]
    # throw away 2nd half of array
    return chop(needle, haystack.slice(0, pivot))
  else
    # throw away first half of array
    tmp = chop(needle, haystack.slice(pivot, haystack.size - pivot))
    return (tmp == -1) ? tmp : pivot + tmp
  end
end

