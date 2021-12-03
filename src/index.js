const g = 'global';

function f() {
  const name = 'Vlad';
  function ff() {
    const orara = 'f in function';
    console.log(name);
    console.log(g);
  }
  return ff();
}

f();

const a = 'a';

const p = 'petya';

const v;