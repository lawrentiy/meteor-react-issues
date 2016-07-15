Some issues I found during usage Meteor and React together (via npm).

Case 1:

1. Create project
2. Add react from npm (meteor npm i --save react react-dom)
3. Add local package (tmp maned in code)
4. In that package add import: import React from 'react'
5. And export React from tmp package
6. In client.jsx file create Component using React imported from tmp package
7. Add google-maps-react npm package: (meteor npm i --save google-maps-react)
8. Try to render Component with GoogleMap and try to use render method from tmp package
It lead to error: Refs Must Have Owner Warning https://facebook.github.io/react/warnings/refs-must-have-owner.html

Not working code: 
https://github.com/lawrentiy/meteor-react-issues/commit/b1e86d6bf40ab2a8e69bca200b25a4723c6d1dde

How to fix it:
Just use only imported direct from npm packages React and ReactDOM.render

https://github.com/lawrentiy/meteor-react-issues/commit/87f8062b3bf6c4b34709757720d002b559d77143

Case 2:
If I remove webpack packages from project above (in working state)
It will break project to. It shows "React is not defined" error in browser console.

https://github.com/lawrentiy/meteor-react-issues/commit/b9f384231f3323f2fc2d88fefe8217355d966e4a

How to fix: 
Just import React with name of variable "React"

https://github.com/lawrentiy/meteor-react-issues/commit/0d654ef4cb751c9e4be3a0b01ac9a69f459edaef


That two cases have eaten 3 days of my life. And can eat more, because Case 1 will I have to rewrite my project structure.

Related links:

http://stackoverflow.com/questions/36910579/using-multiple-packages-in-meteor-1-3-that-include-the-same-npm-package

https://github.com/meteor/meteor/issues/7290

https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies
