# sorting overview

### what is sorting

- sorting is the process of rearranging the items in a collection (ie. array ) so that the items are in some kind of order.
- ie. sorting numbers from smallest to largest
- ie. sorting names alphabetically
- sorting movies based on release year
- sorting movies based on revenue

### why learn sorting

- sorting is an incredibly common task, so it's good to know how it works
- there are many different ways to sort things, and different techniques have their own advantages and disavantages
- its a very common interview challenge

### objective

- bubble sort
- selection sort
- insertion sort
- understand why it is important to learn these simpler sorting algorithms
- go over more advanced sorting

### JS Built In sorting method array.sort()

- it doesnt always work the way you expect
- it accepts an optional comparator function
- you can use this comparator function to tell JS how you want it to sort.
- the comparator looks at pairs of elements (a and b), determines their sort order based on the return value.
  1. if it returns a negative number, a should come before b
  2. if it returns a positive number, a should come after b
  3. if it returns 0, a and b are the same as far as the sort is concerned

### example 1

        function numberCompare(num1, num2){
            return num1 - num2;
        }

        [6,4,15,10].sort(numberCompare);
        // [4,6,10,15]
