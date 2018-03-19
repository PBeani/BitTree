import Node from './Node';

function Tree() {

    this.head = null;

    this.initializeTree = ( node ) => {
        let newNode = node || new Node();
        this.head = newNode;
    }

    this.visitNode = ( node ) => {
        console.log(node.value);
    }

    this.orderedPath = ( node ) => {
        if (!node) return;
        this.orderedPath(node.left);
        this.visitNode(node);
        this.orderedPath(node.right);
    }

    this.preOrderedPath = ( node ) => {
        if (!node) return;
        this.visitNode(node);
        this.preOrderedPath(node.left);
        this.preOrderedPath(node.right);
    }

    this.postOrderedPath = ( node ) => {
        if (!node) return;
        this.postOrderedPath(node.left);
        this.postOrderedPath(node.right);
        this.visitNode(node);
    }
}

export default Tree;