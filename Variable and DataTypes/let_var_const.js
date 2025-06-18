function testVariables() {
  // var is function-scoped
  var a = 10;
  var a = 20; // ✅ Allowed: var can be redeclared
  console.log("var a:", a); // 20

  // let is block-scoped
  let b = 10;
  // let b = 20; ❌ Error: Identifier 'b' has already been declared (in the same scope)
  b = 20; // ✅ Allowed: let can be updated but not redeclared
  console.log("let b:", b); // 20

  // const is block-scoped and cannot be updated or redeclared
  const c = 10;
  // const c = 20; ❌ Error: Identifier 'c' has already been declared
  // c = 20; ❌ Error: Assignment to constant variable
  console.log("const c:", c); // 10

  // Scope difference example
  if (true) {
    var x = "var in block";
    let y = "let in block";
    const z = "const in block";
    console.log("Inside block:", x, y, z); // all accessible
  }

  console.log("Outside block x:", x); // ✅ Accessible (var is function scoped)
  // console.log("Outside block y:", y); ❌ Error: y is not defined
  // console.log("Outside block z:", z); ❌ Error: z is not defined
}

testVariables();
