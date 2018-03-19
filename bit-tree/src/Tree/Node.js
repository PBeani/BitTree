function Node() {

    this.value = 0;
    this.left = null;
    this.right = null;

    this.insertLeft = (node) => {
        this.left = node;
    }

    this.insertRight = (node) => {
        this.right = node;
    }

    this.removeLeft = () => {
        this.left = null;
    }

    this.removeRight = () => {
        this.right = null;
    }
}

export default Node