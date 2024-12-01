# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

The outer loop runs n-1 times, which is an element of $\Theta$(n). The inner loop makes j comparisons each pass, where j is the size of the unsorted array, so j = n - 1 for the first pass, j = n - 2 for the second pass. Thus we can think of the amount of work done by the inner loop as an element of $\Theta$(n). Multiplying these two gives us a total time complexity of $\Theta$(n<sup>2</sup>).

Flips can be thought of in a very similar way. Each element we sort can take 0, 1, or 2 flips depending on its position. Doing this for every element gives us an asymptotic complexity for number of flips of $\Theta$(n), linear to number of elements. Within each flip we return to our trusty j, with j being the number of unsorted elements, n for first pass, n-1 for second pass, once again simplifying to $\Theta$(n). Multiplying these two once again gives us $\Theta$(n<sup>2</sup>)

This makes sense as we'd expect asymptotic runtime to be the same for any algorithm no matter which way you choose to evaluate it.

