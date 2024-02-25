###
# Sort integer arguments (ascending)
###
result = []

ARGV.each do |arg|
    # skip if not integer
    next unless arg =~ /^-?[0-9]+$/

    # convert to integer
    i_arg = arg.to_i

    # insert result at the right position
    i = result.bsearch_index { |x| x >= i_arg } || result.size
    result.insert(i, i_arg)
end

puts result
