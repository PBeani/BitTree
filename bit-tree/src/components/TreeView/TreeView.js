import React, { Component } from 'react'
import TreeNode from '../TreeNode/TreeNode'

const treeView = (props) => {
    return (
        <TreeNode node={props.node} />
    )
}

export default treeView