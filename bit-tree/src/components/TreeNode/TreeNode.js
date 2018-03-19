import React from 'react'
import TreeNode from './TreeNode'

const treeNode = (props) => {
    const node = props.node

    const content = node ?
        <div style={{width: `${props.width}%`, display: 'inline-block', border: '1px solid black'}}>
            <div>Node: {node.value}</div>
            <TreeNode node={node.left} width={45} />
            <TreeNode node={node.right} width={45} />
        </div>
        :
        <div style={{width: `${props.width}%`, display: 'inline-block'}}>
            Vazio
        </div>
    return content
}

export default treeNode