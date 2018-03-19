import React, { Component } from 'react';
import Tree from './Tree/Tree'
import Node from './Tree/Node'
import TreeView from './components/TreeView/TreeView'
import './App.css';

class App extends Component {
  render() {

    const tree = new Tree();
    const a = new Node();
    a.value = 'a';
    const b = new Node();
    b.value = 'b';
    const c = new Node();
    c.value = 'c';
    const d = new Node();
    d.value = 'd';
    const e = new Node();
    e.value = 'e';
    const f = new Node();
    f.value = 'f';
    const g = new Node();
    g.value = 'g';
    const h = new Node();
    h.value = 'h';
    const i = new Node();
    i.value = 'i';

    d.insertLeft(c);
    d.insertRight(e);
    c.insertLeft(a);
    c.insertRight(b);
    b.insertLeft(i);
    e.insertRight(f);
    f.insertLeft(h);
    f.insertRight(g);
    tree.head = d;

    return (
      <div className="App">
        <TreeView node={tree.head} />
      </div>
    );
  }
}

export default App;
