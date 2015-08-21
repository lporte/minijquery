// var myNamespace = (function () {

//   var myPrivateVar, myPrivateMethod;

//   // A private counter variable
//   myPrivateVar = 0;

//   // A private function which logs any arguments
//   myPrivateMethod = function( foo ) {
//       console.log( foo );
//   };

//   return {

//     // A public variable
//     myPublicVar: "foo",

//     // A public function utilizing privates
//     myPublicFunction: function( bar ) {

//       // Increment our private counter
//       myPrivateVar++;

//       // Call our private method using bar
//       myPrivateMethod( bar );

//     }
//   };

// })();

//Make private function that will be assigned to key value pairs in the return
//Look for at argument passed in and see after the single quote what character is next
//choose which vanilla javascript to use
//Use that method to find an element on the page with the matching class, id, tag, etc.
//return in an array or on its own(ID)

//  OLD CODE
    //     var id = element.substr(1)
    //     result = document.getElementById(id)
    //     console.log(result.first)
    //   }
    //   else if (element[0] === ".") {

    //   }
    //   else {

    //   }
    // }
    // return {
    //   elementSelector: select
    // }

  var SweetSelector = (function (){

    console.log("MADE IT")

    var select = function(element) {
      if (element[0] === "#"){
        var id = element.substr(1)
        result = document.getElementById(id)
        return result
      }
      else if (element[0] === ".") {
        var klass = element.substr(1)
        result = document.getElementsByClassName(klass)
        return result
      } else {
        result = document.getElementsByTagName(element)
        return result
      }
    }

    return {
      selector: select
    }

  })()
      debugger
// }
