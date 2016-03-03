# rosalind-node
My Rosalind Solutions With Node.js

To solve a new problem, grab the text file from the problem online, and make a note of the filename id.

> rosalind_ini2.txt || filename id -> ini2

`3 5`

Create a new file that has the same name as the text file you just downloaded.

> rosalind_ini2.js

In that file, create a function to be exported called `main`.

```js
module.exports = {
    main: function (data) {
        // I am the data from the text file. Split, slice, do whatever to solve the problem.
    }
};     
```

The answer should post directly to the command line.

```
$> cd ~/code/node/rosalind-node
$> node solve.js ini3
34
```

*If your rosalind files do not download to to the `~/Downloads` directory, add an extra argument on the command line with the correct downloads directory.

```
$> node solve.js ini3 /Desktop 
34
```